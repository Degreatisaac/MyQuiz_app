let user_name = sessionStorage.getItem("name");
let user_points = sessionStorage.getItem("points");
let user_time = sessionStorage.getItem("time");
document.querySelector("span.name").innerHTML = user_name;
document.querySelector("span.points").innerHTML = user_points;
document.querySelector("span.time_taken").innerHTML = user_time;

let AnswerBank = document.querySelector("#answerBank");
let End = document.querySelector("#end");
let Check = document.querySelector("#check");
Check.addEventListener("click", () => {
  End.style.display = "none";
  AnswerBank.style.display = "block";
});
console.log(Check)

let retakeTest = document.querySelector("#Retake");
retakeTest.addEventListener("click", () => {
    location.href = "start.html"; 
});
console.log(retakeTest)


let returnTest = document.querySelector("#Return");
returnTest.addEventListener("click", () => {
    location.href = "start.html"; 
});
console.log(returnTest)