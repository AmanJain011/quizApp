
let loggedUser = JSON.parse(localStorage.getItem("loggedUser"))

if(loggedUser!=null){
  document.getElementById("heading").innerHTML = `${loggedUser.name} Your welcome`
}else{
  location.pathname = "/login.html"
}