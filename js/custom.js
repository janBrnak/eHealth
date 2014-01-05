var apiUrl      = "http://mitpapi.apiary.io/";
var apiVersion  = "version";
var apiMenu     = "menu";
var apiArticles = "articles";
var apiDevices  = "devices";
var apiChemists = "chemists";
var apiUpdated  = 0;

var storageVersion  = "apiVersion";
var storageMenu     = "apiMenu";
var storageArticles = "apiArticles";
var storageDevices  = "apiDevices";
var storageChemists  = "apiChemists";

var loadDataVersion  = null;
var loadDataMenu     = null;
var loadDataArticles = null;
var loadDataDevices  = null;
var loadDataChemists = null;

var loadDataDevicesText  = {
    1: {
        "id": "glukomer",
        "active": 1,
        "folder": "img/devices/glukomer/",
        "length": 15,
        "pictures": {
            1: {"full": "01", "empty": false, "text": "Glukomer umožňuje poskztovateľom zdravotníckej starostlivosti a osobám so dravotným postihnutím dostať sa cez hodnoty krvnej glukózy k zvýznamniteľným výsledkom pomocou škály vhodných nástrojov kompatibilných s informačným manažmentom.", "duration": 5000},
            2: {"full": "02", "empty": "02b", "text": "Najprv porovnajte číslo kódu na kódovcom čipe s príslušným údajom vytlačeným na nálepke tuby s testovacími prúžkami.", "duration": 5000},
            3: {"full": "03", "empty": "03b", "text": "Kódovací čip zasuňte rovno a bez použitia sily do drážky na bočnej strane glukomeru.", "duration": 5000},
            4: {"full": "04", "empty": "04b", "text": "Držte testovací prúžok tak, aby šípky na ňom smerovali nahor. Zasňte testovací prúžok bez toho, aby ste ho mohli opatrne v smere šípok do drážky na testovací prúžok.", "duration": 5000},
            5: {"full": "05", "empty": "05b", "text": "Preverte, či sa toto číslo kódu zhoduje s číslom kódu na nálepke tuby s testovacími prúžkami. Ak nie tak obráťte sa na zákaznícku podporu a servis.", "duration": 5000},
            6: {"full": "06", "empty": "06b", "text": "Na displeji sa zabrazí symbol testovacieho prúžku a blikajúci symbol kvapky. Glukomer je v tomto okamihu pripravený na meranie.", "duration": 5000},
            7: {"full": "07", "empty": "07b", "text": "Pichnite si odberovým perom z boku do bruška prsta. Kvapku krvi naneste na stred oranžového políčka a prst potom od testovacieho prúžku odtiahnite.", "duration": 5000},
            8: {"full": "08", "empty": "08b", "text": "Blikajúci symbol presýpacích hodín signalizuje, že meranie prebiha. Asi po piatich sekunách je meranie ukončené. Na displeji sa zobrazí nameraná hodnota. Zároveň si glukomer uloží výsledky merania do pamäte.", "duration": 5000},
            9: {"full": "09", "empty": "09b", "text": "Stláčajte tlačídlo S dovtedy, kým sa neobjaví požadované označenie", "duration": 5000},
            10: {"full": "10", "empty": "10b", "text": "Po meraní môžete prejsť i priamo k hodnotám uloženým v pamäti. Krátko stlačte tlačidlo M, kým je ešte zobrazený výsledok merania.", "duration": 5000},
            11: {"full": "11", "empty": "11b", "text": "Kým budete držať tlačidlo S stlačené, bude zobrazované číslo v pamäti. Keď tlačidlo pustíte, bude zobrazený príslušný výsledok merania.", "duration": 5000},
            12: {"full": "12", "empty": "12b", "text": "Do glukomeru je integrované informačné rozhranie, pomocou ktorého je možný bezdrôtový prenos výsledkov merania do príslušne vybaveného počítača alebo mobilu", "duration": 5000},
            13: {"full": "13", "empty": "13b", "text": "Stlačte tlačídlo M na vypnutom glukomeri a držte ho stlačené tak dlho, kým displeji nezečne blikať.", "duration": 5000},
            14: {"full": "14", "empty": "14b", "text": "Položte glukomer 5-20 cm od informačného rozhrania prijímajúcej strany. Upravte obidve infračervené rozhrania tak, aby smerovali k sebe navzájom", "duration": 5000},
            15: {"full": "15", "empty": "15b", "text": "Stlačením tlačidla M glukomer vypnete.", "duration": 5000}
        },
        "animationCount": null,
        "animationBox": null,
        "animationPictureBox": null,
        "animationPicture": null,
        "animationTextBox": null,
        "animationText": null,
        "progressBar": null,
        "buttonPrev": null,
        "buttonPause": null,
        "buttonContinue": null,
        "buttonNext": null
    },
    2: {
        "id": "odberove-pero",
        "active": 1,
        "folder": "img/devices/odberove-pero/",
        "length": 15,
        "pictures": {
            1: {"full": "01", "empty": false, "text": "Odberové perá (autolacenty) sú určené na bezpečný vpich do oblasti kože a podkožkia za účelom získania malej kvapky krvi na stanovenie kapilárnej glykémie", "duration": 5000},
            2: {"full": "02", "empty": "02b", "text": "Najprv musíte nabiť svoje odberové zariadenie a k tomu potrebujete odberovú lancetu.", "duration": 5000},
            3: {"full": "03", "empty": "03b", "text": "Odstráňte kryt z odberového zariadenia.", "duration": 5000},
            4: {"full": "04", "empty": "04b", "text": "Lancety sú na jednorazové použitie a nesmú sa opakovane používať. Opakovane použitá lanceta už nie je sterilná. Stráca svoju ostrosť a každé vpichnutie vášho prsta sa stane bolestivejším.", "duration": 5000},
            5: {"full": "05", "empty": "05b", "text": "Teraz vložte lancetu do držiaka tak ako je to zobrazené.", "duration": 5000},
            6: {"full": "06", "empty": "06b", "text": "Z lancety odskrutkujte a odstráňte ochranný kryt, aby ste odkryli ihlu.", "duration": 5000},
            7: {"full": "07", "empty": "07b", "text": "Z lancety odskrutkujte a odstráňte ochranný kryt, aby ste odkryli ihlu.", "duration": 5000},
            8: {"full": "08", "empty": "08b", "text": "Z lancety odskrutkujte a odstráňte ochranný kryt, aby ste odkryli ihlu.", "duration": 5000},
            9: {"full": "09", "empty": "09b", "text": "Kryt nasaďte späť na vaše odberové zariadenie.", "duration": 5000},
            10: {"full": "10", "empty": "10b", "text": "Presvedčte sa, že zárez na kryte so značkou ste nasmerovali tak ako je to vyobrazené.", "duration": 5000},
            11: {"full": "11", "empty": "11b", "text": "Ďalším stupňom je nastavenie hĺbky vpichu tak, aby zodpovedala vášmu individuálnemu typu kože. Otáčaním číselníka na kryte môžete nastaviť hĺbku lancety. Na začiatok nastavte číselník na 2.", "duration": 5000},
            12: {"full": "12", "empty": "12b", "text": "Odberové zariadenie musíte pred použitím pripraviť. Stlačte piest celkom nadol.", "duration": 5000},
            13: {"full": "13", "empty": "13b", "text": "Odberové zariadenie musíte pred použitím pripraviť. Stlačte piest celkom nadol.", "duration": 5000},
            14: {"full": "14", "empty": "14b", "text": "Spúšťacie tlačidlo na boku odberového zariadenia teraz zožltlo, to naznačuje, že vaše odberové zariadenie je natiahnuté a pripravené na použitie.", "duration": 5000},
            15: {"full": "15", "empty": "15b", "text": "Stlačením žltého tlačidla uvoľníte lancetu. Lanceta sa vpichne do prsta.", "duration": 5000},
            15: {"full": "16", "empty": "16b", "text": "Lancetu likvidujte tak, aby nemohla nikoho poraniť. Pri likvidácii lancety najprv odstráňte kryt z odberového zariadenia. Pri odstraňovaní lancety nasmerujte odberové zariadenie do kontajnera a vysuňte lancetu posúvaním ejektora dopredu.", "duration": 5000}
        },
        "animationCount": null,
        "animationBox": null,
        "animationPictureBox": null,
        "animationPicture": null,
        "animationTextBox": null,
        "animationText": null,
        "progressBar": null,
        "buttonPrev": null,
        "buttonPause": null,
        "buttonContinue": null,
        "buttonNext": null
    },
    3: {
        "id": "inzulinova-pumpa",
        "active": 1,
        "folder": "img/devices/inzulinova-pumpa/",
        "length": 15,
        "pictures": {
            1: {"full": "01", "empty": false, "text": "Accu-Chek Spirit je inzulínová pumpa s tromi prevádzkovými ponukami, ktoré sú vyhotovené na mieru Vašej úrovne potrieb a skúseností. Je určená expertovi, ktorým ste dnes, alebo ktorým sa stanete zajtra.", "duration": 5000},
            2: {"full": "02", "empty": "02b", "text": "Najskôr si musíte umyť ruky.", "duration": 5000},
            3: {"full": "03", "empty": "03b", "text": "Utrite gumovú zátku ampulky antiseptickým tampónom.", "duration": 5000},
            4: {"full": "04", "empty": "04b", "text": "Nasaďte naťahovaciu ihlu s ochrannou krytkou na hrdlo zásobníka.", "duration": 5000},
            5: {"full": "05", "empty": "05b", "text": "Zatlačte hrot naťahovacej ihly do stredu gumennej membrány ampulky s inzulínom. Stlačte naťahovaciu tyčinku dole, aby sa všetok vzduch zo zásobníka dostal do ampulky.", "duration": 5000},
            6: {"full": "06", "empty": "06b", "text": "Otočte ampulku s inzulínom tak, aby naťahovacia ihla a zásobník smerovali nahor. Pomaly povoľujte tlak na naťahovacej tyčinke a nechajte inzulín pretiecť do zásobníka.", "duration": 5000},
            7: {"full": "07", "empty": "07b", "text": "Poklepaním na zásobník odstráňte všetky vzduchové bublinky.", "duration": 5000},
            8: {"full": "08", "empty": "08b", "text": "Vyberte naťahovaciu tyčinku a vyberte naťahovaciu ihlu s nasadenou ochrannou krytkou zo zásobníka.", "duration": 5000},
            9: {"full": "09", "empty": "09b", "text": "Zatlačte ochranný uzáver zásobníka na zásobník (budete počuť cvaknutie). Teraz je zásobník pripravený na použitie.", "duration": 5000},
            10: {"full": "10", "empty": "10b", "text": "Nasuňte adaptér na hrdlo zásobníka až na doraz (a). Pripojte infúznu súpravu podľa príslušných pokynov na použitie (b).", "duration": 5000},
            11: {"full": "11", "empty": "11b", "text": "Podržte nový naplnený zásobník s adaptérom smerujúcim nahor a priložte ho rovnobežne k priestoru pre zásobník. Kontrolujte, či je dolný okraj časti adaptéra zarovnaný s horným okrajom priestoru pre zásobník.", "duration": 5000},
            12: {"full": "12", "empty": "12b", "text": "Otáčajte adaptérom v smere hodinových ručičiek, kým nebude zarovnaný s priestorom pre zásobník.", "duration": 5000},
            13: {"full": "13", "empty": "13b", "text": "Na displeji má byť zásobník plný.", "duration": 5000},
            14: {"full": "14", "empty": "14b", "text": "Inzulínový set pomože dostať inzulín do vášho tela.", "duration": 5000},
            15: {"full": "15", "empty": "15b", "text": "Pomocou glukomera môžete nastaviť dávkovanie cez bluetooth rozhranie.", "duration": 5000},
        },
        "animationCount": null,
        "animationBox": null,
        "animationPictureBox": null,
        "animationTextBox": null,
        "animationPicture": null,
        "progressBar": null,
        "buttonPrev": null,
        "buttonPause": null,
        "buttonContinue": null,
        "buttonNext": null
    },
    4: {
        "id": "telemedicine",
        "active": 1,
        "folder": "img/devices/telemedicine/",
        "length": 11,
        "pictures": {
            1: {"full": "01", "empty": false, "text": false, "duration": 5000},
            2: {"full": "02", "empty": "02b", "text": "Telemedicínu diabetes set môžete kúpiť v lekárni alebo možete objednať na internete.", "duration": 5000},
            3: {"full": "03", "empty": "03b", "text": "Balíček obsahuje Glukomer -prístroj určený na meranie hladiny glukózy v krvi. Odberové pero urobí takmer bezbolestný vpich do bruška prsta.", "duration": 5000},
            4: {"full": "04", "empty": "04b", "text": "Testovacie prúžky do glukomeru a lancety (ihly).", "duration": 5000},
            5: {"full": "05", "empty": "05b", "text": "Inzulínová pumpa na dávkovanie inzulínu a zdravotná váha ", "duration": 5000},
            6: {"full": "06", "empty": "06b", "text": "K baleniu dostanete aj CD a môžete si nainštalovať aplikáciu na ukladanie nameraných hodnôt, alebo si ju môžete stiahnúť na mobilný telefón prostredníctvom internetu.", "duration": 5000},
            7: {"full": "07", "empty": "07b", "text": "V počítači a v mobilnom telefóne môžete nastaviť vaše osobné údaje, aby váš lekár mohol rýchlo a bez problémov nájsť odoslané údaje.", "duration": 5000},
            8: {"full": "08", "empty": "08b", "text": "Začnime merať hladinu cukru v krvi. Pomocné videá sú k dispozícii v aplikácii na každý merací prístroj.", "duration": 5000},
            9: {"full": "09", "empty": "09b", "text": "Namerané údaje môžete poslať do počítača, mobilného telefónu alebo do tabletu pomocou bluetooth a máte možnosť následného uloženia do databázy.", "duration": 5000},
            10: {"full": "10", "empty": "10b", "text": "Údaje pošle lekárovi prostredníctvom internetu, aby mohol kontrolovať zdravotný stav pacienta.", "duration": 5000},
            11: {"full": "11", "empty": "11b", "text": "Keď sa vyskytne nejaký problém, t.j. hodnoty sú prinízke alebo privysoké, lekár môže dať podnet (prostredníctvom aplikácie) na to, že treba ísť na vyšetrenie, napr. poslaním e-mailu alebo keď je to veľmi súrne, zavolaním.", "duration": 5000}
        },
        "animationCount": null,
        "animationBox": null,
        "animationPictureBox": null,
        "animationPicture": null,
        "animationTextBox": null,
        "animationText": null,
        "progressBar": null,
        "buttonPrev": null,
        "buttonPause": null,
        "buttonContinue": null,
        "buttonNext": null
    }
};


