let startbtn = document.querySelector("#start");
let startScreen = document.getElementById("start-screen");
let questionsDiv = document.getElementById("questions");
let viewhighscore = document.getElementsByTagName("a");
let questionTitle = document.getElementById("question-title");
let choicesEl = document.getElementById("choices");

startbtn.addEventListener("click", beginQuiz);

let timeRemaining = 160;
let timeEl = document.getElementById("time");
let timerId;
let index = 0;
let currentQuestion;
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
    console.log("ShowQuestion");
    currentQuestion = questions[index];
    questionTitle.textContent = currentQuestion.question;
    choicesEl.innerHTML = "";
    currentQuestion.choices.forEach(function(choice,i){
        let btn = document.createElement("button");
        btn.setAttribute("class", "choice");
        btn.setAttribute("value", choice);

        btn.textContent = i+1+". " + choice;
        btn.onclick = handleAnswerChoice;

        choicesEl.appendChild(btn);
    });
}

function handleAnswerChoice(e){
    //if user select wrong answer reduce timer by 15
    // inform user its wrong asnwer
    //else inform user right answer
    //increament index
    console.log("Handle Answer Choice");
    let btn = e.target;
    if (!btn.matches(".choice")) {
    return;
    }
    console.log("Button.value = " , btn.value);
    console.log("Correct Asnwer = " , currentQuestion.correctAnswer);
    if (btn.value !== currentQuestion.correctAnswer) {
        timeRemaining -= 15;
        if (timeRemaining < 0) {
            timeRemaining = 0;
        }
        timeEl.textContent = timeRemaining;
        alert("Wrong answer Press Ok to continue");
    } else {
        alert("Correct answer Press Ok to continue");
    } 
    index++;
    if (timeRemaining <= 0 || index === questions.length) {
        endQuiz();
    } else {
        showQuestion();
    }
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
        clearInterval(timerId); 
        let endScreen = document.getElementById("end-screen");
        endScreen.removeAttribute("class");

        let finalScore = document.getElementById("final-score");
        finalScore.textContent = timeRemaining;
        questionsDiv.setAttribute("class", "hide");
    }

    // \\\