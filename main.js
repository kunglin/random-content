$(document).ready(function () {
    $("#new-quote").on('click', function () {
        getQuote();
    });
});

var content = "";
var author = "";

var getQuote = function () {
    $.getJSON("https://sslapi.hitokoto.cn/?encode=json", function (json) {
        content = json["hitokoto"];
        author = json["from"];
        $(".top-content").animate({
            opacity: 0
        }, 500,
            function () {
                $(this).animate({
                    opacity: 1
                }, 500);
                $("#text").html(content);
                $("#author").html(' ' + author);
            }
        );
    });
}