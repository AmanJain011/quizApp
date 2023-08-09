document.addEventListener("DOMContentLoaded", ()=>{
    let loginForm = document.getElementById("login-form")
    loginForm.addEventListener("submit", loginAccount)
  })

const loginAccount = (e) => {
    e.preventDefault()
    const users = JSON.parse(localStorage.getItem("users")) || []
    let role = document.getElementById("login-role").value
    let mail = document.getElementById("login-mail").value
    let password = document.getElementById("login-password").value
    for(let i = 0; i < users.length; i++){
      let user = users[i]
      if(user.password === password && user.email === mail && user.role === role){
        localStorage.setItem("loggedUser", JSON.stringify(users[i]))
        location.pathname = "/"
        return
      }
    }
    document.getElementById("error").innerHTML = "Wrong user credentials"
  }
  