// 배열의 요소들 중 홀수만 골라서 더해주는 함수
function sumOddNum(arrNum) {
  var sum = 0;
  for (i = 0; i < arrNum.length; i++) {
    a = parseInt(arrNum[i]);
    if (a % 2 !== 0) {
      sum += a;
    }
  }
  return sum;
}

console.log(sumOddNum([1, 2, 3, 4, 5]));
