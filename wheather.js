const weatherRef = document.querySelector('.js-wheatherContainer')

fetch( 'http://api.weatherstack.com/current?access_key=4809d83c35d4ec684f0b2ae54db9daaf&query=Kharkiv')
.then(data => data.json())
.then(response =>{ 
    const markUp = buildTodoItem(response)
    weatherRef.insertAdjacentHTML('beforeend', markUp)
    
})



// console.log(weatherRef)
function buildTodoItem(item){
    return `<div class="weatherItem">
    <img src="${item.current.weather_icons[0]}" alt="" class="weatherIMG">
    
</div>
<div>
    <p class="weatherP currenciP">${item.current.temperature}&deg;</p>
</div>`
}

