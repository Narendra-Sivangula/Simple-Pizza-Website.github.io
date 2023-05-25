function calculateInterest() {
    var principal = parseFloat(document.getElementById('principal').value);
    var rate = parseFloat(document.getElementById('rate').value);
    var startDate = new Date(document.getElementById('startDate').value);
    var endDate = new Date(document.getElementById('endDate').value);

    var timeInMilliseconds = endDate.getTime() - startDate.getTime();
    var timeInYears = timeInMilliseconds / (1000 * 3600 * 24 * 365);

    var interest = (principal * rate * timeInYears) / 100;
    var totalAmount = principal + interest;

    document.getElementById('result').innerHTML = 'Simple Interest: ' + interest.toFixed(2) + '<br>Total Amount: ' + totalAmount.toFixed(2);
}
