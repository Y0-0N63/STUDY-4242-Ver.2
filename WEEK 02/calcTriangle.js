// 사용자가 입력한 밑변, 높이의 값을 'width', 'height' 변수에 저장
let width = prompt('삼각형의 밑변의 길이를 입력하세요.');
let height = prompt('삼각형의 높이의 길이를 입력하세요.');

// 입력받은 밑변과 높이를 사용하여 계산한 삼각형의 넓이의 값을 'area' 변수에 저장
let area = (width * height) / 2;

// 계산된 넓이(변수 'area')를 알림창으로 출력하여 사용자가 볼 수 있게 함
alert('삼각형의 넓이는 ' + area + 'cm^2 입니다.');
