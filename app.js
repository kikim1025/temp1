loadCookie();

$(".row-buttons").on("click", ".stock-button", retrieveIEX);
$(".submit-stock").on("click", validateInput);
$(".container").on("click", ".add-cookie", stockCookie);
$(".favorites").on("click", ".stock-button", retrieveIEX);