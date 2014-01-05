var currentLongitude = null;
var currentLatitude = null;

var selectBoxCities = [
        {
          "id": 1, "name": "Bratislava", "latitude": 48.1481600, "longitude": 17.1067400
        }, {
          "id": 2, "name": "Košice", "latitude": 48.72099560, "longitude": 21.25774770
        }, {
          "id": 3, "name": "Trnava", "latitude": 48.366669, "longitude": 17.583332
        }];

// get position
function getPosition() {
    loaderMessage('show');

    if ($.mobile.temp.isInternetConection) {
        document.getElementById("map-canvas").style.display = "block";
        document.getElementById("no-internet-conection").style.display = "none";

        if (navigator.geolocation) {
            var options = {timeout: 4000};
            navigator.geolocation.getCurrentPosition(onSuccess, onError, options);
        }
        else {
            document.getElementById("no-internet-conection").innerHTML = "Vaša zariadenie nema zabudované GPS.";
            document.getElementById("no-internet-conection").style.display = "block";
            initializeMap(selectBoxCities[0].latitude, selectBoxCities[0].longitude, selectBoxCities[0].name);
        }
    }
    else {
        document.getElementById("map-canvas").style.display = "none";
        document.getElementById("no-internet-conection").innerHTML = "Ak chcete zobrazit mapu lekárni, vaše zariadenie musíte pripojiť k internetu.";
        document.getElementById("no-internet-conection").style.display = "block";
    }
}

// onSuccess Callback
function onSuccess(position) {
    if (position.coords.latitude)
        currentLatitude = position.coords.latitude;

    if (position.coords.longitude)
        currentLongitude = position.coords.longitude;

    initializeMap(currentLatitude, currentLongitude, 'Moja poloha');
    console.log("SUCCESS: get position with longitude = " + currentLatitude + ", longitude = " + currentLongitude);
}

// onError Callback
function onError(error) {
    switch(error.code){
        case 0:
            // alert("There was an error while retrieving your location. Additional details: " + error.message);
            break;
        // PERMISSION_DENIED
        case 1:
            // alert("The user opted not to share his or her location.");
            break;
        // POSITION_UNAVAILABLE
        case 2:
            // alert("The application was unable to determine your location. Additional details: " + error.message);
            break;
        // TIMEOUT
        case 3:
            // alert("The application timed out before retrieving the location.");
            break;
    }

    document.getElementById("no-internet-conection").innerHTML = "Vaša poloha nie je dostupná.";
    document.getElementById("no-internet-conection").style.display = "block";
    initializeMap(selectBoxCities[0].latitude, selectBoxCities[0].longitude, selectBoxCities[0].name);
}

// google map initialize
var map = null;
var mapMarker = [];
var mapText = [];

function initializeMap(lat, long, message) {
    // map canvas
    var mapCanvas = document.getElementById('map-canvas');

    // map canvas set height
    mapCanvas.style.height = ($.mobile.temp.deviceHeight - 250) + "px";

    // init
    var mapLatlng = new google.maps.LatLng(lat, long);
    var mapOptions = {
        zoom: 13,
        center: mapLatlng,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    map = new google.maps.Map(mapCanvas, mapOptions);

    if (currentLatitude && currentLongitude) {
        mapMarker[0] = new google.maps.Marker({
            position: mapLatlng,
            map: map,
            title: message,
            visible: true,
            icon: new google.maps.MarkerImage (
                    "img/marker.png", // reference from your base
                    new google.maps.Size(36, 36), // size of image to capture
                    new google.maps.Point(0, 0), // start reference point on image (upper left)
                    new google.maps.Point(10, 10), // point on image to center on latlng (scaled)
                    new google.maps.Size(20, 34) // actual size on map
                )
        });
    }

    loadSelectCities(selectBoxCities);
    listChemists();
    loaderMessage('hide');
}

// nacitam pripravene mesta do selectboxu
function loadSelectCities(cities) {
    var selectbox = document.getElementById("selectBoxCities");
    var html = "";
    var i = 0;

    if (selectbox && cities) {
        if (currentLatitude && currentLongitude) {
            html += '<option value="' + 0 + '#' + currentLatitude + '#' + currentLongitude + '" selected="selected">Moja poloha</option>';
            i++;
        }

        for (i in cities) {
            html += '<option value="' + cities[i].id + '#' + cities[i].latitude + '#' + cities[i].longitude + '">' + cities[i].name + '</option>';
        }

        selectbox.innerHTML = html;
    }
}

// change map position
function changeSelectBoxCities(selectbox) {
    var index = selectbox.selectedIndex;
    var value = selectbox.options[index].value.split("#");
    var lat = value[1];
    var long = value[2];
    var mapLatlng = new google.maps.LatLng(lat, long);

    map.setCenter(mapLatlng);
    //mapMarker[0].setPosition(mapLatlng);

    console.log("SUCCESS: change map position");
}

// list chemist
function listChemists() {
    var mapLatlng;
    var i = 0;

    if (loadDataChemists) {
        for (i in loadDataChemists) {
            mapLatlng = new google.maps.LatLng(loadDataChemists[i].latitude, loadDataChemists[i].longitude);

            mapMarker[i + 1] = new google.maps.Marker({
                position: mapLatlng,
                map: map,
                title: loadDataChemists[i].title,
                visible: true
            });

        }
    }
}

// vypocitam vzdialenost medzi dvomi bodmi
function getDistance(startLong, startLat, endLong, endLat) {
  var result = null;
  var dLat = toRad(endLat-startLat);
  var dLon = toRad(endLong-startLong);
  var latStart = toRad(startLat);
  var latEnd = toRad(endLat);

  var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
          Math.sin(dLon/2) * Math.sin(dLon/2) * Math.cos(latStart) * Math.cos(latEnd);

  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  result = r * c;

  return result;
}