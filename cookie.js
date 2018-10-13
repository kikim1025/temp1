const favoriteList = [];//

const stockCookie = function() {
    const cookieName = $(this).attr("stock-name");
    if (!favoriteList.includes(cookieName)) {
        document.cookie = "stockName=" + cookieName + "; ";
        console.log(document.cookie);
        addFavorite(cookieName);
    } else {
        alert("Stock already added to favorite list!");
    }
}

const addFavorite = function(cookieName) {
    favoriteList.push(cookieName);
    const newButton = $(`<button>`);
    newButton.addClass("stock-button col-3 col-lg-2");
    newButton.attr('stock-name', cookieName);
    newButton.text(cookieName);
    $(".favorites").append(newButton);
}

const deleteCookie = function() {

}

const loadCookie = function() {

}