var pageId = "";
var urlSelectors = [/^#article\?/, /^#device\?/, /^#information\?/, /^#using\?/, /^#accessories\?/];

var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicity call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        navigator.splashscreen.show();
        document.addEventListener("offline", offlineDevice, false);
        //document.addEventListener("backbutton", clickBackButton, false);
    }
};

// callback offline evevnt listener
function offlineDevice() {

}

// callback back button event listener
function clickBackButton() {

}

$(document).on("mobileinit", function(response) {
    $.support.cors = true;
    $.mobile.allowCrossDomainPages = true;
    //$.mobile.phonegapNavigationEnabled = true;
    $.mobile.defaultPageTransition = "none";    // default fade
    $.mobile.page.prototype.options.addBackBtn = false;
    $.mobile.loader.prototype.options.text = "Loading";
    $.mobile.loader.prototype.options.textVisible = true;
    $.mobile.loader.prototype.options.theme = "c";
    $.mobile.loader.prototype.options.html = "";

    // extend
    $.extend($.mobile, {
        temp: {
            init: false,
            isInternetConection: false,
            lastSelector: 'home',
            lastId: 0,
            lastUrl: null,
            lastOptions: null,
            deviceOrietation: null,
            deviceWidth: $(window).width(),
            deviceHeight: $(window).height(),
            video: {
                activeVideo: 0,
                activeStep: 0
            }
        }
    });

    // load storage
    loadStorageData();

    // ak som online skontrolujem verziu
    if (navigator.onLine) {
        $.get(apiUrl + apiVersion, function(data) {
            if (data && data.version) {
                var newVersion = data.version;
                var actualVersion = window.localStorage.getItem(storageVersion);//loadDataVersion;

                if (!actualVersion || actualVersion != newVersion)
                    updateData(newVersion);

                console.log("SUCCESS: check new version");
            }
        }, "json")
        .fail(function() {
            console.log( "ERROR: check new version" );
        });

        $.mobile.temp.isInternetConection = true;
    }
    else {
        console.log("WARRNING: doesn't internet connection");
    }
});

