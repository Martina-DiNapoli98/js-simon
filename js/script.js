
let numbersListEl = document.getElementById("numbers-list")
let numbers = []
 let answerEl = document.getElementById("answers-form")
function randomRange(myMin, myMax) {
    return Math.floor(Math.random() * (myMax - myMin + 1) + myMin);
  }
  
for(let i = 0; i < 5; i++){
    numbers.push(randomRange(1, 50))
    
}
console.log(numbers);

numbersListEl.insertAdjacentHTML("afterbegin", `<li>${numbers}</li>` )
  
 let seconds = 30;
let countdownEl = document.getElementById("countdown")

 const intervalID = setInterval(function(){
    seconds --
    countdownEl.innerText = seconds;
    
    if(seconds === 0){
        clearInterval(intervalID);
        numbersListEl.classList.add("d-none")
        answerEl.classList.remove("d-none")
    }
 }, 500)