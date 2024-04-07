document.addEventListener("DOMContentLoaded", function () {
    const convertBtn = document.getElementById("convertBtn");

    convertBtn.addEventListener("click", function () {
        const usdAmount = parseFloat(document.getElementById("number").value);

        const exchangeRate = 1.25;

        const cadAmount = parseFloat(document.getElementById("number1").value);
        const usdConverted = cadAmount / exchangeRate;
        
        if (!isNaN(usdAmount)) {
            const cadConverted = usdAmount * exchangeRate;
            document.getElementById("number1").value = cadConverted.toFixed(2);
        } else if (!isNaN(cadAmount)) {
            const usdConverted = cadAmount / exchangeRate;
            document.getElementById("number").value = usdConverted.toFixed(2);
        }
    });
});