const input = document.querySelector("#input");
const message = document.querySelector("#monitor");
const result = document.querySelector("#result");
let attempts = 3;

let answer = ["emilka", "amalka", "fliacik", "sniezik", "ela"];
let random = Math.floor((Math.random() * answer.length));
let randomAnswer = answer[random];

input.addEventListener("keydown", monitor);
input.addEventListener("keydown", evaluate);

function monitor() {
  let key = document.querySelector("#input").value;
  message.textContent = `Takze si myslis ze to je ${key}?`;
}

function evaluate(input) {
  let key = document.querySelector("#input").value;

  if (input.key === "Enter") {
    if (key === randomAnswer) {
      result.textContent = "Spravne";
    }
    else if (key !== randomAnswer && attempts > 0) {
      result.textContent = `Nie, pocet pokusov: ${attempts}`;
      attempts--;
    }
    else if (key !== randomAnswer && attempts === 0) {
      result.textContent = "Bohuzel";
      alert("Super skrecka neutralizer aktivovany")
      document.querySelector("body").style.backgroundColor = "red"; 
    }
  }
}