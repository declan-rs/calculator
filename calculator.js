num1 = "";
num2 = "";
operator = "";
updateDisplay();
hasNum1 = false;
hasOp = false;
ready = false;

function add(x, y) {
    return x + y;
}

function subtract(x, y) {
    return x - y;
}

function multiply(x, y) {
    return x * y;
}

function divide(x, y) {
    return x / y;
}

// Takes operator and two numbers, returns result
function operate(x, op, y) {
    if(op == '+') {
        return add(x, y);
    } else if(op == '-') {
        return subtract(x, y);
    } else if(op == '*') {
        return multiply(x, y); 
    } else if(op == '/') {
        return divide(x, y);
    } else {
        return "Error, invalid operator";
    }
}

function equals() {
    if(ready == false) {
        // Not a complete expression
        return;
    }
    result = operate(num1, operator, num2);
    num1 = result;
    operator = "";
    num2 = 0;
    updateDisplay(result);
    hasOp = false;
    ready = false;
}

function numClicked(num) {
    if(hasNum1 == false) {
        num1 = num;
        hasNum1 = true;
    } else if(hasOp == false) {
        num1 += num;
    }

    updateDisplay();
}

function updateDisplay() {
    document.getElementById("display").textContent = num1 + operator + num2;
}

// Add button event listeners
document.getElementById("0").addEventListener("click", () => numClicked("0"));
document.getElementById("1").addEventListener("click", () => numClicked("1"));
document.getElementById("2").addEventListener("click", () => numClicked("2"));
document.getElementById("3").addEventListener("click", () => numClicked("3"));
document.getElementById("4").addEventListener("click", () => numClicked("4"));
document.getElementById("5").addEventListener("click", () => numClicked("5"));
document.getElementById("6").addEventListener("click", () => numClicked("6"));
document.getElementById("7").addEventListener("click", () => numClicked("7"));
document.getElementById("8").addEventListener("click", () => numClicked("8"));
document.getElementById("9").addEventListener("click", () => numClicked("9"));

document.getElementById("=").addEventListener("click", () => equals());