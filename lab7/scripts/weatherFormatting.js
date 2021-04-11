const unitsSystem = 'metric';
const fetchWeather = ((appid, unitsSystem, city) => {
    return city => {
        return fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${appid}&units=${unitsSystem}`).then(data =>  data.json());
    }
})('cece76df5bbd26aa6a106ba01efaac56', unitsSystem); // TODO: obfuscation.

function fillInWeather(weather) {
    let unitsTemperature;
    switch (unitsSystem) {
        case 'metric':
            unitsTemperature = '°C';
            break;
        case 'imperial':
            unitsTemperature = 'F';
            break;
        default:
            unitsTemperature = 'K';
            break;
    }

    const weatherInfoIcon = document.createElement('img');
    weatherInfoIcon.className = 'weather-info__icon';
    weatherInfoIcon.src = `http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`;
    weatherInfoIcon.alt = weather.weather[0].description;

    const weatherInfoSecondary = document.createElement('h2');
    weatherInfoSecondary.appendChild(document.createTextNode(`${weather.weather[0].description}`));
         // There can be multiple weather descriptions for one area - the first is the primary.

    const weatherInfoPrimary = document.createElement('h3');
    weatherInfoPrimary.appendChild(document.createTextNode(
        `Temperature ${weather.main.temp}${unitsTemperature}`
    ));

    const alpha = weatherInfoGeneral.children[0];
    const beta = weatherInfoGeneral.children[1];
    alpha.textContent = ''; // Removing all children.
    beta.textContent = ''; // Removing all children.
    alpha.appendChild(weatherInfoIcon);
    alpha.appendChild(weatherInfoSecondary);
    beta.appendChild(weatherInfoPrimary);

    // List will be formed automatically from elements of this array.
    const weatherInfoStrings = [
        `Feels like: ${weather.main.feels_like} ${unitsTemperature}`,
        `Humidity: ${weather.main.humidity} %`,
        `Pressure: ${weather.main.pressure} hPa`,
    ];

    weatherInfoList.textContent = '';
    weatherInfoStrings.forEach(str => {
        let li = document.createElement('li');
        li.appendChild(document.createTextNode(str));
        weatherInfoList.appendChild(li);
    });
}
function getWeather() {
    const city = document.getElementById("input-city").value;
    fetchWeather(city).then(weather  => {
        console.dir(weather);
        fillInWeather(weather);
    })
};

// const btn = document.getElementById('btn-get-city');
const weatherInfoGeneral = document.getElementsByClassName('weather-info__general')[0];
const weatherInfoList = document.getElementsByClassName('weather-info__list')[0];

getWeather();

document.getElementById('btn-get-city').addEventListener('click', getWeather);
