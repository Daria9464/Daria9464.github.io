var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

var speak = document.getElementById("speakVoice");
var stop = document.getElementById("stopVoice");

var request = "";

var diameter = 50;
var cirColor = "black";
var bgColor = "white";

function drawCircle() {
    ctx.beginPath();
    ctx.rect(0, 0, c.width, c.height);
    ctx.fillStyle = bgColor;
    ctx.fill();

    ctx.beginPath();
    ctx.arc(c.width * 0.5, c.height * 0.5, diameter / 2, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fillStyle = cirColor;
    ctx.fill();
}

var help = "I think I heard you said the word, help. You can say color, followed by a color, to set the circle color. Or say background, followed by a color, to set the background color. Or say size, followed of a number from 1 to 300, to set the diameter of the circle. " 

var sizeMax = "Size is limit 300";
var SizeMini = "Size too small, the minimize size is 1";

// Changing the text of the button. When the user clicks on "Speak" button then the value changes to "Stop"
function Speak() {
    var x = document.getElementById("speak");
    if (x.innerHTML == "Speak") {
        speak.play();
        x.innerHTML = "Stop";
        recognition.start();
    } else {
        stop.play();
        x.innerHTML = "Speak";
        recognition.stop();
    }
}


var recognition = new webkitSpeechRecognition();
recognition.continuous = false;
recognition.interimResults = true;

color = "Red Green Yellow Blue White Black Purple Pink";

// if voice recognition catch something
recognition.onresult = function (event) {
    var x = document.getElementById("speak");
    for (var i = event.resultIndex; i < event.results.length; ++i) {
        if (event.results[i].isFinal) { //if the user stop talking 
            request = event.results[i][0].transcript;
            stop.play();
            x.innerHTML = "Speak";
            recognition.stop();
            Response();
        }

    }
}
// response to user after analysis the words
function Response() {
    var key = request.split(" ")[0];
    var option = request.split(" ")[1];

    if (key.localeCompare("color") == 0 || key.localeCompare("background") == 0) {
        if (!isNaN(color.match(/option/))) {
            if (key.localeCompare("color") == 0) {
                cirColor = option;
            }
            else {
                bgColor = option;
            }
            var msg = new SpeechSynthesisUtterance("I heard you said " + request + " I changed.");
            setTimeout(function () { window.speechSynthesis.speak(msg); }, 1000);
            drawCircle();

        }
        else {
            var msg = new SpeechSynthesisUtterance("I heard you said " + request + " I didn't recognize the color.");
            setTimeout(function () { window.speechSynthesis.speak(msg); }, 1000);
        }
    }
    else if (key.localeCompare("size") == 0) {
        if (!isNaN(option)) {
            diameter = parseInt(option);
            if (diameter > 300) {
                var msg = new SpeechSynthesisUtterance(sizeBig + " but you said " + diameter);
                setTimeout(function () { window.speechSynthesis.speak(msg); }, 1000);
            }
            else if (diameter < 1) {
                var msg = new SpeechSynthesisUtterance(SizeSmall + " but you said " + diameter);
                setTimeout(function () { window.speechSynthesis.speak(msg); }, 1000);
            }
            else {
                var msg = new SpeechSynthesisUtterance("I heard you said " + request + " I changed.");
                setTimeout(function () { window.speechSynthesis.speak(msg); }, 1000);
                drawCircle();
            }
        }
        else {
            var msg = new SpeechSynthesisUtterance("I can not change the size of circle because I didn't get a clear number");
            setTimeout(function () { window.speechSynthesis.speak(msg); }, 1000);
        }
    }
    else if (key.localeCompare("help") == 0) {
        var msg = new SpeechSynthesisUtterance(help);
        setTimeout(function () { window.speechSynthesis.speak(msg); }, 1000);
    }
    else {
        var msg = new SpeechSynthesisUtterance("Sorry. I can't match. I heard you said " + request);
        setTimeout(function () { window.speechSynthesis.speak(msg); }, 1000);

    }
    console.log(request);
    request = "";
}