// before change page
$(document).on("pagebeforechange", function(event, data) {
    var id = 0;
    var selector = "";

    // bug fix: pred skrytim stranky s prezentaciou ju resetnem
    if ($.mobile.temp.lastSelector && ($.mobile.temp.lastSelector == "telemedicine" || $.mobile.temp.lastSelector == "using") && timeId) {
        animateProgresBar("clear");
    }

    if (typeof data.toPage === "string") {
        var url = $.mobile.path.parseUrl(data.toPage);

        if (checkUrlSelector(url)) {
            id = parseInt(url.hash.replace(/.*id=/, ""));
            selector = url.hash.replace(/\?.*$/, "");
            selector = selector.replace("#", "");

            $.mobile.temp.lastId = id;
            $.mobile.temp.lastSelector = selector;
            $.mobile.temp.lastUrl = url.href;
            $.mobile.temp.lastOptions= data.options;
        }
        else {
            selector = url.hash.replace("#", "");
            $.mobile.temp.lastSelector = selector;
            $.mobile.temp.lastUrl = url.href;
            $.mobile.temp.lastOptions= data.options;
        }
    }
});

$(document).on("pagechange", function(event, data) {
    var id = $.mobile.temp.lastId;
    var selector = $.mobile.temp.lastSelector;
    var url = $.mobile.temp.lastUrl;
    var options = $.mobile.temp.lastOptions;

    // load html data into content
    loadHtmlData(url, options, selector, id);

    // check window dimension
    checkDimension();
});

