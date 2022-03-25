import {Weather} from './weather';

async function fetchWeather(name) {
    let API_KEY = 'e71a677e8f15c5ee6c5d3ecbb730d5a1';
    const endpoint = `https://api.openweathermap.org/data/2.5/weather?q=${name}&units=metric&appid=${API_KEY}`;
    const response = await fetch(endpoint, {mode: 'cors'});
    const data = await response.json();
    console.log(data);
    return new Weather(data.weather[0].main, data.main.temp, data.wind.speed, data.name + ', ' + data.sys.country);
};

export {fetchWeather};