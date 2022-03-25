import {fetchWeather} from './modules/weatherfetcher';

const createInfo = () => {
    let weatherTemp = document.querySelector('#temperature');
    let weatherCloud = document.querySelector('#cloudcover');
    let weatherWind = document.querySelector('#windspeed');
    let weatherName = document.querySelector('#name');
    return [weatherCloud, weatherTemp, weatherWind, weatherName];
};
const AddInfo = (info) => {
    let target = document.querySelector('.content');
    target.appendChild(info);
};

let form = document.querySelector("#search");
let cityName = document.querySelector('#city');

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    let info = createInfo();
    let weather = await fetchWeather(cityName.value);
    info[3].textContent = 'Name: ' + weather.name.toString();
    info[1].textContent = 'Temperature: ' + weather.temperature.toString();
    info[0].textContent = 'Sky: ' + weather.cloudcover.toString();
    info[2].textContent = 'Windspeed: ' + weather.windspeed.toString() + " kph";
})