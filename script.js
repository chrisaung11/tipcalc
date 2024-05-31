document.addEventListener('DOMContentLoaded', function() {
    const billAmountInput = document.getElementById('billAmount');
    const tipPercentageInput = document.getElementById('tipPercentage');
    const tipAmountDisplay = document.getElementById('tipAmount');
    const calculateBtn = document.getElementById('calculateBtn');
    const totalTipDisplay = document.getElementById('totalTip');
    const totalAmountDisplay = document.getElementById('totalAmount');

    tipPercentageInput.addEventListener('input', function() {
        tipAmountDisplay.textContent = tipPercentageInput.value;
    });

    calculateBtn.addEventListener('click', function() {
        const billAmount = parseFloat(billAmountInput.value);
        const tipPercentage = parseFloat(tipPercentageInput.value);

        if (!isNaN(billAmount) && billAmount > 0) {
            const tipAmount = billAmount * (tipPercentage / 100);
            const totalAmount = billAmount + tipAmount;

            totalTipDisplay.textContent = tipAmount.toFixed(2);
            totalAmountDisplay.textContent = totalAmount.toFixed(2);
        } else {
            alert('Please enter a valid bill amount.');
        }
    });
});
