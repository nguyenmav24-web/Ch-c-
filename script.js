let currentUser = ""

let admin = "admin"
let adminPass = "admin123"

function login(){

let user = prompt("Nhập tên")
let pass = prompt("Nhập mật khẩu")

if(user == admin && pass == adminPass){

currentUser = "Admin"

}else{

currentUser = user

}

document.getElementById("user").innerHTML =
"Đang đăng nhập: " + currentUser

}


function logout(){

currentUser = ""

document.getElementById("user").innerHTML =
"Chưa đăng nhập"

alert("Đã đăng xuất")

}
