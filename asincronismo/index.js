const paragraph = document.getElementById('paragraph');
const loadP = document.getElementById('loadP');
const loader = document.getElementsByClassName('lds-roller');
const APIKEY = 'd1ae331d2bc077d2905c05885ceff38e';

console.log(loader)
/*
setTimeout(() => {
    loadP.classList.add('show');
    loader[0].style.display = 'none';
}, 3000); */

const openWeather = async (city) => {
    const getDataFromAPIWeather = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKEY}`);
    const responseData = await getDataFromAPIWeather.json();
    return responseData;
}

openWeather('London')
.then((respuestaDelClima) => {
    console.log(respuestaDelClima);
})
.catch((error) => console.log(error));
