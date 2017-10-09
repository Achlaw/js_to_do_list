$("ul").on("click", "li", function(){
  $(this).toggleClass("completed");
});

$("ul").on("click", "span", function(clicked){
  $(this).parent().fadeOut(500, function(){
    $(this).remove();
  });
  clicked.stopPropagation();
});

$("input[type='text']").keypress(function(clicked){
  if(clicked.which === 13){
    var newToDo = $(this).val();
    $(this).val("");
    $("ul").append("<li><span><i class='fa fa-times'></i></span> " + newToDo + "</li>")
  }
});

$(".fa-plus-square").click(function(){
  $("input[type='text']").fadeToggle();
})