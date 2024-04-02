function sumOddNum(arrNum) {
  var sum = 0;
  for (i = 0; i < arrNum.length; i++) {
    // 배열의 요소들을 숫자로 바꿔주기
    a = parseInt(arrNum[i]);
    // 홀수인 것만을 골라서 더해주기
    if (a % 2 !== 0) {
      sum += a;
    }
  }
  return sum;
}

console.log(sumOddNum([1, 2, 3, 4, 5]));
