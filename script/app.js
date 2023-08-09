
let loggedUser = JSON.parse(localStorage.getItem("loggedUser"))

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