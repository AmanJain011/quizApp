import { Student } from "./Student.js"
import { Teacher } from "./Teacher.js"

document.addEventListener("DOMContentLoaded", ()=>{
    let signupForm = document.getElementById("signup-form")
    signupForm.addEventListener("submit", createAccount)
  })

const createAccount = (e) =>{
    e.preventDefault()
    const users = JSON.parse(localStorage.getItem("users")) || []
    let userName = document.getElementById("user-name").value
    let userRole = document.getElementById("user-role").value
    let userMail = document.getElementById("user-mail").value
    let userConfirmPassword = document.getElementById("user-confirm-password").value
    let userPassword = document.getElementById("user-password").value
    let user = null
    if(userPassword === userConfirmPassword){
      switch(userRole){
        case "teacher":
          user = new Teacher(userName, userMail, userPassword)
          break
        case "student":
          user = new Student(userName, userMail, userPassword)
          break
        default:
          document.getElementById("error").innerHTML = 'User Role is required'
          return
      }
      users.push(user)
      let jsonString = JSON.stringify(users)
      localStorage.setItem("users", jsonString)
    //   console.log(JSON.parse(localStorage.getItem("users")))
      location.pathname = "/login.html"
    }
    else{
        document.getElementById("error").innerHTML = 'Password does not match'
    }
  }