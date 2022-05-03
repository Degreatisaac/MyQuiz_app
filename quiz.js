let questions = [
    {
        id: 1,
        question: '_____ is the wordone per unit time?',
        answer: "Power",
        options: ['Energy', 'Force', 'Power', 'Velocity']
    },

    {
        id: 2,
        question: '______ is the smallest unit of life?',
        answer: "Cell",
        options: ['Cell', 'Tissues', 'System', 'Organs']
    },

    {
        id: 3,
        question: 'A boy carries a load of 15N through a distance of 5m. Calculate the work done in carrying the load.',
        answer: "75J",
        options: ['125J', '25J', '65J', '75J']
    },

    {
        id: 4,
        question: 'Which of these does not make up a system?',
        answer: "body",
        options: ['body', 'Tissues', 'Organ', 'System']
    },

    {
        id: 5,
        question: 'Find the area of a square if one of it side is 18m',
        answer: "324m",
        options: ['125m', '324m', '242m', '198m']
    },

    {
        id: 6,
        question: '_________ is a system used for gaseous exchange?',
        answer: "Respiratory system",
        options: ['Reproductive system', 'Respiratory system', 'Digestive system', 'Excretory system']
    },

    {
        id: 7,
        question: "A polygon which has 7 sides is called?",
        answer: "Heptagon",
        options: ['Nonagon', 'Quadragon', 'Decagon', 'Heptagon']
    },

    {
        id: 8,
        question: "Which of these is not an organ for respiration?",
        answer: "Eyes",
        options: ["Nose", "Eyes", "Lungs", "Skin"]
    },

    {
        id: 9,
        question: "Calculate the perimeter of triangle with side a=4cm, b=5cm, c=6cm",
        answer: "15cm",
        options: ["25cm", "10cm", "15cm", "25cm"]
    },

    {
        id: 10,
        question: "Which verse of the bible says we shall not be ashamed of the gospel of christ, for it is a power unto salvation to them that believe?",
        answer: "Romans 1:16",
        options: ["Romans 1:18", "Romans 1:17", "Romans 1:16", "Romans 1:15"]
    },

    {
      id: 11,
      question: "a triangle ABC, has angle A=60* B=70* find C",
      answer: "50*",
      options: ["45*", "70*", "50*", "60*"]
  },

  {
    id: 12,
    question: "a rhombus ABCD, has angle A=60* B=70* c=90* find D",
    answer: "140*",
    options: ["140*", "360*", "90*", "150*"]
},

{
  id: 13,
  question: "White blood cell serves as _______ to the body system?",
  answer: "Immune system",
  options: ["Stong system", "Alliance", "Immune system", "Provider"]
},

{
  id: 14,
  question: "The epistle of Paul the Apostle to the Romans was addressed to the?",
  answer: "Church in Rome",
  options: ["King in Rome", "Unbelievers in Rome", "Church in Rome", "Jews in Rome"]
},

{
  id: 15,
  question: "Who proposed in his heart not to eat from the kings meal?",
  answer: "Daniel",
  options: ["Joshua", "Moses", "Abraham", "Daniel"]
},

{
  id: 16,
  question: "_______ is a triangle which has no angle and side equal?",
  answer: "Scelene",
  options: ["Acute", "Equilateral", "Scelene", "Isoceles"]
},

{
  id: 17,
  question: "Energy can neither be created nor destroy but can be transfer from one form to the other is called the law of __________",
  answer: "Thermodynamics",
  options: ["Power", "Thermodynamics", "Work", "Physics"]
},

{
  id: 18,
  question: "How many forms of energy do we have?",
  answer: "2",
  options: ["1", "2", "3", "4"]
},

{
  id: 19,
  question: "Find the area of a triangle if  the height is 7cm and the base is 6cm?",
  answer: "21cm",
  options: ["15cm", "26cm", "33cm", "21cm"]
},

{
  id: 20,
  question: "Calculate the power if the force is 15N with a distance of 16N for 30s",
  answer: "8W",
  options: ["10W", "13W", "8W", "11W"]
}

];


let question_count = 0;
let points = 0;

window.onload = function() {
  show(question_count);

};

function next() {

   
  
  if (question_count == questions.length - 1) {
    sessionStorage.setItem("time", time);
    clearInterval();
  }
  console.log(question_count);

  let user_answer = document.querySelector("li.option.active").innerHTML;
  
  if (user_answer == questions[question_count].answer) {
    points += 5;
    sessionStorage.setItem("points", points);
  }
  console.log(points);

  question_count++;
  show(question_count);
}

function show(count) {
  let question = document.getElementById("questions");
  let [first, second, third, fourth] = questions[count].options;

  question.innerHTML = `
  <h2>Q${count + 1}/${questions.length} ${questions[count].question}</h2>
   <ul class="option_group">
  <li class="option">${first}</li>
  <li class="option">${second}</li>
  <li class="option">${third}</li>
  <li class="option">${fourth}</li>
</ul> 
  `;
  toggleActive();
}

function toggleActive() {
  let option = document.querySelectorAll("li.option");
  for (let i = 0; i < option.length; i++) {
    option[i].onclick = function() {
      for (let i = 0; i < option.length; i++) {
        if (option[i].classList.contains("active")) {
          option[i].classList.remove("active");
        }
      }
      option[i].classList.add("active");
    };
  }
}


let guide = document.querySelector("#guide");
let proceed = document.querySelector("#proceed");
let quiz_body = document.querySelector(".quiz_body");
proceed.addEventListener("click", () => {
  guide.style.display = "none";
  quiz_body.style.display = "block";
});


function submit(){
  document.getElementById("submit");
  location.href = "end.html";  
}

function previous(){
  document.getElementById("previous");
  question_count--;
  show(question_count);
  
}