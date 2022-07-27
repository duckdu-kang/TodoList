const clock = document.querySelector("h2#clock");

function getClock(){
    const date = new Date();
    //Date object는 호출하는 당시의 현재 날짜와 시간을 알려줌
    const hours = String(date.getHours()).padStart(2, "0");
    // string이 가져야할 길이를 2로 설정하고 그렇지않다면 시작(앞)에 0을 추가
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock();
// 시간 즉시 호출 : 인터벌이 실행되기 까지 1초 딜레이를 없애줌
setInterval(getClock, 1000);
// 1초마다 반복해서 계속 실행