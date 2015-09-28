/*
  z-index
  cardadd:103
  card-tmp:102
  bg-overlay:100
*/
$("docment").ready(function() {
  //add
  $("#cardadd").on("click", function() {
    if ($("#bg-overlay").css('opacity') == 0 || $("#bg-overlay").css('opacity') == 1) {//Barrage chk
      //fadein
      if ($("#bg-overlay").css("display") == "none") {
        $("#bg-overlay").fadeIn();
        $("#card-tmp").fadeIn();
      //fadeout
      } else {
        var c = $("#card-tmp").clone(true);
        $("#bg-overlay").fadeOut();
        $("#card-tmp").fadeOut();
        //add text
        var input=c.find('input');
        input.after(c.find('input').val());
        input.remove();
        var textarea=c.find('Textarea');
        textarea.after(c.find('Textarea').val());
        textarea.remove();
        c.addClass("col");
        c.addClass("s3");
        c.removeAttr("id");//Duplicate measures
        $("#main-content").append(c);
      }
    }
  });
  //notadd overlay off
  $("#bg-overlay").on("click",function(){
    $("#bg-overlay").fadeOut();
    $("#card-tmp").fadeOut();
  })
});
