$("docment").ready(function() {
  $("#cardadd").on("click", function() {
    if ($("#bg-overlay").css('opacity') == 0 || $("#bg-overlay").css('opacity') == 1) {
      if ($("#bg-overlay").css("display") == "none") {
        $("#bg-overlay").fadeIn();
        $("#card-tmp").fadeIn();
      } else {
        var c = $("#card-tmp").clone(true);
        $("#bg-overlay").fadeOut();
        $("#card-tmp").fadeOut();
        c.addClass("col");
        c.addClass("s3");
        c.removeAttr("id");
        $("#main-content").append(c);
      }
    }
  });
});
