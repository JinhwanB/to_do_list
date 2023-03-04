const weathers = document.querySelector("#weather");

const API_KEY = "0876185bcbd738d59c88ffd6a20a62a3";

function onGeo(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const img = document.createElement("img");
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const city = document.querySelector("#weather span:first-child");
      const weather = document.querySelector("#weather span:last-child");
      city.innerText = data.name;
      weather.innerText = `${data.weather[0].main} / ${Math.floor(
        data.main.temp
      )}°C`;
      const weatherIco = data.weather[0].icon;
      const weatherAdrs = `http://openweathermap.org/img/wn/${weatherIco}@2x.png`;
      img.src = weatherAdrs;
      weathers.appendChild(img);
    });
}

function errorGeo() {
  alert("Can`t find you. No weather for you.");
}

function printWeather() {
  weathers.classList.remove(HIDDEN_CLASSNAME);
  navigator.geolocation.getCurrentPosition(onGeo, errorGeo);
}

if (savedUsername) {
  printWeather();
}
