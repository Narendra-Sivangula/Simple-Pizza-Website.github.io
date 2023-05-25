function calculateInterest() {
    var principal = parseFloat(document.getElementById('principal').value);
    var rate = parseFloat(document.getElementById('rate').value);
    var startDate = new Date(document.getElementById('startDate').value);
    var endDate = new Date(document.getElementById('endDate').value);

    var months = (endDate.getFullYear() - startDate.getFullYear()) * 12;
    months -= startDate.getMonth();
    months += endDate.getMonth();

    var interest = 0;
    var monthlyRate = rate / 100; // Convert annual rate to monthly rate
    for (var i = 0; i < months; i++) {
        interest += (principal * monthlyRate);
    }
    var totalAmount = principal + interest;

    document.getElementById('result').innerHTML = 'Simple Interest: ' + interest.toFixed(2) + '<br>Total Amount: ' + totalAmount.toFixed(2);
}
