const favoriteList = document.cookie.split("; ");

const stockCookie = function() {
    const cookieName = $(this).attr("stock-name");
    if (!favoriteList.includes(cookieName)) {
        document.cookie += cookieName +"; ";
        favoriteList.push(cookieName);
        addFavorite(cookieName);
    } else {
        alert("Stock already added to favorite list!");
    }
}

const addFavorite = function(cookieName) {
    const newButton = $(`<button>`);
    newButton.addClass("stock-button col-3 col-lg-2");
    newButton.attr('stock-name', cookieName);
    newButton.text(cookieName);
    $(".favorites").append(newButton);
}

const deleteCookie = function() {

}

const loadCookie = function() {
    if (favoriteList.length !== 1) {
        for (let cookie of favoriteList) {
            addFavorite(cookie);
        }
    }  
}
console.log("3");