let currentUser = ""

let admin = "admin"
let adminPass = "admin123"

let currentUser = ""

function login(){

let user = prompt("Nhập tên")
let pass = prompt("Nhập mật khẩu")

currentUser = user

document.getElementById("loginBtn").style.display="none"
document.getElementById("logoutBtn").style.display="inline"

document.getElementById("user").innerHTML =
"Xin chào: " + currentUser

}


function logout(){

currentUser=""

document.getElementById("loginBtn").style.display="inline"
document.getElementById("logoutBtn").style.display="none"

document.getElementById("user").innerHTML=""

}
