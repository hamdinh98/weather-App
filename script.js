const keyApi = "17d0584426123ca0cdfda42fbaf14695";
async function fetchweather(city) {
    const response = await fetch(
        "https://api.openweathermap.org/data/2.5/weather?q=" +
        city +
        "&units=metric&appid=" +
        keyApi
    );
    const data = await response.json();
    displayWeather(data);
    //console.log(data);
}

function displayWeather(data) {
    const name = data.name;
    const temp = data.main.temp;
    const humidity = data.main.humidity;
    const desc = data.weather[0].description;
    const windSpeed = data.wind.speed;
    const icon = data.weather[0].icon;

    document.querySelector(".city").innerHTML = name;
    document.querySelector(".temp").innerHTML = "temperature: " + temp + "°C";
    document.querySelector(".humidity").innerHTML = "Humididy:" + humidity + " %";
    document.querySelector(".description").innerHTML = desc;
    document.querySelector(".wind").innerHTML =
        "wind speed: " + windSpeed + " km/h";
    document.querySelector(".icons").src =
        "https://openweathermap.org/img/wn/" + icon + ".png";

    document.body.style.backgroundImage =
        "url('https://source.unsplash.com/1600x900/?" + name + "')";
}

function setInfo() {
    fetchweather(document.querySelector(".search-bar").value);
}

function search() {
    setInfo();
    document.querySelector(".weather").style.display = "initial";
}