$(window).on("orientationchange", function(event) {
    $.mobile.temp.deviceOrietation = event.orientation;
    $.mobile.temp.deviceWidth = $(window).width();
    $.mobile.temp.deviceHeight = $(window).height();

    console.log("SUCCESS: change orientation on " + event.orientation);
});

$(window).resize(function(event) {
    $.mobile.temp.deviceWidth = $(window).width();
    $.mobile.temp.deviceHeight = $(window).height();

    // check window dimension
    checkDimension();

    console.log("SUCCESS: change window resize on width: " + $(window).width() + " height: " + $(window).height());
});

function loadHtmlData(url, options, selector, id) {
    if (!selector)
        selector = 'home';

    switch(selector) {
        // home
        case "home":
            var iPage = $("#" + selector);
            var iContent = $("div#home div.content");
            var iData = loadDataMenu;
            var iHtml = "";
            var i = 0;

            if (iData) {
                for (i in iData)
                    iHtml += '<li><a href="'+ iData[i].href +'" title="'+ iData[i].title +'">'+ iData[i].title +'</a></li>';

                iContent.children("ul.listview").html(iHtml);
                iContent.children("ul.listview").listview('refresh');

                loaderMessage('hide');
            }
            break;

        // articles
        case "articles":
            var aPage = $("#" + selector);
            var aContent = aPage.children("div.content");
            var aData = loadDataArticles;
            var aHtml = "";
            var a = 0;

            if (aData) {
                for (a in aData)
                    aHtml += '<li><a href="'+ aData[a].href +'" title="'+ aData[a].title +'">'+ aData[a].title +'</a></li>';

                aContent.children("ul.listview").html(aHtml);
                aContent.children("ul.listview").listview('refresh');
            }
            break;

        // article
        case "article":
            var aPage = $("#" + selector);
            var aContent = aPage.children("div.content");
            var aData = loadDataArticles;
            var aHtml = "";

            if (aData) {
                var art = null;

                if (id) {
                    art = findObject(id, 'id', aData)

                    if (art) {
                        aHtml += "<h2>" + art.title + "</h2>";
                        aHtml += "<article>" + art.description + "</article>";
                        aContent.html(aHtml);
                    }
                }
            }
            break;

        // telemedicine
        case "telemedicine":
            var tPage = $("#" + selector);
            var tContent = $("div#telemedicine div.content");
            var id = 4;

            loadDataDevicesText[id].animationCount = tContent.find("span.slides");
            loadDataDevicesText[id].animationBox = tContent.children(".animation");
            loadDataDevicesText[id].animationPictureBox = loadDataDevicesText[id].animationBox.find(".animation-picture");
            loadDataDevicesText[id].animationPicture = loadDataDevicesText[id].animationPictureBox.find("img");
            loadDataDevicesText[id].animationTextBox = loadDataDevicesText[id].animationBox.find(".animation-text");
            loadDataDevicesText[id].animationText = loadDataDevicesText[id].animationTextBox.find("td");
            loadDataDevicesText[id].progressBar = loadDataDevicesText[id].animationBox.children(".progress-bar");
            loadDataDevicesText[id].buttonPrev = loadDataDevicesText[id].animationBox.children(".animation-button-group").find(".animation-button-back");
            loadDataDevicesText[id].buttonPause = loadDataDevicesText[id].animationBox.children(".animation-button-group").find(".animation-button-pause");
            loadDataDevicesText[id].buttonContinue = loadDataDevicesText[id].animationBox.children(".animation-button-group").find(".animation-button-continue");
            loadDataDevicesText[id].buttonNext = loadDataDevicesText[id].animationBox.children(".animation-button-group").find(".animation-button-next");

            $.mobile.temp.video.activeVideo = id;
            animationStart(loadDataDevicesText[id]);
            break;

        // devices
        case "devices":
            var dPage = $("#" + selector);
            var dContent = $("div#devices div.content");
            var dData = loadDataDevices;
            var dHtml = "";
            var d = 0;

            if (dData) {
                for (d in dData)
                    dHtml += '<li><a href="'+ dData[d].href +'" title="'+ dData[d].title +'">' + dData[d].title +'</a></li>';

                dContent.children("ul.listview").html(dHtml);
                dContent.children("ul.listview").listview('refresh');
            }
            break;

        // device
        case "device":
            var dPage = $("#" + selector);
            var dContent = dPage.children("div.content");
            var dData = loadDataDevices;
            var dHtml = "";

            if (dData) {
                var dev = null;

                if (id) {
                    dev = findObject(id, 'id', dData)

                    if (dev) {
                        dHtml += '<li><a href="index.html#information?id=' + dev.id + '" title="Informácie o produkte">Informácie o produkte</a></li>';
                        dHtml += '<li><a href="index.html#using?id=' + dev.id + '" title="Používanie">Používanie</a></li>';
                        dHtml += '<li><a href="index.html#accessories?id=' + dev.id + '" title="Doplnky">Doplnky</a></li>';

                        dContent.children("h2").html(dev.title);
                        dContent.children("img").attr('src', "img/devices/" + dev.src + ".png");
                        dContent.children("img").attr('alt', dev.title);
                        dContent.children("ul.listview").html(dHtml);
                        dContent.children("ul.listview").listview('refresh');

                        $.mobile.temp.video.activeVideo = id;
                    }
                }
            }
            break;

        // device information
        case "information":
            var dPage = $("#" + selector);
            var dContent = $("div#information div.content");
            var dData = loadDataDevices;

            if (dData) {
                var dev = null;

                if (id) {
                    dev = findObject(id, 'id', dData)

                    if (dev) {
                        dContent.children("h2").children("span").html(dev.title);
                        dContent.append("<article>" + dev.information + "</article>");
                    }
                }
            }
            break;

        // device using
        case "using":
            var dPage = $("#" + selector);
            var dContent = $("div#using div.content");
            var dData = loadDataDevices;

            if (dData) {
                var dev = null;

                if (id) {
                    dev = findObject(id, 'id', dData)

                    if (dev) {
                        loadDataDevicesText[id].animationCount = dContent.find("span.slides");
                        loadDataDevicesText[id].animationBox = dContent.children(".animation");
                        loadDataDevicesText[id].animationPictureBox = loadDataDevicesText[id].animationBox.find(".animation-picture");
                        loadDataDevicesText[id].animationPicture = loadDataDevicesText[id].animationPictureBox.find("img");
                        loadDataDevicesText[id].animationTextBox = loadDataDevicesText[id].animationBox.find(".animation-text");
                        loadDataDevicesText[id].animationText = loadDataDevicesText[id].animationTextBox.find("td");
                        loadDataDevicesText[id].progressBar = loadDataDevicesText[id].animationBox.children(".progress-bar");
                        loadDataDevicesText[id].buttonPrev = loadDataDevicesText[id].animationBox.children(".animation-button-group").find(".animation-button-back");
                        loadDataDevicesText[id].buttonPause = loadDataDevicesText[id].animationBox.children(".animation-button-group").find(".animation-button-pause");
                        loadDataDevicesText[id].buttonContinue = loadDataDevicesText[id].animationBox.children(".animation-button-group").find(".animation-button-continue");
                        loadDataDevicesText[id].buttonNext = loadDataDevicesText[id].animationBox.children(".animation-button-group").find(".animation-button-next");


                        dContent.children("h2").children("span.name").html(dev.title);
                        animationStart(loadDataDevicesText[id]);

                        $.mobile.temp.video.activeVideo = id;
                    }
                }
            }
            break;

        // device accessories
        case "accessories":
            var dPage = $("#" + selector);
            var dContent = $("div#accessories div.content");
            var dData = loadDataDevices;

            if (dData) {
                var dev = null;

                if (id) {
                    dev = findObject(id, 'id', dData)

                    if (dev) {
                        dContent.children("h2").children("span").html(dev.title);
                        dContent.append("<article>" + dev.accessories + "</article>");
                    }
                }
            }
            break;

        case "chemists":
            var cPage = $("#" + selector);
            var cContent = cPage.children("div.content");
            var cData = loadDataChemists;
            var cHtml = "";

            if (cData) {
                getPosition();
            }
            break;
    }
}

