const weatherRef = document.querySelector('.js-wheatherContainer')

fetch( 'http://api.weatherstack.com/current?access_key=4809d83c35d4ec684f0b2ae54db9daaf&query=Kharkiv')
.then(data => data.json())
.then(response =>{ 
    const markUp = buildTodoItems(response)
    weatherRef.insertAdjacentHTML('beforeend', markUp)
})




// function buildTodoItems(item){
//     return `<div class="weatherItem">
//                <img src="" alt="" class="weatherIMG"></img>
//             </div>
//             <div>
//                 <p class="weatherP currenciP">27&deg;</p>
//                 <p class="weatherSuperP">Rainy</p>
//             </div>`
// }


function buildTodoItems(item){
    return `<div class="weatherItem">
               <img src="${item.current.weather_icons[0]}" alt="" class="weatherIMG"></img>
            </div>
            <div>
                <p class="weatherP currenciP">${item.current.temperature}&deg;</p>
                <p class="weatherSuperP">${item.current.weather_descriptions}</p>
            </div>`
}

