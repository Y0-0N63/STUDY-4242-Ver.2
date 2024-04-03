// 숫자 배열에서 최댓값과 최솟값을 비교하는 함수
function MaxOrMin(numbers) {
  // 숫자 입력이 비어있을 경우
  if (!numbers) {
    console.log('숫자를 다시 입력해주세요.');
    return;
  }

  // 배열의 요소들을 개별적인 요소로 구별한 후 숫자로 변환
  const inputNumStr = numbers.split(' ');
  const arrNum = [];
  for (let i = 0; i < inputNumStr.length; i++) {
    arrNum.push(parseInt(inputNumStr[i]));
    i++;
  }

  let max = arrNum[0];
  let min = arrNum[0];

  // 최댓값과 최솟값 찾기
  for (let i = 1; i < arrNum.length; i++) {
    if (arrNum[i] > max) {
      max = arrNum[i];
    }

    if (arrNum[i] < min) {
      min = arrNum[i];
    }
  }

  console.log('최댓값은 ' + max + ' 최솟값은 ' + min);
}

const inputNum = '58 234 12 45 2';
//결과 출력하기
console.log(MaxOrMin(inputNum));