// nacita a preparsuje vsetky data z local storage
function loadStorageData() {
    var localStorage = window.localStorage;

    if (loadDataVersion == null && storageVersion) {
        loadDataVersion = localStorage.getItem(storageVersion);
        console.log("SUCCESS: Load data version");
    }

    if (loadDataMenu == null && storageMenu) {
        loadDataMenu = JSON.parse(localStorage.getItem(storageMenu));
        console.log("SUCCESS: Load data menu");
    }

    if (loadDataArticles == null && storageArticles) {
        loadDataArticles = JSON.parse(localStorage.getItem(storageArticles));
        console.log("SUCCESS: Load data articles");
    }

    if (loadDataDevices == null && storageDevices) {
        loadDataDevices = JSON.parse(localStorage.getItem(storageDevices));
        console.log("SUCCESS: Load data devices");
    }

    if (loadDataChemists == null && storageChemists) {
        loadDataChemists = JSON.parse(localStorage.getItem(storageChemists));
        console.log("SUCCESS: Load data devices");
    }
}

// update data
function updateData(newVersion) {
    var updated = 0;
    var count = 4;
    var localStorage = window.localStorage;
    var answare = confirm("Bola vytvorená nová verzia aplikácie. Prajete si vykonat aktualizaciu?")

    loaderMessage('show');

    if (!answare)
        return false;

    // update version
    localStorage.setItem(storageVersion, newVersion);

    // update menu
    $.get(apiUrl + apiMenu, function(data) {
        if (data) {
            localStorage.setItem(storageMenu, JSON.stringify(data));
            console.log("SUCCESS: update data for menu");

            if (++updated == count) {
                loadStorageData();
                loadHtmlData(null, null, $.mobile.temp.lastSelector, $.mobile.temp.lastId);
            }
        }
    }, "json")
    .fail(function() {
        console.log("ERROR: update data for menu" );
    });

    // update articles
    $.get(apiUrl + apiArticles, function(data) {
        if (data) {
            localStorage.setItem(storageArticles, JSON.stringify(data));
            console.log("SUCCESS: update data for articles");

            if (++updated == count) {
                loadStorageData();
                loadHtmlData(null, null, $.mobile.temp.lastSelector, $.mobile.temp.lastId);
            }
        }
    }, "json")
    .fail(function() {
        console.log("ERROR: update data for articles" );
    });

    // update devices
    $.get(apiUrl + apiDevices, function(data) {
        if (data) {
            localStorage.setItem(storageDevices, JSON.stringify(data));
            console.log("SUCCESS: update data for devices");

            if (++updated == count) {
                loadStorageData();
                loadHtmlData(null, null, $.mobile.temp.lastSelector, $.mobile.temp.lastId);
            }
        }
    }, "json")
    .fail(function() {
        console.log("ERROR: update data for devices" );
    });

    // update chemists
    $.get(apiUrl + apiChemists, function(data) {
        if (data) {
            localStorage.setItem(storageChemists, JSON.stringify(data));
            console.log("SUCCESS: update data for chemists");

            if (++updated == count) {
                loadStorageData();
                loadHtmlData(null, null, $.mobile.temp.lastSelector, $.mobile.temp.lastId);
            }
        }
    }, "json")
    .fail(function() {
        console.log("ERROR: update data for chemists" );
    });
}

