const weatherForm = document.querySelector('.input-form');
const search = document.querySelector('.search-input');
const plocation = document.querySelector('.location');
const pforecast = document.querySelector('.forecast');

const getForecast = (address) => fetch(`/weather?address=${address}`)
    .then((res) => res.json())
    .then((data) => {
        if (data.error) {
            return console.log(data.error)
        }
        plocation.textContent = data.location;
        pforecast.innerText = data.forecast;
    });

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const location = search.value;

    getForecast(location);
})