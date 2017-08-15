$(document).ready(function(){
  $("#userInput").submit(function(event){
  var countTo = parseInt($("input#countTo").val());
  var countBy = parseInt($("input#countBy").val());
  var result = [];

  for (var index = 0; index <= countTo; index += countBy){
    result.push(index);
  };

  $("#outPut").text(result);
    event.preventDefault();
  });
});
