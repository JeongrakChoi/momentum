const clock = document.querySelector(".clock");

function getClock(){
    const date = new Date();
    const dateHours = String(date.getHours()).padStart(2,'0')
    const dateMinutes = String(date.getMinutes()).padStart(2,'0')
    const dateSeconds = String(date.getSeconds()).padStart(2,'0')

    // clock.innerText = `${dateHours} : ${dateMinutes} : ${dateSeconds}`;
    clock.innerText = dateHours + ' : ' + dateMinutes + ' : ' + dateSeconds;
}

getClock();

setInterval(function(){
    getClock();
},1000)