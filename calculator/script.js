const currDisplay = document.querySelector(".curr-display");
const prevDisplay = document.querySelector(".prev-display");
const numberButtons = document.querySelectorAll(".number");
const operationButtons = document.querySelectorAll(".operation");
const clearBtn = document.querySelector(".clear");
const deleteBtn = document.querySelector(".delete");
const equalBtn = document.querySelector(".equal");

let currentOperation = null;
let shouldResetScreen = false;

function appendNumber(number) {
    if (currDisplay.innerHTML === "0" || shouldResetScreen) {
        resetScreen();
    }
    if (number === "." && currDisplay.innerHTML.includes(".")) return;
    currDisplay.innerHTML += number;
}

function chooseOperation(operation) {
    if (currDisplay.innerHTML === "") return;
    if (prevDisplay.innerHTML !== "") {
        compute();
    }
    currentOperation = operation;
    prevDisplay.innerHTML = `${currDisplay.innerHTML} ${operation}`;
    shouldResetScreen = true;
}

function compute() {
    const previousValue = parseFloat(prevDisplay.innerHTML);
    const currentValue = parseFloat(currDisplay.innerHTML);
    let result;

    if (isNaN(previousValue) || isNaN(currentValue)) return;

    switch (currentOperation) {
        case "+":
            result = previousValue + currentValue;
            break;
        case "-":
            result = previousValue - currentValue;
            break;
        case "*":
            result = previousValue * currentValue;
            break;
        case "/":
            result = previousValue / currentValue;
            break;
        default:
            return;
    }

    currDisplay.innerHTML = result;
    prevDisplay.innerHTML = "";
    currentOperation = null;
}

function resetScreen() {
    currDisplay.innerHTML = "";
    shouldResetScreen = false;
}

function clearDisplay() {
    currDisplay.innerHTML = "";
    prevDisplay.innerHTML = "";
    currentOperation = null;
}

function deleteLast() {
    currDisplay.innerHTML = currDisplay.innerHTML.slice(0, -1);
}

numberButtons.forEach((button) => {
    button.addEventListener("click", () => appendNumber(button.innerHTML));
});

operationButtons.forEach((button) => {
    button.addEventListener("click", () => chooseOperation(button.innerHTML));
});

equalBtn.addEventListener("click", () => {
    compute();
    shouldResetScreen = true;
});

clearBtn.addEventListener("click", clearDisplay);

deleteBtn.addEventListener("click", deleteLast);
