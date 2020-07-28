function getOutput() {
    return document.getElementById("input-field").value;
}
function printOutput(num) {
    document.getElementById("input-field").value = num;
}


//Getting all buttons by their classname except submit & generate
var buttons = document.getElementsByClassName("button");
for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function () {
        var output = getOutput();
        if (this.id == "clear") {
            printOutput("");
        } else if (this.id == "backspace") {
            var output = output.toString();
            if (output) {//if output has a value
                output = output.substr(0, output.length - 1);
                printOutput(output);
            }
        } else {
            output = output + this.id;
            printOutput(output);
        }
    });
}


//Generating 4 digits random number
function generateRandomNumber() {
    var randomNumber = "";
    for (var i = 0; i < 4; i++) {
        randomNumber += Math.floor(Math.random() * 10);;
    }
    return randomNumber;
}


//Generate button handler 
var generateBtn = document.getElementById('generate-button');
generateBtn.addEventListener('click', function () {
    var generateInputField = document.getElementById('generate-input-field');
    generateInputField.value = generateRandomNumber();
});


//Submit button handler
var submitBtn = document.getElementById('submit-button');
submitBtn.addEventListener('click', function () {
    var generateInputValue = document.getElementById('generate-input-field').value;
    var inputFieldValue = document.getElementById("input-field").value;
    if (inputFieldValue == generateInputValue && inputFieldValue !== "") {
        document.getElementById('matched').style.display = "block"
        document.getElementById('not-matched').style.display = "none"
        document.getElementById("input-field").value = "";
        document.getElementById('generate-input-field').value = "";
    } else if (inputFieldValue !== "" && generateInputValue !== "") {
        document.getElementById('not-matched').style.display = "block"
        document.getElementById('matched').style.display = "none"
    }
});


