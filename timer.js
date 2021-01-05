const refs = {
    timer: document.querySelector('.timer'),
    startBtn: document.querySelector('button[data-action="start-timer"]'),
    stopBtn: document.querySelector('button[data-action="stop-timer"]'),
}
const timer = {
    isActive: false,
    start(){
        if(this.isActive){
            return
        }
        if(!this.isActive){
            this.isActive = true;
            this.startTime = Date.now();
            this.timerId = setInterval(()=>{
                const currentTime = Date.now();
                const deltaTime = currentTime - this.startTime
                updateClockFace(deltaTime)
                },1000);
        }
    },
    stop(){
        clearInterval(this.timerId);
        this.isActive = false;
        this.deltaTime = 0
        updateClockFace(this.deltaTime)
    },
};

function updateClockFace (time){
    // const date = new Date(time)
    // const hours = pad(date.getUTCHours());
    // const mins = pad(date.getMinutes());
    // const secs = pad(date.getSeconds());
    // console.log(`${hours}:${mins}:${secs}`)
    
    const hours = pad( Math.floor( (time % (1000 * 60 * 60 * 24)) / (1000 * 60 *60) ) );
    const mins = pad( Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = pad( Math.floor((time % (1000 * 60)) / (1000 )));
    
    
    refs.timer.textContent = `${hours}:${mins}:${secs}`
}

function pad(value){
    return String(value).padStart(2,'0');
}

refs.startBtn.addEventListener('click',timer.start.bind(timer));
refs.stopBtn.addEventListener('click',timer.stop.bind(timer))