const currenciRef = document.querySelector('.js-currenciContainer')


fetch('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5')
.then(response => response.json())
.then(data => {
    const fuu = +data[0].buy
    currenciRef.insertAdjacentHTML('beforeend', `<p class="weatherP currenciP"> $ ${fuu}</p>`)
})



