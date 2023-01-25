let startbtn = document.querySelector("#start");

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
    //unhide questions div
    //Show the first question


}

function oneSecFunction() {
    timeRemaining -- ;
    timeEl.textContent = timeRemaining;

}