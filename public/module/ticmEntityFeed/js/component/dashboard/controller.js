/**
 * ticmEntityFeed - controller
 * Copyright(c) 2019 Alejandro Villén
 * MIT Licensed
 */

function ticmEntityFeed_getFeed(urlFeed) {

    var base = "https://api.rss2json.com/v1/api.json?rss_url=";
    $.ajax({
        type: "GET",
        dataType: "jsonp",
        url: base + urlFeed

    }).done(function (response) {
        if (response.status === "ok") {
            ticmEntityFeed_print_getFeed(response);
        }
    });
}