let startbtn = document.querySelector("#start");
let startScreen = document.getElementById("start-screen");
let questionsDiv = document.getElementById("questions");
let viewhighscore = document.getElementsByTagName("a");

startbtn.addEventListener("click", beginQuiz);

let timeRemaining = 160;
let timeEl = document.getElementById("time");
let timerId;

function beginQuiz() {
   
     // start timer
    timerId = setInterval(oneSecFunction, 1000);
    timeEl.textContent = timeRemaining;
    //hide start div / start page
    startScreen.setAttribute("class", "hide");
    //unhide questions div
    questionsDiv.removeAttribute("class");
    // Call a function to Show the first question
    showQuestion();
}

function showQuestion(){
    //to be compelted
}

function oneSecFunction() {
    timeRemaining -- ;
    timeEl.textContent = timeRemaining;
    if (timeRemaining <= 0) {
        endQuiz();
    }
    }
    function endQuiz() {
        //to be completed
    }