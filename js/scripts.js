$(document).ready(function(){
  $("#userInput").submit(function(event){
  var countTo = parseInt($("input#countTo").val());
  var countBy = parseInt($("input#countBy").val());
  var result = [];

  if (isNaN(countTo) || isNaN(countBy)) {
    alert ("Please enter a real number to calculate!")
    }
  else if (countTo < 0 || countBy < 0){
      alert ("Please enter a whole positive number to calculate!")
    }
    else if (countTo < countBy){
        alert ("Check your #s! We can't divide a value by a larger number!")
      }
      else {
        for (var index = 0; index <= countTo; index += countBy){
          result.push(index);
        }
      }
  $("#outPut").text(result);
    event.preventDefault();
  });
});
