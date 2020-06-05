// // Business Logic portion of the code

const add = function(number1, number2) {
  return number1 + number2;
};

const subtract = function(number1, number2) {
  return number1 - number2;
};

const multiply = function(number1, number2) {
  return number1 * number2;
};

const divide = function(number1, number2) {
  return number1 / number2;
};

const book = function(name, description, appDate){
  return name + " " + description + " " + appDate;
};
// Interface logic portion of code

$(document).ready(function(){
  $("form#add").submit(function(event){
    event.preventDefault();  
    const number1 = parseInt($("#add1").val());
    const number2 = parseInt($("#add2").val());
    const result = add(number1, number2);
    $("#output").text(result);
  });
});

$(document).ready(function(){
  $("form#subtract").submit(function(event){
    event.preventDefault();  
    const number1 = parseInt($("#subtract1").val());
    const number2 = parseInt($("#subtract2").val());
    const result = subtract(number1, number2);
    $("#output").text(result);
  });
});

$(document).ready(function(){
  $("form#multiply").submit(function(event){
    event.preventDefault();  
    const number1 = parseInt($("#multiply1").val());
    const number2 = parseInt($("#multiply2").val());
    const result = multiply(number1, number2);
    $("#output").text(result);
  });
});

$(document).ready(function(){
  $("form#divide").submit(function(event){
    event.preventDefault();  
    const number1 = parseInt($("#divide1").val());
    const number2 = parseInt($("#divide2").val());
    const result = divide(number1, number2);
    $("#output").text(result);
  });
});

// const beverage = $("#beverage").val();

// const flavor = $("input:radio[name=flavor]:checked").val();

 
$(document).ready(function(){
  $("form#appointment").submit(function(event){
    event.preventDefault();
    const name = $(#name).val();
    const description = $("#description").val();
    const appDate = $("#appDate").val();
    const appFinish = book(name, description, appDate);
    $("#finish").text(appFinish);
  });
});
// const favoriteColor = $("#color").val();

// $(document).ready(function() {
//   $("form#insurance").submit(function(event) {
//     const age = parseInt($("input#age").val());
//     const gender = $("select#gender").val();

//     if (age) {
//       let quote = (100 - age) * 3;
//       if (gender === 'male' && age < 26) {
//         quote += 50;
//       }

//       $("#rate").text(quote);
//       $("#quote").show();
//     } else {
//       alert('Please enter your age.');
//     }
//     if (!under18){
//       //do something only adults can do
//     }
//     event.preventDefault();
//   });
// });
