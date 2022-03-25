import {fetchWeather} from './weatherfetcher';

const ViewHandler = (() => {
    const form = document.querySelector("#search");
    const cityName = document.querySelector('#city');
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        let info = getInfo();
        let weather = await fetchWeather(cityName.value);
        if(weather == false){
            handleError();
            return;
        }
        hideError();
        info[0].textContent = 'Sky: ' + weather.cloudcover.toString();
        info[1].textContent = 'Temperature: ' + weather.temperature.toString();
        info[2].textContent = 'Windspeed: ' + weather.windspeed.toString() + " kph";
        info[3].textContent = 'Name: ' + weather.name.toString();
        info[4].textContent = 'Time: ' + weather.time;      
    });
    const getInfo = () => {
        let weatherTemp = document.querySelector('#temperature');
        let weatherCloud = document.querySelector('#cloudcover');
        let weatherWind = document.querySelector('#windspeed');
        let weatherName = document.querySelector('#name');
        let currentTime = document.querySelector('#time');
        return [weatherCloud, weatherTemp, weatherWind, weatherName, currentTime];
    };
    const handleError = () => {
        let errorMessage = document.querySelector('#error');
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