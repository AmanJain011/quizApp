const users = JSON.parse(localStorage.getItem("users")) || []
let loggedUser = JSON.parse(localStorage.getItem("loggedUser"))

document.addEventListener("DOMContentLoaded", ()=>{
    let loginForm = document.getElementById("login-form")
    loginForm.addEventListener("submit", loginAccount)
  })

const loginAccount = (e) => {
    e.preventDefault()
    let role = document.getElementById("login-role").value
    let mail = document.getElementById("login-mail").value
    let password = document.getElementById("login-password").value
    for(let i = 0; i < users.length; i++){
      let user = users[i]
      if(user.password === password && user.email === mail && user.role === role){
        localStorage.setItem("loggedUser", JSON.stringify(users[i]))
        loggedUser = JSON.parse(localStorage.getItem("loggedUser"))
        switch(loggedUser.role){
          case 'teacher':
            console.log("Please create Quiz")
            break
          case 'student':
            console.log("Please take Quiz")
            break
        }
        console.log(loggedUser)
        console.log(user.name + " Your welcome")
        return
      }
    }
  }
  