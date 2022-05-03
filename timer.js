let time= 20;
let quizTimeMinutes = time * 60 * 60;
let quizTime = quizTimeMinutes / 60;

let counting = document.getElementById("time");

function startCountdown(){
    let quizTimer = setInterval(function(){
    if(quizTime <= 0) {
        clearInterval(quizTimer);
        location.href = "end.html";
    }
    else {
        quizTime--;
        let sec = Math.floor(quizTime % 60);
        let min = Math.floor(quizTime / 60) % 60;
        counting.innerHTML = ` ${min} : ${sec}`;
    }
    }, 1000)
}

startCountdown();