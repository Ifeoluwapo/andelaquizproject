function calcscore (){
var score = 0;
$(".options:checked").each(function(){
	score+=parseInt($(this).val(),10);
  });
$("input[name=sum]").val(score)
}
  $().ready(function(){
    $(".options").change(function(){
        calcscore()
      });
});
