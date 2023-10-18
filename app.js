document.addEventListener("DOMContentLoaded", function() {
    // Your code here
    


const quizData = [{
    question: "Which of the following is a client site language?",
    a: "Java",
    b: "C",
    c: "Python",
    d: "JavaScript",
    correct: "d",
},
{
    question: "What does HTML stand for?",
    a: "Hypertext Markup Language",
    b: "Cascading Style Sheet",
    c: "Jason Object Notation",
    d: "Helicopters Terminals Motorboats Lamborginis",
    correct: "a",
},
{
    question: "What year was JavaScript launched?",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "none of the above",
    correct: "b",
},
{
    question: "What does CSS stands for?",
    a: "Hypertext Markup Language",
    b: "Cascading Style Sheet",
    c: "Jason Object Notation",
    d: "Helicopters Terminals Motorboats Lamborginis",
    correct: "b",
}
];
let index = 0;
let correct = 0,
incorrect = 0,
total = quizData.length;
let questionBox = document.getElementById("questionBox");
let allInputs = document.querySelectorAll("input[type='radio']")
const loadQuestion = () => {
if (total === index) {
    return quizEnd()
}
reset()
const data = quizData[index]
questionBox.innerHTML = ` question ${index + 1} (${data.question}`
allInputs[0].nextElementSibling.innerText = data.a
allInputs[1].nextElementSibling.innerText = data.b
allInputs[2].nextElementSibling.innerText = data.c
allInputs[3].nextElementSibling.innerText = data.d
}

// document.querySelector("#submit").addEventListener(
// "click",
// function() {
//     const data = quizData[index]
//     const ans = getAnswer()
//     if (ans === data.correct) {
//         correct++;
//     } else {
//         incorrect++;
//     }
//     index++;
//     loadQuestion()
// }
// )
document.getElementById('submit').addEventListener(
    "click",
    function(event) {
      event.preventDefault(); // Prevent form submission (if applicable)
      
      // Ensure quizData, index, and getAnswer() are defined and in scope.
      if (index < quizData.length) {
        const data = quizData[index];
        const ans = getAnswer(); // Define this function to get the user's answer.
        if (ans === data.correct) {
          correct++;
        } else {
            quizEnd();
        }
        index++; // Move to the next question
        loadQuestion(); // Load the next question
      } 
    }
);

  
  
// const getAnswer = () => {
// let ans;
// allInputs.forEach(
//     (inputEl) => {
//         if (inputEl.checked) {
//             ans = inputEl.value;
//         }
//     }
// )
// return ans;
// }

// Define the getAnswer function to get the user's selected answer
const getAnswer = () => {
    let ans;
    allInputs.forEach((inputEl) => {
      if (inputEl.checked) {
        ans = inputEl.value;
      }
    });
    return ans;
  }

const reset = () => {
allInputs.forEach(
    (inputEl) => {
        inputEl.checked = false;
    }
)
}

const quizEnd = () => {
// console.log(document.getElementsByClassName("container"));
document.getElementsByClassName("container")[0].innerHTML = `
    <div class="col">
        <h3 class="w-100"> Hii, you've scored ${correct} / ${total} </h3>
    </div>
`
}
loadQuestion(index);
});