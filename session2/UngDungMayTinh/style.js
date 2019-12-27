function aDdition() {
    let number1 = parseInt(document.getElementById('number1').value);
    let number2 = parseInt(document.getElementById('number2').value);
    let result = document.getElementById('result');
        result.innerText = number1 + number2;
}
function subTraction() {
    let number1 = parseInt(document.getElementById('number1').value);
    let number2 = parseInt(document.getElementById('number2').value);
    let result = document.getElementById('result');
    result.innerText = number1 - number2;
}
function muTiplication() {
    let number1 = parseInt(document.getElementById('number1').value);
    let number2 = parseInt(document.getElementById('number2').value);
    let result = document.getElementById('result');
    result.innerText = number1 * number2;

}
function diVision () {
    let number1 = parseInt(document.getElementById('number1').value);
    let number2 = parseInt(document.getElementById('number2').value);
    let result = document.getElementById('result');
    result.innerText = number1 / number2;
}
