
let loggedUser = JSON.parse(localStorage.getItem("loggedUser"))
let users = JSON.parse(localStorage.getItem("users"))

for(let i = 0; i < users.length; i++){
  let quizzes = users[i].quizzes
  let items = ""
  for(let j = 0; j < quizzes.length; j++){
    items += `<li>${quizzes[j].title}</li>`
  }
  document.getElementById("quiz-list").innerHTML = `<ol>${items}</ol>`
}


if(loggedUser!=null){
  document.getElementById("heading").innerHTML = `${loggedUser.name} Your welcome`
}else{
  location.pathname = "/login.html"
}

if(loggedUser.role === "teacher"){
  document.getElementById("button").innerHTML = "<input type='button' value='Create Quiz' id='admin-page-button'/>"
}

document.addEventListener("DOMContentLoaded", ()=>{
  let logoutButton = document.getElementById("logout-button")
  logoutButton.addEventListener("click", logoutAccount)

  let adminPageButton = document.getElementById("admin-page-button")
  adminPageButton.addEventListener("click", goToAdminPage)
})

const logoutAccount =()=> {
  localStorage.removeItem("loggedUser")
  location.pathname = "/login.html"
}

const goToAdminPage = () => {
  location.pathname = "/admin.html"
}