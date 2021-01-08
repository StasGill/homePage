const weatherRef = document.querySelector('.js-wheatherContainer')

fetch( 'http://api.openweathermap.org/data/2.5/weather?q=Kharkiv&appid=9753c6071ab2a7767cf7b406362d7607')
.then(data => data.json())
.then(response =>{ 
    const markUp = buildTodoItem(response)
    weatherRef.insertAdjacentHTML('beforeend', markUp)
    console.log(response)
})



// console.log(weatherRef)
function buildTodoItem(item){
    return `<div class="weatherItem">
    <img src="" alt="" class="weatherIMG">
    <p class="weatherSuperP">${item.weather[0].main}</p>
</div>
<div>
    <p class="weatherP currenciP">${(item.main.temp - 273.15).toFixed(1)}&deg;</p>
</div>`
}

