/*avascript codes to scroll from one question to another*/
$(document).ready(function(){
answers = new Object();
$('.option').change(function(){
    var answer = ($(this).attr('value'))
    var question = ($(this).attr('name'))
    answers[question] = answer
})
var item1 = document.getElementById('questions');

$('#next').click(function(){
    var result = sum_values()
    alert(result);
});

})

function sum_values(){
var the_sum = 0;
for (questions in answers){
    the_sum = the_sum + parseInt(answers[question])
}
return the_sum
}

$('#next').click(function(){
$('.questions').fadeOut();
$('.questions' + $(this).html()).delay(450).fadeIn();



