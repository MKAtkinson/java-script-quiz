var Questions = [{
    id: 0,
    q: "What is a 'for' loop used for?",
    a: [{text: "Comparing two statements", isCorrect: false},
    {text: "checking what somthing is for", isCorrect: false},
    {text: "iterating through an array", isCorrect: true},
    {text: "one, two, three or for", isCorrect: false}
    ]
},
{   id: 1,
    q: "Which is NOT a common data type?",
    a: [{text: "boolean", isCorrect: false},
    {text: "strings", isCorrect: false},
    {text: "numbers", isCorrect: false},
    {text: "alerts", isCorrect: true}
    ]
},    
{   id: 2,
    q: "The condition in if/else statements are enclosed with?",
    a: [{text: "curly brackets", isCorrect: false},
    {text: "square brackets", isCorrect: false},
    {text: "parentheses", isCorrect: true},
    {text: "commas", isCorrect: false}
    ]
},
{   id: 3,
    q: "Arrays in Javascript can store which of these",
    a: [{text: "numbers and strings", isCorrect: false},
    {text: "other arryas", isCorrect: false},
    {text: "booleans", isCorrect: false},
    {text: "all of the above", isCorrect: true}
    ]
},
{   id: 4,
    q: "A useful tool for debugging during development and debugging for printing content to the debugger is:",
    a: [{text: "console.log", isCorrect: true},
    {text: "for loops", isCorrect: false},
    {text: "javascript", isCorrect: false},
    {text: "gitbash/terminal", isCorrect: false}
    ]
},

]
var start = true;

var timeLeft = 30;
    var elem = document.getElementById("timer");
    
    var timerId = setInterval(countdown, 1000);
    
    function countdown() {
      if (timeLeft == -1) {
        clearTimeout(timerId);
      } else {
        elem.innerHTML = timeLeft + ' seconds remaining';
        timeLeft--;
      }
    }
  
function iterate(id) {
  
    var result = document.getElementsByClassName("result");
    result[0].innerText = "";
  
    // Getting the question
    const question = document.getElementById("question");
  
  
    // Setting the question text
    question.innerText = Questions[id].q;
  
    // Getting the buttons
    const optionA = document.getElementById("option-a");
    const optionB = document.getElementById("option-b");
    const optionC = document.getElementById("option-c");
    const optionD = document.getElementById("option-d");
  
  
    // Providing button text 
    optionA.innerText = Questions[id].a[0].text;
    optionB.innerText = Questions[id].a[1].text;
    optionC.innerText = Questions[id].a[2].text;
    optionD.innerText = Questions[id].a[3].text;
  
    // Providing the true or false value to the buttons
    optionA.value = Questions[id].a[0].isCorrect;
    optionB.value = Questions[id].a[1].isCorrect;
    optionC.value = Questions[id].a[2].isCorrect;
    optionD.value = Questions[id].a[3].isCorrect;
  
    var selected = "";

    const evaluate = document.getElementsByClassName("evaluate");
  
    // Evaluate method
    evaluate[0].addEventListener("click",  () => {
        if (selected == "true") {
            result[0].innerHTML = "True";
            result[0].style.color = "green";
            
        } else {
            result[0].innerHTML = "False";
            result[0].style.color = "red";
            
        }
         id++;
         iterate(id);
    })
    evaluate[1].addEventListener("click",  () => {
        if (selected == "true") {
            result[0].innerHTML = "True";
            result[0].style.color = "green";
            
        } else {
            result[0].innerHTML = "False";
            result[0].style.color = "red";
            
        }
         id++;
         iterate(id);
    })
    evaluate[2].addEventListener("click",  () => {
        if (selected == "true") {
            result[0].innerHTML = "True";
            result[0].style.color = "green";
            
        } else {
            result[0].innerHTML = "False";
            result[0].style.color = "red";
            
        }
         id++;
         iterate(id);
    })
    evaluate[3].addEventListener("click",  () => {
        if (selected == "true") {
            result[0].innerHTML = "True";
            result[0].style.color = "green";
            
        } else {
            result[0].innerHTML = "False";
            result[0].style.color = "red";
            
        }
         id++;
         iterate(id);
    })
}
  
if (start) {
    iterate("0");
}
  
// Next button and method
// const next = document.getElementsByClassName('next')[0];
// var id = 0;
  
// next.addEventListener("click", () => {
//     start = false;
//     if (id < 2) {
//         id++;
//         iterate(id);
//         console.log(id);
//     }
  
// })