let MCQS = [{
    question: "how long will it take the Earth to make complete a rotation ?",
    choice1: "365 days",
    choice2: "60 Minutes",
    choice3: "3600 seconds",
    choice4: "24 hours",
    answer: 3
},
            {
            question: "Ade's last birthday was Febuary 29, 2020. is next birthday will be?",
    choice1: "Febuary 29, 2024",
    choice2: "Febuary 29, 2023",
    choice3: "Febuary 29, 2022",
    choice4: "Febuary 29, 2021",
    answer: 0
},
            {
            question: "The probability that Buhari will loss 2023 election is 1 because?",
    choice1: "Buhari didn't have a politcal party",
    choice2: "Buhari is not the people's choice",
    choice3: "Buhari is not a presidential candidate",
    choice4: "Buhari failed Nigeria for two terms",
    answer: 2
},
            {
            question: "That John is an aspirant of FUNAAB makes him a/an?",
    choice1: "Undergraduate",
    choice2: "Student",
    choice3: "Postgraduate",
    choice4: "Jambite",
    answer: 1
},
            {
            question: "Shalewa is a Nigerian and he has a Voters Card, it means she's?",
    choice1: "18 years old",
    choice2: "More than 18 years old",
    choice3: "Eligible to vote",
    choice4: "a candidate",
    answer: 2
},
            {
            question: "Chinedu scored 40 in an examination, if the pass mark is 39 it means?",
    choice1: "Have a carryover",
    choice2: "Failed the examination",
    choice3: "Didn't prepare for the examination",
    choice4: "Passed the examination",
    answer: 3
},
            {
               question: "which of these is not an academic body?",
    choice1: "ASUU",
    choice2: "NASU",
    choice3: "ASUP",
    choice4: "NAT",
    answer: 1
},{
               question: "If Dayo is a colphysite, it means he is?",
    choice1: "a funaabite",
    choice2: "in chemistry department",
    choice3: "an outstanding student",
    choice4: "competitive",
    answer: 0
},
            {
               question: "Which of these is not a TV reality show?",
    choice1: "Ultimate Search",
    choice2: "BIg Brother Naija",
    choice3: "Nigeria Idol",
    choice4: "Funsab Make we yarn",
    answer: 3
},
            {
               question: "Which of these is in the right order of authority?",
    choice1: "SUG President",
    choice2: "Vice Chancellor",
    choice3: "Welfare Director",
    choice4: "Head of Class",
    answer: 3
}];




let start = document.querySelector("#start");
let guide = document.querySelector("#guide");
let exit = document.querySelector("#exit");
let ContinueBtn = document.querySelector("#continue");
let quiz = document.querySelector("#quiz");
let time = document.querySelector("#time");
let questionNo = document.querySelector("questionNo");
let questionText = document.querySelector("#questionText");
let option1 = document.querySelector("#option1");
let option2 = document.querySelector("#option2");
let option3 = document.querySelector("#option3");
let option4 = document.querySelector("#option4");
let next_question = document.querySelector("#next_question");
let prev_question = document.querySelector("#prev_question");
let result = document.querySelector("#result");
let points = document.querySelector("#points");
let quit = document.querySelector("#quit");
let startAgain = document.querySelector("#startAgain");
let choice_que = document.querySelector(".choice_que");
let index = 0;
let timer = 0;
let interval = 0;
let correct = 0;
let UserAns = undefined;

start.addEventListener("click", () => {
    start.style.display = "none";
    guide.style.display = "block";
})

exit.addEventListener("click", () => {
    start.style.display = "block";
    guide.style.display = "none";
})

let countDown = () => {
    if (timer === 20) {
        clearInterval(interval);
        next_question.click();
    } else {
        timer++;
        time.innerText = timer;
    }
}

let loadData = () => {
    questionNo.innerText = index + 1 + ".";
    questionText.innerText = MCQS[index].question;
    option1.innerText = MCQS[index].choice1;
    option2.innerText = MCQS[index].choice2;
    option3.innerText = MCQS[index].choice3;
    option4.innerText = MCQS[index].choice4;
}

loadData();

ContinueBtn.addEventListener("click", () => {
    quiz.style.display ="block";
    guide.style.display = "none";

    interval = setInterval(countDown, 1000);
    loadData();

    choice_que.forEach(removeActive => {
        removeActive.classList.remove("active")
    })
    total_correct.innerHTML == `${correct = 0} Out Of ${MCQS.length} Questions`;
});

choice_que.forEach((choices, choiceNo) =>{
    choices.addEventListener("click", () => {
        choices.classList.add("active");
        if (choiceNo === MCQS[index].answer) {
            correct++;
        } else {
            correct += 0;
        }
        clearInterval(interval);
        for (i = 0; i <= 3; i++) {
            choice_que[i].classList.add("disabled");
        }
    })
});

if (index !== MCQS.length - 1) {
    index++;
    choice_que.forEach(removeActive => {
        removeActive.classList.remove("active");
    })

    //question
    loadData();

    //result
    total_correct.style.display = "block";
    total_correct.innerHTML = `${correct} Out Of ${MCQS.length} Questions`;
    clearInterval(interval);
    interval = setInterval(countDown, 1000);
} else {
    index = 0;

    clearInterval(interval);
    quiz.style.display = "none";
    points.innerHTML = `You Got ${correct} Out Of ${MCQS.length}`;
    result.style.display = "block";
}
for (i = 0; i <= 3; i++) {
    choice_que[i].classList.remove("disabled");
}

quit.addEventListener("click", () => {
start.style.display = "block";
result.style.display = "none";
});
startAgain.addEventListener("click", () => {
guide.style.display = "block";
result.style.display = "none";
});


