// Click event
const questionContainer = document.querySelector(".click-event");
//création d'une constance
// questionContainer.style.borderRadius = "150px";
const btn1 = document.querySelector("#btn-1"); //appel boutton 1
const btn2 = document.getElementById("btn-2"); // appel boutton 2
const response = document.querySelector("p"); // appel variable p

questionContainer.addEventListener("click", ()=> { //appel du click
    questionContainer.classList.add("question-clicked");
    // questionContainer.classList.toogle("question-clicked");
});

btn1.addEventListener("click", () => {
    response.classList.add('show-response')
    response.style.background = "green";
});

btn2.addEventListener("click", ()=>{
    response.classList.add('show-response')
    response.style.background = "red";

});
