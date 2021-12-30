# Momentum App

바닐라 JS로 크롬 앱 만들기

--------------------------------------------------------

작업기간: 12/23 - 12/30 <br>
사용언어: HTML, CSS, Javascript

--------------------------------------------------------

1. 랜덤배경이미지, 랜덤문구(bg.js + quotes.js)
    * 행렬을 형성으로 랜덤 배경 이미지, 랜덤 송출 문구 지정
    * Math.random, Math.floor 기능을 사용한 행렬 순번 randonmize

2. 현재 날짜, 시간(clock.js)
    * Data 객체를 사용하여 날짜, 시간 관련 정보 표현
    * setInterval, setTimeout - 일정주기, 일정시간 이후로 실행되는 타이머 설정
    * 추가로 구현한 기능: 현재 날짜(yyyy/mm/dd)

3. 로그인, 로그아웃(login.js)
    * submit event 발생시, localStorage에 유저 정보 저장
    * 유저 정보 저장 유무에 따라 기존의 login-form, logout-form을 숨긴 후 '유저 환영 메시지'를 보이게 함
    * 추가로 구현한 기능: 로그아웃(logout-form)

4. 투두리스트(todo.js)
    * input에 submit된 value를 localStorage에 string화한 객체배열로 저장
    * localStorage에 저장된 정보의 유무로 li 표현
    * event.target 부모요소를 확인으로 li 추가 및 삭제 기능

5. Open Weather API(weather.js)
    * openweathermap의 API를 사용하여 실시간 위치, 날씨, 기온 정보를 표현