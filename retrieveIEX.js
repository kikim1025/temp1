const presentStockInfo = [];

const retrieveIEX = function() {
    const stock = $(this).attr("stock-name");
    console.log(stock);
    if (!presentStockInfo.includes(stock)) {
        const URL = "https://api.iextrading.com/1.0/stock/";
        const queryURL = URL + stock + "/batch?types=company,logo,price,news";
        $.ajax({
            url: queryURL,
            method: 'GET'
        }).then(function(response) {
            const infoRow = $("<div>");
            infoRow.addClass("row border border-dark");

            const logo = $(`<img src=${response.logo.url} alt="Company Logo Pic"/>`);
            logo.addClass("img-fluid col-6 col-md-4 col-lg-2");
            
            const infoCol = $("<div>");
            infoCol.addClass("col-md-4 col-lg-6")
            const name = "Company Name: ".bold() + response.company.companyName;
            const price = "Stock Price: ".bold() + response.price;
            const ceo = "CEO Name: ".bold() + response.company.CEO;
            const tags = "Tags: ".bold() + response.company.tags;
            infoCol.html(name + "<br/>" + price + "<br/>" + ceo + "<br/>" + tags + "<br/>");   
            infoRow.append(logo).append(infoCol)

            const addCookie = $("<button>");
            addCookie.addClass("add-cookie");
            addCookie.text("Add to Favorite");
            addCookie.attr('stock-name', stock);
            infoCol.append(addCookie);
            
            const newsArr = response.news;
            if (newsArr.length === 0) {
                const noNews = $("<div>");
                noNews.addClass("col-12 text-center");
                noNews.text("No News Available Today.")
                infoRow.append(noNews);
            } else {
                for (let i = 0; i < newsArr.length; i++) {
                    const newsTitle = $("<div>");
                    const newsURL = $("<div>");
                    newsTitle.addClass("col-12");
                    newsURL.addClass("col-12");
                    newsTitle.html(`News ${i+1}: `.bold() + newsArr[i].headline.italics() + "<br/>");
                    newsURL.html("URL: ".bold() + `<a href=${newsArr[i].url}>${newsArr[i].url}</a>`);
                    infoRow.append(newsTitle).append(newsURL);
                }
            }
            $(".container").append(infoRow);
            presentStockInfo.push(stock);
        }).catch( function() {
            alert("Failed to retieve stock information!");
        })
    } else {
        alert("Stock Information is already present!")
    }
}