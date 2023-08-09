import { Question } from "./Question.js"
import { Quiz } from "./Quiz.js"

let loggedUser = JSON.parse(localStorage.getItem("loggedUser"))

if(loggedUser!=null){
  document.getElementById("heading").innerHTML = `${loggedUser.name} Your welcome`
  if(loggedUser.role != 'teacher'){
    location.pathname = "/"
  }
}else{
  location.pathname = "/login.html"
}


let questions = []

document.addEventListener("DOMContentLoaded", ()=>{
    let createQuestionButton = document.getElementById('createQuestionButton')
    createQuestionButton.addEventListener('click', createQuestion)

    let createQuizButton = document.getElementById("createQuizButton")
    createQuizButton.addEventListener("click", createQuiz)
})

const createQuestion = (e) =>{
    e.preventDefault();

    let questionText = document.getElementById("question").value;
    let answer1 = document.getElementById("answer1").value;
    let answer2 = document.getElementById("answer2").value;
    let answer3 = document.getElementById("answer3").value;
    let answer4 = document.getElementById("answer4").value;
    let correctAnswer = document.getElementById("correctAnswer").value;
    
    let question = null;

    question = new Question(questionText, answer1, answer2, answer3, answer4, correctAnswer);
    questions.push(question);
    console.log(questions);
}


const createQuiz = (e) =>{
    e.preventDefault();
    let title = document.getElementById("quizName").value;
    let time = document.getElementById("time").value;
    let quiz = null;
    quiz = new Quiz(title, time, questions)
    questions = [];
    const users = JSON.parse(localStorage.getItem("users"))
    for(let i = 0; i < users.length; i++){
        if(loggedUser.id === users[i].id){
            users[i].quizzes.push(quiz)
            loggedUser.quizzes.push(quiz)
            localStorage.setItem("loggedUser", JSON.stringify(loggedUser))
            localStorage.setItem("users", JSON.stringify(users))
            return
        }
    }
}
