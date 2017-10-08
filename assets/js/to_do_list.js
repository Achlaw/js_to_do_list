$("li").click(function(){
  $(this).toggleClass("completed");
});

$("span").click(function(clicked){
  $(this).parent().fadeOut(500, function(){
    $(this).remove();
  });
  clicked.stopPropagation();
});

$("input[type='text']").keypress(function(clicked){
  if(clicked.which === 13){
    var newToDo = $(this).val();
    $(this).val("");
    $("ul").append("<li><span>Delete</span> " + newToDo + "</li>")
  }
});
