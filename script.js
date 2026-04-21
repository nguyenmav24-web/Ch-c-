let currentUser = ""

let admin = "admin"
let adminPass = "admin123"

function login(){

let user = prompt("Nhập tên")
let pass = prompt("Nhập mật khẩu")

currentUser = user

document.getElementById("login").style.display="none"
document.getElementById("main").style.display="block"

document.getElementById("user").innerHTML =
"Đang đăng nhập: " + currentUser

}


function logout(){

currentUser=""

document.getElementById("login").style.display="block"
document.getElementById("main").style.display="none"

}
