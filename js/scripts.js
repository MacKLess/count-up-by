var total = 0;
var summands = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (var index = 0; index < summands.length; index +=2){
  total += summands[index];
}
alert(total);
