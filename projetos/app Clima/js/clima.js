function search() {

    let buscar = document.querySelector('#search').value

    const key = '70314b1c5c375d2ac66d3f6e85f42fd1'
    const climaUrl = `https://api.openweathermap.org/data/2.5/weather?q=${buscar}&lang=pt_br&appid=${key}`

    fetch(climaUrl)
        .then(res => res.json())
        .then(data => {
            // primeira parte

            nameSearch.textContent = `${data.name} - ${data.sys.country}` // cidade / estado / país
            description.textContent = data.weather[0].description// status do tempo
            icon.textContent = data.weather[0].icon // incoe do tempo

            // segunda parte
            let Temp = data.main.temp - 273.15// temperatura
            let temp_max = data.main.temp_max - 273.15// temperatura max
            let temp_min = data.main.temp_min - 273.15// temperatura min

            temp.textContent = Math.round(Temp) + '°'
            humidity.textContent = data.main.humidity + '%' // humidade do tempo

            tempMax.textContent = Math.round(temp_max) + '°'
            tempMin.textContent = Math.round(temp_min) + '°'
            speed.textContent = data.wind.speed + 'm/s'

        })
        .catch(error => console.error(error))

    document.querySelector('#search').value = ""
}
