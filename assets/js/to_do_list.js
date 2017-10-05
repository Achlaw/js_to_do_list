$("li").click(function(){
  $(this).toggleClass("completed");
});

$("span").click(function(clicked){
  $(this).parent().remove();
  clicked.stopPropagation();
});