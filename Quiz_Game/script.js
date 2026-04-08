//Quiz Q/Ans Info
const quizInfo = [
    {
        question: "What does HTML stand for?",
        options: ["a) Hyper Text Markup Language",
                 "b) High Tech Modern Language",
                 "c) Hyper Tool Multi Language",
                 "d) Hyperlinks Text Machine Language"],
        correct: 0,
    },
    {
        question: "Which tag is used to create a hyperlink?",
        options: ["a) <link>",
                 "b) <a>",
                 "c) <href>",
                 "d) <url>"],
        correct: 1,
    },
    {
        question: "Which property is used to change text color?",
        options: ["a) font-style",
                 "b) text-color",
                 "c) color",
                 "d) text-style"],
        correct: 2,
    },
    {
        question: "Which symbol is used for an ID selector?",
        options: ["a) . (dot)",
                 "b) # (hash)",
                 "c) * (star)",
                 "d) & (ampersand)"],
        correct: 1,
    },
    {
        question: "Which keyword is used to declare a variable?",
        options: ["a) int",
                 "b) string",
                 "c) var",
                 "d) declare"],
        correct: 2,
    },
];

//Declaring variables and constants
const ques=document.getElementById("question");
const opt1=document.getElementById("opt1");
const opt2=document.getElementById("opt2");
const opt3=document.getElementById("opt3");
const opt4=document.getElementById("opt4");
let currentQ=0;

//To make the 1st Q appear default
window.onload=function(){
    qAppear();
};

//to navigate to the Qs on clicking button
function slide(){
    currentQ++;
     if (currentQ < quizInfo.length) {
   qAppear();
   } else {
    location.reload();
  }
}

//to chng the Qs and reset colour for every new Q
function qAppear(){
    const quiz=quizInfo[currentQ];
    ques.innerText=quiz.question;
    opt1.textContent=quiz.options[0];
    opt2.textContent=quiz.options[1];
    opt3.textContent=quiz.options[2];
    opt4.textContent=quiz.options[3];

    opt1.style.background="rgba(214, 77, 100, 0.298)";
    opt2.style.background="rgba(214, 77, 100, 0.298)";
    opt3.style.background="rgba(214, 77, 100, 0.298)";
    opt4.style.background="rgba(214, 77, 100, 0.298)";
}

//To check the correct Answer
function check(index){
    opt1.style.background="rgba(214, 77, 100, 0.298)";
    opt2.style.background="rgba(214, 77, 100, 0.298)";
    opt3.style.background="rgba(214, 77, 100, 0.298)";
    opt4.style.background="rgba(214, 77, 100, 0.298)";
    const quiz=quizInfo[currentQ];
    if(index===quiz.correct){
        document.getElementById("opt"+(index+1)).style.background="green";
    } else {
        document.getElementById("opt"+(index+1)).style.background="red";
    }
}