function findObject(id, attr, array) {
    var i = 0;

    if (array) {
        for (i in array) {
            if (array[i][attr] == id)
                return array[i];
        }
    }

    return false;
}

function checkUrlSelector(url) {
    var i = 0;

    for(i in urlSelectors) {
        if (url.hash.search(urlSelectors[i]) !== -1)
            return true;
    }

    return false
}

function checkDimension() {
    var body = $("body");
    var width = $.mobile.temp.deviceWidth;
    var height = $.mobile.temp.deviceHeight;

    // remove class width
    body.removeClass('device-width-320').removeClass('device-width-480').removeClass('device-width-640').removeClass('device-width-800').removeClass('device-width-desktop');

    // width
    if (width <= 320) {
        body.addClass("device-width-320");
    }
    else if(width <= 480) {
        body.addClass("device-width-480");
    }
    else if(width <= 640){
        body.addClass("device-width-640");
    }
    else if(width <= 800){
        body.addClass("device-width-800");
    }
    else {
        body.addClass("device-width-desktop");
    }

    // remove class height
    body.removeClass('device-height-320').removeClass('device-height-480').removeClass('device-height-640').removeClass('device-height-800').removeClass('device-height-desktop');

    // height
    if (height <= 320) {
        body.addClass("device-height-320");
    }
    else if(height <= 480) {
        body.addClass("device-height-480");
    }
    else if(height <= 640){
        body.addClass("device-height-640");
    }
    else if(height <= 800){
        body.addClass("device-height-800");
    }
    else {
        body.addClass("device-height-desktop");
    }
}

function loaderMessage(action, duration) {
    switch(action) {
        case "show":
            $.mobile.loading("show");

            if (duration)
                setTimeout(loaderMessage, duration, "hide", 0);

            break;

        case "hide":
            $.mobile.loading("hide");

            if (duration)
                setTimeout(loaderMessage, duration, "show", 0);

            break;
    }
}

function exitApplication() {
    navigator.app.exitApp();
}