const calButtonEl = document.querySelector(".calc-button");
const displayValueEl = document.getElementById("display-value");

let control = "";
let acculuator = 0;
let display = "0";

function updateDisplay() {
  // limit the length of input to 15 digits
  if (displayValueEl.innerHTML.length < 15) {
    displayValueEl.innerHTML = display;
  }
}

function handleNumberInput(number) {
  display =
    display !== "0" ? parseInt(`${display}${number}`) : number.toString();
  updateDisplay();
}

// Set display value back to 0, Reset displayValueEl
function clear() {
  display = "0";
  document.getElementById("display-value").innerHTML = display;
}

function calculate(a, b, control) {
  // Logic to handle the operation inputs (Divide, Multiply, Subtract, Add)
  switch (control) {
    case "/":
      display = a / b;
      updateDisplay();
      return a / b;
    case "X":
      display = a * b;
      updateDisplay();
      return a * b;
    case "-":
      display = a - b;
      updateDisplay();
      return a - b;
    case "+":
      display = a + b;
      updateDisplay();
      return a + b;
    default:
      return 0; // Default case for invalid control
  }
}

function handleOperator(button) {
  if (button == "=" && control) {
    acculuator = calculate(acculuator, parseInt(display), control);
    display = acculuator.toString();
    updateDisplay();

    control = "";
    display = "";
  } else {
    acculuator = parseInt(display);
    control = button;
    display = "0";
  }
}

// Event listeners

document.addEventListener("DOMContentLoaded", () => {
  updateDisplay();
});

document.addEventListener("keydown", function (event) {
  var keyPressed = event.key;
  handleKeyPress(keyPressed);
});

function handleKeyPress(key) {
  // regex expression for values 0-9
  if (/[0-9]/.test(key)) {
    displayValueEl.innerHTML = key;
    display = parseInt(key);
    // regex for single character
  } else if (/[c]/.test(key)) {
    clear();
  }
}

calButtonEl.addEventListener("click", clear);
