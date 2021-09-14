(function ($) {
  // Add dots

  // Count canvases
  var slideCount = $(".canvas").length,
    paginationDot = '<div class="dot"></div>';

  for (var i = 1; i <= slideCount; i++) {
    $(".pagination-dot-container").append(paginationDot);
  }

  // Add selected class to first dot
  $(".dot").first().addClass("selected");

  // Build Carousel
  var dot = 0,
    length = $(".dot").length - 1,
    winWidth = $(window).width(),
    messageBoxWidth = $(".message-box").width(),
    slideFunction = function () {
      var currentDot = $(".dot").eq(dot),
        currentSlide = $(".canvas").eq(dot),
        currentCard = $(".card").eq(dot);

      currentDot.addClass("selected");
      currentCard.addClass("activeCard");
      $(".dot").not(currentDot).removeClass("selected");
      $(".card")
        .not(currentCard)
        .removeClass("activeCard")
        .removeClass("prevCard");
      $(".activeCard").prev().addClass("prevCard");

      $(".canvas-container").animate({ left: -dot * winWidth }, 500);
      $(".card-container").css("left", -dot * messageBoxWidth);
    };

  $(".pagination-forward-container").on("click", function () {
    dot = dot < length ? (dot += 1) : 0;
    slideFunction();
  });

  $(".dot").on("click", function () {
    dot = $(this).index(".dot");
    slideFunction();
    $(".card")
      .not(currentCard)
      .removeClass("activeCard")
      .removeClass("prevCard");
    $(".activeCard").prev().addClass("prevCard");
  });

  var carouselSetup = function () {
    winWidth = $(window).width();
    var canvasCount = $(".canvas").length,
      cardCount = $(".card").length;

    $(".canvas").css("width", "calc(100%/" + canvasCount + " )");
    $(".canvas-container").css("width", winWidth * canvasCount);
    $(".card-container").css("width", messageBoxWidth * cardCount);
  };

  $(window).on("load resize", function () {
    carouselSetup();
  });
})(jQuery);