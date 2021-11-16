function addTwoNums(num1, num2){
  num1 = Number(document.getElementById("num1").value);
  num2 = Number(document.getElementById("num2").value);
  
  let output = num1 + num2;

  document.getElementById("output").value = output;
  };

// Question 1: Do you run into a problem with adding numbers and getting an unexpected output? For example, when both inputs are `1` getting `11` as an output rather than `2`? Why do you think this is?
// So the function gets the value of the input field as a string and we need to convert it to a number. Three options: 1. wrap it in parseInt() to convert them to integers or (parseFloat() for floating numbers) 2. wrap it in a Number() constructor 3. using unary plus (putting a + sign in front of it) +num1 + +num2

// Question 2: How can we ensure the inputs given to the function will always be valid? In other words, that they're both numbers.
//setting the type of the HTML input element number or typeOf() function??

// Question 3: Is there a difference between using let and const to define the variables for our elements? Which might we prefer to use?
//Const cannot be updated or re-declared, while Let can be updated but not re-declared. Probably let would be a better choice as we can update it if we want to use different values with it