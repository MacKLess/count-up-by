$(document).ready(function(){
  $("#userInput").click(function(event){
    event.preventDefault();
  });
  var result = [];
  var countTo = parseInt($("input#countTo").val());
  var countBy = parseInt($("input#countBy").val());

  for (var index = 0; index <= countTo; index += countBy){
    result.push(index);
    console.log(result);
  };

  $("#outPut").show(result);
  console.log(result);

});
