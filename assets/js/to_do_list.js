$("li").click(function(){
  $(this).toggleClass("completed");
});

$("span").click(function(clicked){
  $(this).parent().fadeOut(500, function(){
    $(this).remove();
  });
  clicked.stopPropagation();
});
