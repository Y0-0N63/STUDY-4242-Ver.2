// 숫자 배열에서 최댓값과 최솟값을 비교하는 함수
function MaxOrMin(numbers) {
  // 숫자 입력이 비어있을 경우, "숫자를 다시 입력해주세요." 출력
  if (!numbers) {
    console.log('숫자를 다시 입력해주세요.');
    return;
  }

  // 각 배열 요소를 숫자로 변환
  // split 입력된 숫자들을 공백을 기준으로 구별하여 숫자 배열로 변환
  const inputNumStr = numbers.split(' ');

  const arrNum = [];
  for (let i = 0; i < inputNumStr.length; i++) {
    arrNum.push(parseInt(inputNumStr[i]));
    i++;
  }

  // 최댓값 초기화
  let max = arrNum[0];
  // 최솟값 초기화
  let min = arrNum[0];

  // 최댓값과 최솟값 찾기
  for (let i = 1; i < arrNum.length; i++) {
    // 현재값과 최댓값 비교, 현재값이 최댓값보다 크면 최댓값으로 변경
    if (arrNum[i] > max) {
      // 현재값과 최댓값 비교, 현재값이 최댓값보다 크면 최댓값으로 변경
      max = arrNum[i];
    }

    if (arrNum[i] < min) {
      // 현재값과 최솟값 비교, 현재값보다 최솟값보다 작으면 최솟값 변경
      min = arrNum[i];
    }
  }
  // 결과 반환
  console.log('최댓값은 ' + max + ' 최솟값은 ' + min);
}

// 임의의 숫자 5개 지정
const inputNum = '58 234 12 45 2';
//결과 출력
console.log(MaxOrMin(inputNum));
