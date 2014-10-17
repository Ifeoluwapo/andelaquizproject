/*javascript codes to add values of scores and print the answer-*/
var addUp = function(form) {
var answer=[];
var sum=0;
var answerArray = $("input[question]:checked").val();
var elementArray= parseInt(answerArray);
answer.push(elementArray);
console.log(answer);
for (var i=0;i<=answer.length;i++){
    sum+=answer[i];
    console.log(sum)
    console.log(answer.length);
    }
};

$("#getResult").click(function(){
    console.log(sum);
   addUp();
});

