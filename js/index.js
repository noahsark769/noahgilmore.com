var transitionTo = function (sectionKey) {
    console.log("transitionTo called with key: ", sectionKey);
    var activeSection = $(".js-is-active-section");
    console.log(activeSection.get(0));
    activeSection.fadeOut(function () {
        activeSection.removeClass("js-is-active-section");
        activeSection.removeClass("current");
        var nextSection = $(".js-section-" + sectionKey);
        console.log(nextSection.get(0));
        nextSection.addClass("js-is-active-section");
        nextSection.addClass("current");
        nextSection.fadeIn().css("display", "inline-block");
    });
};

$(document).ready(function () {
    $(".js-section-link").click(function () {
        var $this = $(this);
        var sectionKey = $(this).data("section");
        if (!$(".js-section-" + sectionKey).hasClass("js-is-active-section")) {
            transitionTo(sectionKey);
        }
    });
});