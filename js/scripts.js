$(document).ready(function() {
  $("form#triangle").submit(function(event) {
    event.preventDefault();
    var number1 = parseInt($("#input1").val());
    var number2 = parseInt($("#input2").val());
    var number3 = parseInt($("#input3").val());

    if (number1 === number2 === number3) {
      $("#equilateral").show();
    } else if (number1 === number2 || number2 === number3 || number1 === number3) {
      $("#isosceles").show();
    } else if (number1 !== number2 && number2 !== number3 && number3 !== number1) {
      $("#scalene").show();
    } else if ((number1 + number2)<=number3) {
      $("#notTraingle").show();
    }
console.log
  });
});
