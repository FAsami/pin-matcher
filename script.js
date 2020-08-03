//Getting input field value
function getInputValue() {
  return document.getElementById("input-field").value;
}

//Adding input field value to the UI
function printInputValue(num) {
  document.getElementById("input-field").value = num;
}

//Handle all buttons
function handleButtons() {
  let inputValue = getInputValue();
  //Clear button
  if (this.id == "clear") {
    printInputValue("");
    //Backspace button
  } else if (this.id == "backspace") {
    let inputValueString = inputValue.toString();
    if (inputValue) {
      //if inputValue has a value
      inputValue = inputValueString.substr(0, inputValueString.length - 1);
      printInputValue(inputValue);
    }
  } else {
    //Getting buttons value by id
    inputValue = inputValue + this.id;
    printInputValue(inputValue);
  }
}

//All input buttons
const buttons = document.getElementsByClassName("button");
//Looping over all button except submit and generate
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", handleButtons);
}

//Generating 4 digits random number
function generateRandomNumber() {
  let randomNumber = "";
  for (let i = 0; i < 4; i++) {
    randomNumber += Math.floor(Math.random() * 10);
  }
  return randomNumber;
}

//Generate pin button handler
const generateBtn = document.getElementById("generate-button");
generateBtn.addEventListener("click", function () {
  const generateInputField = document.getElementById("generate-input-field");
  generateInputField.value = generateRandomNumber();
  generateInputField.setAttribute("readonly", true);
});

//Dispaly notification
function displayNotification(elementIdtoHide, elementIdToShow) {
  document.getElementById(elementIdToShow).style.display = "block";
  document.getElementById(elementIdtoHide).style.display = "none";
}
//clear input field value
function clearField(id) {
  document.getElementById(id).value = "";
}

//Total trials left
let trialsLeft = 3;

//Submit button handler
const submitBtn = document.getElementById("submit-button");
submitBtn.addEventListener("click", function () {
  let generateInputValue = document.getElementById("generate-input-field")
    .value;
  let inputFieldValue = document.getElementById("input-field").value;

  if (inputFieldValue == generateInputValue && inputFieldValue !== "") {
    //if the pin matched
    displayNotification("not-matched", "matched");
    clearField("input-field");
    clearField("generate-input-field");
  } else if (inputFieldValue !== "" && generateInputValue !== "") {
    //if the pin don't match
    if (trialsLeft > 1) {
      //if any trials left
      displayNotification("matched", "not-matched");
      clearField("input-field");
      clearField("generate-input-field");
      trialsLeft--;
      document.getElementById("trials-left").textContent = trialsLeft;
    } else {
      //if no trials left
      document.getElementById("not-matched").style.display = "none";
      document.getElementById("matched").style.display = "none";
      document.getElementById("trials-left").textContent = "No more";
      document.getElementById("trial").style.display = "block";
      submitBtn.setAttribute("disabled", true);
      generateBtn.setAttribute("disabled", true);
    }
  }
});
