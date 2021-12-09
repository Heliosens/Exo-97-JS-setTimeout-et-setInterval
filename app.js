let timeO = document.getElementById('timeout-div');
let inter = document.getElementById('interval-div');

let button2s = document.getElementById('timeout');
let buttonStart = document.getElementById('interval-start');
let buttonStop = document.getElementById('interval-stop');

// - 1 -
button2s.addEventListener('click', function (){
    setTimeout(function (){
        let outDiv = document.createElement('div');
        outDiv.style.border = "1px dashed red";
        outDiv.innerHTML = "Mon timout vient de créer ce div 2 secondes après le click sur le bouton !";
        timeO.appendChild(outDiv);
    }, 2000);
})

// - 2 -
let max = 0;
buttonStart.addEventListener('click', function () {
    let iDoId = setInterval(function () {
        max += 60;
        inter.innerHTML = max.toString();
    }, 60000);
    buttonStop.addEventListener('click', function () {
        clearInterval(iDoId);
    })
})

