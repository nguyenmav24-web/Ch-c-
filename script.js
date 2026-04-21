let currentUser = ""

function login(){

let user = document.getElementById("username").value
let pass = document.getElementById("password").value

if(pass == "12345"){

currentUser = user

document.getElementById("login").style.display = "none"
document.getElementById("main").style.display = "block"

}else{

alert("Sai mã mời")

}

}


function upload(){

let name = document.getElementById("name").value
let desc = document.getElementById("desc").value
let image = document.getElementById("image").files[0]

if(!image){
alert("Chưa chọn ảnh")
return
}

let reader = new FileReader()

reader.onload = function(){

let div = document.createElement("div")
div.className = "item"

div.innerHTML = `

<p>Người đăng: ${currentUser}</p>

<img src="${reader.result}">

<h3>${name}</h3>

<p>${desc}</p>

<button onclick="trade(this)">Yêu cầu đổi</button>

<button onclick="deleteItem(this)">Xóa</button>

<div class="tradeBox"></div>

`

document.getElementById("items").appendChild(div)

}

reader.readAsDataURL(image)

}


function trade(btn){

let item = prompt("Tên món đồ muốn đổi")

let img = prompt("Link ảnh món đồ")

if(!item){
return
}

let box = btn.parentElement.querySelector(".tradeBox")

let div = document.createElement("div")

div.innerHTML = `

<hr>

<p>${currentUser} muốn đổi:</p>

<p>${item}</p>

<img src="${img}" width="150">

<br>

<button onclick="accept(this)">Chấp nhận</button>

<button onclick="reject(this)">Không chấp nhận</button>

<button onclick="more(this)">Muốn thêm</button>

`

box.appendChild(div)

}


function accept(btn){

alert("Đã chấp nhận đổi")

}


function reject(btn){

alert("Đã từ chối")

}


function more(btn){

alert("Người đăng muốn thêm đồ")

}


function deleteItem(btn){

let confirmDelete = confirm("Xóa món đồ?")

if(confirmDelete){
btn.parentElement.remove()
}

}
