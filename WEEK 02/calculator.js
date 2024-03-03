let firstNum = prompt('첫 번째 정수를 입력해주세요');
let secondNum = prompt('두 번째 정수를 입력해주세요');

let firstInt = parseInt(firstNum);
let secondInt = parseInt(secondNum);

var plus = firstInt + secondInt;
var minus = firstInt - secondInt;

document.querySelector('.plus_box input').value = plus;
document.querySelector('.minus_box input').value = minus;
