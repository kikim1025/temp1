const stockList = ["NVDA", "AMD", "INTC", "ATVI"];
const validationList = [];

const renderButton = function() {
    $(".row-buttons").empty();
    for (let s of stockList) { 
        const newButton = $(`<button>`);
        newButton.addClass("stock-button col-3 col-lg-2");
        newButton.attr('stock-name', s);
        newButton.text(s);
        $(".row-buttons").append(newButton);
    }      
}

const checkButton = function() {
    const input = $(".stock-input").val().trim().toUpperCase();
    if (stockList.includes(input)) {
        alert("button already exists!");
    } else if (validationList.includes(input)) {
        stockList.push(input);
        renderButton();
    } else {
        alert("no such stock symbol!");
    }
}

const validateInput = function() {
    if(validationList.length === 0) {
        const queryURL = "https://api.iextrading.com/1.0/ref-data/symbols";
        $.ajax({
            url: queryURL,
            method: 'GET'
        }).then(function(response) {
            for (let o of response) {
                validationList.push(o.symbol);
            }
            checkButton();
        }).catch( function() {
            alert("Failed to retieve stock information!");
        })
    } else {
        checkButton();
    }
}

renderButton();