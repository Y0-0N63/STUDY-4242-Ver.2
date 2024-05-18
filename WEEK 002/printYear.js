// 사용자에게 태어난 연도를 입력하라는 메세지 출력 후, 입력값을 변수 'birthYear'에 저장
let birthYear = prompt('태어난 연도를 입력하세요.');
// 사용자에게 현재 연도를 입력하라는 메세지 출력 후, 입력값을 변수 'currentYear'에 저장
let currentYear = prompt('현재 연도를 입력하세요.');

// 입력받은 태어난 연도와 현재 연도를 사용하여 나이 계산 후, 변수 'age'에 저장
let age = currentYear - birthYear;

// 계산된 나이(변수 'age')를 알림창으로 출력
alert('당신의 나이는 ' + age + '세 입니다.');
