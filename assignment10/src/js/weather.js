const API_KEY = 'ee0106d1351f040736a2ee075c4ed63a';

function onGeoOk(pos) {
    const lat = pos.coords.latitude;
    const lon = pos.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&lang=kr&units=metric&appid=${API_KEY}`;
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            const city = document.querySelector("#weather span:first-child");
            const weather = document.querySelector("#weather span:last-child");
            city.innerText = data.name;
            weather.innerText = data.weather[0].description
            console.dir(data);
        });
}

function onGeoError() {
    alert("사용자의 위치 정보를 가져올 수 없습니다.")
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);