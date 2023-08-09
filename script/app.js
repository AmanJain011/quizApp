
let loggedUser = JSON.parse(localStorage.getItem("loggedUser"))

if(loggedUser!=null){
  document.getElementById("heading").innerHTML = `${loggedUser.name} Your welcome`
}else{
  location.pathname = "/login.html"
}

document.addEventListener("DOMContentLoaded", ()=>{
  let logoutButton = document.getElementById("logout-button")
  logoutButton.addEventListener("click", logoutAccount)
})

const logoutAccount =()=> {
  localStorage.removeItem("loggedUser")
  location.pathname = "/login.html"
}
