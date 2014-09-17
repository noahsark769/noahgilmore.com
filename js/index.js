var transitionTo = function () {};

$(document).ready(function () {
    $(".link a").click(function () {
        var pageKey = $(this).data("page");
        transitionTo("pageKey");
    });
});