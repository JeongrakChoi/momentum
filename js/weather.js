const API_KEY = '9b5e8049c306f9a0cc0fcc0638a0038d';

function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;

    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

    fetch(url)
        .then(Response => Response.json())
        .then(data => {
            const from = data.name;
            const weather = data.weather[0].main;

            const fromEle = document.querySelector('.fromTxt');
            const weatherTxtEle = document.querySelector('.weatherTxt');
            const weatherIcoEle = document.querySelector('.weatherIco img');
            const weatherTempEle = document.querySelector('.weatherTemp');

            weatherIcoEle.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

            fromEle.innerText = from;
            weatherTxtEle.innerText = weather;
            weatherTempEle.innerText = `${data.main.temp} ℃`;
    })
}

function onGeoError(){
    alert('위치를 찾을 수 없습니다.')
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);


// function onGeoOk(position) {
//   const lat = position.coords.latitude;
//   const lon = position.coords.longitude;
//   const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
//   fetch(url)
//     .then((response) => response.json())
//     .then((data) => {
//       const weatherIcon = document.querySelector("#weather img");
//       const weather = document.querySelector("#weather .weather-temp");
//       const city = document.querySelector("#weather .weather-city");
//       weatherIcon.classList.remove(HIDDEN_CLASSNAME);
//       weatherIcon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
//       weather.innerText = `${data.main.temp} ℃`;
//       city.innerText = data.name;
//     });
// }
