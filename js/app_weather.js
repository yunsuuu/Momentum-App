const API_KEY = "728e568f9857ce44920f265b0833bf7c"

function onGeoOk(position) {
    const lat = position.coords.latitude; // 위도
    const lon =  position.coords.longitude; // 경도
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    // console.log(url);
    fetch(url).then((response) => response.json()).then((data) => {
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
        weather.innerText = `${data.weather[0].main} / ${data.main.temp}`
        city.innerText = data.name;
    })
}

function onGeoError() {
    alert("Can't find you, No weather for you");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);