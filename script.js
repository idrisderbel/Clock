// call the function setClock every 1s 
setInterval(setClock,1000)




function setClock(){
const hourHand = document.querySelector('[data-hour-hand]')
const minuteHand = document.querySelector('[data-minute-hand]')
const secondHand = document.querySelector('[data-second-hand]')
    const currentDate = new Date()
    const secondsRatio = currentDate.getSeconds()/60
    const minutesRatio = (secondsRatio + currentDate.getMinutes())/60
    const hoursRatio =(minutesRatio + currentDate.getHours())/12

    setRotation(secondHand,secondsRatio)
    setRotation(minuteHand,minutesRatio)
    setRotation(hourHand,hoursRatio)
    console.log(secondHand)
}

function setRotation(element,rotationRatio){
    element?.style.setProperty('--rotation',rotationRatio*360)
}