function  myFunction() {
    let amount = document.getElementById('amout').value;
    let frCurrency = document.getElementById('frCurrency').value;
    let toCurrency = document.getElementById('toCurrency').value;
    let result = document.getElementById('result');
    if (frCurrency =='VND' && toCurrency == 'USD') {
        result.innerText = frCurrency / 23000;

    }else (frCurrency =='USD' && toCurrency == 'VND')
    {
        result.innerText = frCurrency * 23000;
    }


}