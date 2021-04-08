var a = 5;
var b = 6;
var c = 7;

var s = (a + b + c) / 2;

var area = Math.sqrt(s * ((s - a) * (s - b) * (s - c)));
console.log(area);


function animate_string(id) {
    var element = document.getElementById(id);
    var textNode = element.childNodes[0]; 
    var text = textNode.data;

    setInterval(function () {
        text = text[text.length - 1] + text.substring(0, text.length - 1);
        textNode.data = text;
    }, 100);
}

function multiplyBy() {
    num1 = document.getElementById("firstNumber").value;
    num2 = document.getElementById("secondNumber").value;
    document.getElementById("result").innerHTML = num1 * num2;
}

function divideBy() {
    num1 = document.getElementById("firstNumber").value;
    num2 = document.getElementById("secondNumber").value;
    document.getElementById("result").innerHTML = num1 / num2;
}

console.log(Math.max(10, 12, 15));
console.log(Math.max(123, -12, -15));
console.log(Math.max(100, 1200, 677));