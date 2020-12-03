

function ticmEntityFeed_print_getFeed(feed) {
    var column = false; // false=>Column0, true=>Column1
    var dataColumn0 = "";
    var dataColumn1 = "";

    for (var i = 0; i < feed.items.length; i++) {
        var item = feed.items[i];

        var hashSha256 = "news_" + sha256(item.title);
        var thumbnail = "/module/ticmEntityFeed/image/placeholder.jpg";
        if (item.thumbnail !== "") {
            thumbnail = item.thumbnail;
        }

        var data = `<div class="media flex-column flex-sm-row mt-0 mb-3">
                        <div class="mr-sm-3 mb-2 mb-sm-0">
                            <div class="card-img-actions">
                                <a href="#${hashSha256}" class="text-default collapsed" data-toggle="collapse">
                                    <img src="${thumbnail}" class="img-fluid img-preview rounded" alt="">
                                    <span class="card-img-actions-overlay card-img"><i class="icon-plus3 icon-2x"></i></span>
                                </a>
                            </div>
                        </div>
                        <div class="media-body">
                            <h6 class="media-title"><a href="#${hashSha256}" class="text-default collapsed" data-toggle="collapse">${item.title}</a></h6>
                            <ul class="list-inline list-inline-dotted text-muted mb-2">
                                <li class="list-inline-item"><i class="icon-link mr-2"></i>
                                    <a href="${item.link}" target="_blank" >Source</a>
                                </li>
                                <li class="list-inline-item"><i class="icon-watch2 mr-2"></i> ${item.pubDate}</li>
                            </ul>
                            <div class="collapse"  id="${hashSha256}">
                            ${(item.content)}
                            </div>
                        </div>
                    </div>`;
        if (column) {
            dataColumn1 += data;
        } else {
            dataColumn0 += data;
        }
        column = !column;

    }
    $('#entityFeedColumn_0').append(dataColumn0);
    $('#entityFeedColumn_1').append(dataColumn1);
    ticmEntityFeed_print_unblockContent();
}

function ticmEntityFeed_print_blockContent() {
    // Block card
    $("#ticmEntityFeed_feedContent").block({
        message: '<i class="icon-spinner2 spinner"></i>',
        overlayCSS: {
            backgroundColor: '#fff',
            opacity: 0.8,
            cursor: 'wait',
            'box-shadow': '0 0 0 1px #ddd'
        },
        css: {
            border: 0,
            padding: 0,
            backgroundColor: 'none'
        }
    });
}
function ticmEntityFeed_print_unblockContent() {
    $("#ticmEntityFeed_feedContent").unblock();
}