import {fetchWeather} from './weatherfetcher';

const ViewHandler = (() => {
    const form = document.querySelector("#search");
    const cityName = document.querySelector('#city');
    const wait = document.querySelector('#wait');
    cityName.addEventListener('input', async (e) => {
        e.preventDefault();
        wait.classList = [];
        let info = getInfo();
        let weather = await fetchWeather(cityName.value);
        if(weather == false){
            wait.className = "not-visible";
            handleError();
            return;
        }
        hideError();
        wait.className = "not-visible";
        info[0].textContent = 'Sky: ' + weather.cloudcover.toString();
        info[1].textContent = 'Temperature: ' + weather.temperature.toString();
        info[2].textContent = 'Windspeed: ' + weather.windspeed.toString() + " kph";
        info[3].textContent = 'Name: ' + weather.name.toString();
        info[4].textContent = 'Time: ' + weather.time;      
    });
    const getInfo = () => {
        const weatherTemp = document.querySelector('#temperature');
        const weatherCloud = document.querySelector('#cloudcover');
        const weatherWind = document.querySelector('#windspeed');
        const weatherName = document.querySelector('#name');
        const currentTime = document.querySelector('#time');
        return [weatherCloud, weatherTemp, weatherWind, weatherName, currentTime];
    };
    const handleError = () => {
        const errorMessage = document.querySelector('#error');
        errorMessage.classList = [];
        let info = getInfo();
        info.forEach(element => {
            element.textContent = "";
        });
    };
    const hideError = () => {
        let errorMessage = document.querySelector('#error');
        errorMessage.className = "not-visible";
    }
});

export {ViewHandler};