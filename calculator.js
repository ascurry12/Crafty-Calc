let display = '';
var currNum = '';
var prevNum = '';
var numericCurr, numericPrev, result = 0;


function allClear() {
    document.getElementById('display').value = '';
    currNum = '';
    prevNum = '';
    result = 0; // hello
    numericCurr = 0;
    numericPrev = 0;
}

function clear() {
    document.getElementById('display').value = '';
    currNum = '';
    numericCurr = 0;
}

function appendNumber(number) {
    currNum += number;
    updateDisplay();
}

function currOperator(operation) {
    if (operation == '+') {
        prevNum = currNum + "+";
    }
    else if (operation == '-') {
        prevNum = currNum + "-";
    }
    else if (operation == '/') {
        prevNum = currNum + "/";
    }
    else if (operation == 'x') {
        prevNum = currNum + "*";
    }
    
    clear();
}

function negate() {
    numericCurr = -1 * parseFloat(currNum);
    currNum = numericCurr.toString();
    updateDisplay();
}

function compute() {
    prevNum = prevNum + currNum;
    result = eval(prevNum);
    prevNum = '';
    currNum = result.toString();
    updateDisplay();
}

function percentage() {
    prevNum = '';
    prevNum = prevNum + currNum + "/100";
    result = eval(prevNum);
    currNum = result.toString();
    updateDisplay();
}
// FIXME - sqrt not working
function squareRoot() {
    // prevNum = '';
    numericCurr = parseFloat(currNum);
    result = sqrt(numericCurr);
    currNum = result.toString();
    updateDisplay();
}

function updateDisplay() {
    document.getElementById('display').value = currNum;
}

function switchCSS(style) {
    if (style == 'ghibli') {
        document.getElementById("page_style").setAttribute("href", "ghibli.css");
    }
    else if (style == 'universe') {
        document.getElementById("page_style").setAttribute("href", "universe.css");
    }
    else if (style == 'sea') {
        document.getElementById("page_style").setAttribute("href", "sea.css");
    }
    else {
        document.getElementById("page_style").setAttribute("href", "default.css");
    }

}
