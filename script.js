function getOutput() {
    return document.getElementById("input-field").value;
}

function printOutput(num) {
    document.getElementById("input-field").value = num;
}


var number = document.getElementsByClassName("number");
for (var i = 0; i < number.length; i++) {
    number[i].addEventListener('click', function () {
        var output = getOutput();
        output = output + this.id;
        printOutput(output);
    });
}
function generateRandomNumber() {
    var randomNumber = "";
    for (var i = 0; i < 4; i++) {
        randomNumber += Math.floor(Math.random() * 10);;
    }
    return randomNumber;

}


var generateBtn = document.getElementById('generate-button');
generateBtn.addEventListener('click', function () {
    var generateInput = document.getElementById('generate-input');
    generateInput.value = generateRandomNumber();
});


var submitBtn = document.getElementById('submit-button');
submitBtn.addEventListener('click', function () {
    var generateInputValue = document.getElementById('generate-input').value;
    var inputFieldValue = document.getElementById("input-field").value;
    // console.log(inputFieldValue);
    if (inputFieldValue == generateInputValue && inputFieldValue !== "") {
        document.getElementById('matched').style.display = "block"
        document.getElementById('not-matched').style.display = "none"
    } else if (inputFieldValue !== "" && generateInputValue !== "") {
        document.getElementById('not-matched').style.display = "block"
        document.getElementById('matched').style.display = "none"
    }
});