function calculatePayslip() {
    // Get input values
    const basic = parseFloat(document.getElementById("basic").value) || 0;
    const incentive = parseFloat(document.getElementById("incentive").value) || 0;
    const hra = parseFloat(document.getElementById("hra").value) || 0;
    const meal = parseFloat(document.getElementById("meal").value) || 0;

    // Get GST rate
    const gstRate = parseFloat(document.getElementById("gst-rate").value) || 0;

    // Calculate totals
    const totalEarnings = basic + incentive + hra + meal;
    const totalDeductions = parseFloat(document.getElementById("total-deductions").textContent) || 0;
    const totalGST = (totalEarnings * gstRate / 100) || 0;
    const netPay = totalEarnings - totalDeductions - totalGST;

    // Update the table with calculated values
    document.getElementById("total-earnings").textContent = totalEarnings.toFixed(2);
    document.getElementById("total-deductions").textContent = totalDeductions.toFixed(2);
    document.getElementById("total-gst").textContent = totalGST.toFixed(2);
    document.getElementById("net-pay").textContent = netPay.toFixed(2);
    document.getElementById("net-pay-text").textContent = netPay.toFixed(2);
    document.getElementById("net-pay-words").textContent = numberToWords(netPay);
}

// Function to convert number to words (simplified version)
function numberToWords(num) {
    const a = [
        '', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten',
        'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen'
    ];
    const b = ['', '', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'];

    if (num < 20) return a[num];
    if (num < 100) return b[Math.floor(num / 10)] + (num % 10 ? ' ' + a[num % 10] : '');
    if (num < 1000) return a[Math.floor(num / 100)] + ' Hundred' + (num % 100 ? ' and ' + numberToWords(num % 100) : '');
    return 'Number too large';
}
// Function to calculate Payslip details
function calculatePayslip() {
    // Get input values
    const basic = parseFloat(document.getElementById("basic").value) || 0;
    const incentive = parseFloat(document.getElementById("incentive").value) || 0;
    const hra = parseFloat(document.getElementById("hra").value) || 0;
    const meal = parseFloat(document.getElementById("meal").value) || 0;

    // Get GST rates
    const sgst = parseFloat(document.getElementById("sgst").value) || 0;
    const cgst = parseFloat(document.getElementById("cgst").value) || 0;
    const gstRate = parseFloat(document.getElementById("gst-rate").value) || 0;

    // Calculate totals
    const totalEarnings = basic + incentive + hra + meal;
    const totalDeductions = parseFloat(document.getElementById("total-deductions").textContent) || 0;
    const totalGST = (totalEarnings * gstRate / 100) || 0;
    const netPay = totalEarnings - totalDeductions - totalGST;

    // Update the table with calculated values
    document.getElementById("total-earnings").textContent = totalEarnings.toFixed(2);
    document.getElementById("total-deductions").textContent = totalDeductions.toFixed(2);
    document.getElementById("net-pay").textContent = netPay.toFixed(2);

    // If there's a separate ID for total GST, ensure it is updated.
    if (document.getElementById("total-gst")) {
        document.getElementById("total-gst").textContent = totalGST.toFixed(2);
    }
}

// Function to calculate Invoice details
function calculateInvoice() {
    // Get input values for each row
    const quantity1 = parseFloat(document.querySelectorAll("input[type='number']")[0].value) || 0;
    const unitPrice1 = parseFloat(document.querySelectorAll("input[type='number']")[1].value) || 0;
    const quantity2 = parseFloat(document.querySelectorAll("input[type='number']")[2].value) || 0;
    const unitPrice2 = parseFloat(document.querySelectorAll("input[type='number']")[3].value) || 0;

    // Calculate totals for each row
    const total1 = quantity1 * unitPrice1;
    const total2 = quantity2 * unitPrice2;

    // Calculate subtotal, tax, and total amount
    const subtotal = total1 + total2;
    const tax = subtotal * 0.1; // Assuming 10% tax rate
    const totalAmount = subtotal + tax;

    // Update the table with calculated values
    document.getElementById("total-1").textContent = total1.toFixed(2);
    document.getElementById("total-2").textContent = total2.toFixed(2);
    document.getElementById("subtotal").textContent = subtotal.toFixed(2);
    document.getElementById("tax").textContent = tax.toFixed(2);
    document.getElementById("total-amount").textContent = totalAmount.toFixed(2);
}
function downloadInvoice() {
    // Implement download functionality
    document.getElementById('download-log').textContent = 'Download initiated...';
}

function copyLink() {
    // Implement copy link functionality
    navigator.clipboard.writeText(window.location.href);
    document.getElementById('copy-log').textContent = 'Link copied to clipboard';
}


// Share Invoice
document.getElementById('share-link').addEventListener('click', function (event) {
    event.preventDefault();
    const invoiceUrl = 'path/to/your/invoice.pdf'; // Replace with the URL to share
    if (navigator.share) {
        navigator.share({
            title: 'Invoice',
            url: invoiceUrl
        }).then(() => {
            console.log('Thanks for sharing!');
        }).catch((error) => {
            console.error('Error sharing:', error);
        });
    } else {
        // Fallback for browsers that do not support the Web Share API
        alert('Sharing is not supported in this browser. Please copy the link manually.');
    }
});

// Copy Invoice Link
document.getElementById('copy-link').addEventListener('click', function (event) {
    event.preventDefault();
    const invoiceUrl = 'path/to/your/invoice.pdf'; // Replace with the URL to copy
    navigator.clipboard.writeText(invoiceUrl).then(function () {
        alert('Invoice link copied to clipboard!');
    }).catch(function (err) {
        console.error('Failed to copy: ', err);
    });
});

