let currentUser = ""

let admin = "admin"
let adminPass = "admin123"

function login(){

let user = prompt("Nhập tên")
let pass = prompt("Nhập mật khẩu")

if(user == admin && pass == adminPass){

currentUser = "Admin"
alert("Đăng nhập Admin thành công")

}else{

currentUser = user
alert("Đăng nhập thành công")

}

}


function openMarket(){

document.getElementById("home").style.display="none"
document.getElementById("market").style.display="block"

}

function openUpload(){

document.getElementById("home").style.display="none"
document.getElementById("upload").style.display="block"

}

function back(){

document.getElementById("home").style.display="block"
document.getElementById("market").style.display="none"
document.getElementById("upload").style.display="none"

}


function upload(){

let name = document.getElementById("name").value
let desc = document.getElementById("desc").value
let image = document.getElementById("image").files[0]

let reader = new FileReader()

reader.onload = function(){

let div = document.createElement("div")

div.className="item"

div.innerHTML=`

<p>Người đăng: ${currentUser}</p>

<img src="${reader.result}">

<h3>${name}</h3>

<p>${desc}</p>

<button onclick="trade(this)">Đổi</button>

<button onclick="deleteItem(this)">Xóa</button>

`

document.getElementById("items").appendChild(div)

}

reader.readAsDataURL(image)

}


function trade(btn){

let item = prompt("Tên món đồ muốn đổi")

let div = document.createElement("div")

div.innerHTML=`

<p>Yêu cầu đổi: ${item}</p>

<button>Chấp nhận</button>
<button>Không chấp nhận</button>
<button>Muốn thêm</button>

`

btn.parentElement.appendChild(div)

}


function deleteItem(btn){

btn.parentElement.remove()

}
