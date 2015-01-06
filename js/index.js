var transitionTo = function (sectionKey) {
    var activeSection = $(".js-is-active-section");
    activeSection.fadeOut(function () {
        activeSection.removeClass("js-is-active-section");
        activeSection.removeClass("current");
        var nextSection = $(".js-section-" + sectionKey);
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

    $(".project.berkeleytime .description").seemore({max_tokens: 40, postfix: "..."});
    $(".project.yelp .description").seemore({max_tokens: 40, postfix: "..."});
});