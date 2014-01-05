var timeId = null;
var duration = 15000;
var gData = null

function animationStart(data) {
    if (data) {
        gData = data;

        if (timeId) {
            animateProgresBar("clear");
        }

        // image
        gData.animationPicture.attr("src", gData.folder + gData.pictures[gData.active].full + ".jpg");
        gData.animationPicture.attr("alt", gData.id);

        // text
        if (gData.pictures[gData.active].text) {
            gData.animationText.html(gData.pictures[gData.active].text);
            gData.animationTextBox.show();
        }
        else
            gData.animationTextBox.hide();

        // animation functions
        changeCountSlide(gData.id, gData.active, gData.length);
        animateProgresBar("start");

        timeId = setTimeout(animationProgress, duration);
    }

}

function animationProgress() {
    if (gData.active < gData.length) {
        gData.active += 1;

        gData.animationPicture.fadeOut(function() {
            // image
            gData.animationPicture.attr("src", gData.folder + gData.pictures[gData.active].full + ".jpg");
            gData.animationPicture.attr("alt", gData.id);
            gData.animationPicture.fadeIn();

            // text
            if (gData.pictures[gData.active].text) {
                gData.animationText.html(gData.pictures[gData.active].text);
                gData.animationTextBox.show();
            }
            else
                gData.animationTextBox.hide();

            // animation functions
            checkButtonStatus(gData.buttonPrev, gData.buttonNext, gData.active, gData.length);
            changeCountSlide(gData.id, gData.active, gData.length);
            animateProgresBar("start");

            timeId = setTimeout(animationProgress, duration);
            console.log("SUCCESS: Progress " + gData.folder + gData.pictures[gData.active].full + ".jpg");
        });
    }
    else {
        window.clearTimeout(timeId);
    }
}

function animationNextStep () {
    window.clearTimeout(timeId);

    if (gData.buttonContinue.is(":visible")) {
        gData.buttonPause.show();
        gData.buttonContinue.hide();
    }

    if (gData.active < gData.length) {
        gData.active += 1;

        gData.animationPicture.fadeOut(function() {
            // image
            gData.animationPicture.attr("src", gData.folder + gData.pictures[gData.active].full + ".jpg");
            gData.animationPicture.attr("alt", gData.id);
            gData.animationPicture.fadeIn();

            // text
            if (gData.pictures[gData.active].text) {
                gData.animationText.html(gData.pictures[gData.active].text);
                gData.animationTextBox.show();
            }
            else
                gData.animationTextBox.hide();

            // animation functions
            checkButtonStatus(gData.buttonPrev, gData.buttonNext, gData.active, gData.length);
            changeCountSlide(gData.id, gData.active, gData.length);
            animateProgresBar("restart");

            timeId = setTimeout(animationProgress, duration);
            console.log("SUCCESS: Next step " + gData.folder + gData.pictures[gData.active].full + ".jpg");
        });
    }
}

function animationPrevStep () {
    clearTimeout(timeId);

    if (gData.buttonContinue.is(":visible")) {
        gData.buttonPause.show();
        gData.buttonContinue.hide();
    }

    if (gData.active > 1) {
        gData.active -= 1;

        gData.animationPicture.fadeOut(function() {
            // image
            gData.animationPicture.attr("src", gData.folder + gData.pictures[gData.active].full + ".jpg");
            gData.animationPicture.attr("alt", gData.id);
            gData.animationPicture.fadeIn();

            // text
            if (gData.pictures[gData.active].text) {
                gData.animationText.html(gData.pictures[gData.active].text);
                gData.animationTextBox.show();
            }
            else
                gData.animationTextBox.hide();

            // animation functions
            checkButtonStatus(gData.buttonPrev, gData.buttonNext, gData.active, gData.length);
            changeCountSlide(gData.id, gData.active, gData.length);
            animateProgresBar("restart");

            timeId = setTimeout(animationProgress, duration);
            console.log("SUCCESS: Prev step " + gData.folder + gData.pictures[gData.active].full + ".jpg");
        });
    }
}

function animationContinue() {
    if (gData.active < gData.length) {
        gData.active += 1;

        gData.buttonPause.show();
        gData.buttonContinue.hide();

        gData.animationPicture.fadeOut(function() {
            // image
            gData.animationPicture.attr("src", gData.folder + gData.pictures[gData.active].full + ".jpg");
            gData.animationPicture.attr("alt", gData.id);
            gData.animationPicture.fadeIn();

            // text
            if (gData.pictures[gData.active].text) {
                gData.animationText.html(gData.pictures[gData.active].text);
                gData.animationTextBox.show();
            }
            else
                gData.animationTextBox.hide();

            // animation functions
            checkButtonStatus(gData.buttonPrev, gData.buttonNext, gData.active, gData.length);
            changeCountSlide(gData.id, gData.active, gData.length);
            animateProgresBar("start");

            timeId = setTimeout(animationProgress, duration);
            console.log("SUCCESS: Animation start " + gData.folder + gData.pictures[gData.active].full + ".jpg");
        });
    }
}

function animationPause() {
    window.clearTimeout(timeId);
    gData.buttonPause.hide();
    gData.buttonContinue.show();
    animateProgresBar("stop");
}

function checkButtonStatus(back, next, actual, max) {
    // button prev
    if (actual == 1)
        back.addClass("ui-disabled");
    else
        back.removeClass("ui-disabled");

    // button next
    if (actual == max)
        next.addClass("ui-disabled");
    else
        next.removeClass("ui-disabled");
}
function changeCountSlide(id, actual, max) {
    var span = gData.animationCount;

    if (span) {
        span.html("(<span>" + actual + "</span>&nbsp;/&nbsp;" + max + ")");
    }
}

function animateProgresBar(action) {
    var div = gData.progressBar.children("div.progress-line");

    switch(action) {
        case "start":
            div.width(0);

            div.animate({
                width: "100%"
            }, duration, "swing", function() {
                div.width(0);
            });
            break;

        case "restart":
            div.width(0);
            div.stop();

            div.animate({
                width: "100%"
            }, duration, "swing", function() {
                div.width(0);
            });
            break;

        case "stop":
            div.stop();
            break;

        case "clear":
            div.width(0);
            div.stop();
            window.clearTimeout(timeId);
            gData.active = 1;
            gData.progressBar.children("div").width(0);
            gData.progressBar.children("div").stop();
            gData.animationPicture.attr("src", null);
            break;
    }

}