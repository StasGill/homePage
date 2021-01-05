

const timeRefs = document.querySelector('.clock-panel') 

const updateClock =function (){
  const timeAll = new Date()
const timeHours =String( timeAll.getHours()).padStart(2,'0')
const timeMinutes =String( timeAll.getMinutes()).padStart(2,'0')
const timeReady = `${timeHours} : ${timeMinutes}`
  timeRefs.textContent = timeReady
  
}
updateClock()



setInterval(updateClock,6000)

  