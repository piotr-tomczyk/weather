import {Weather} from './weather';

async function fetchWeather(name) {
    let API_KEY = 'e71a677e8f15c5ee6c5d3ecbb730d5a1';
    const endpoint = `https://api.openweathermap.org/data/2.5/weather?q=${name}&units=metric&appid=${API_KEY}`;
    const response = await fetch(endpoint, {mode: 'cors'});
    const data = await response.json();
    console.log(data);
    if(data.message){
        return false;
    }
    return new Weather(data.weather[0].main, data.main.temp, data.wind.speed, data.name + ', ' + data.sys.country, parseDate(data));
};

const parseDate = (data) =>{
    var time = new Date();
    var tim = new Date(time.getTime() + data.timezone * 1000 - 3600000);
    return "" + tim.getHours() + ":" + tim.getMinutes();
};

const errorMessage = (ifError) =>{
    if (ifError){
        let error = document.querySelector('#error')
        error.classList = []
        return;
    }
    let error = document.querySelector('#error')
    error.className = "not-visible";
    return;
}
export {fetchWeather};