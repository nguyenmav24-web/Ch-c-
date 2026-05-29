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

location.reload()

}


function openMarket(){

document.getElementById("home").style.display="none"
document.getElementById("market").style.display="block"
document.getElementById("upload").style.display="none"

}


function openUpload(){

document.getElementById("home").style.display="none"
document.getElementById("market").style.display="none"
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

if(!image){
alert("Chưa chọn ảnh")
return
}

let reader = new FileReader()

reader.onload = function(){

let div = document.createElement("div")

div.className="item"

div.innerHTML=`

<p>Người đăng: ${currentUser}</p>

<img src="${reader.result}">

<h3>${name}</h3>

<p>${desc}</p>

<button onclick="deleteItem(this)">Xóa</button>

`

document.getElementById("items").appendChild(div)

alert("Đăng món đồ thành công!")

}

reader.readAsDataURL(image)

}


function deleteItem(btn){

btn.parentElement.remove()

}

document.getElementById("web-content").style.display = "none";


    }
}
let accounts = JSON.parse(localStorage.getItem("accounts")) || [

    {
        username: "nguyenmav24",
        password: "akrzen"
    }

];

function saveAccounts(){

    localStorage.setItem("accounts", JSON.stringify(accounts));
}

       

function dangNhap(){

    let user = document.getElementById("username").value;
    let pass = document.getElementById("password").value;

    for(let acc of accounts){

        if(acc.username === user && acc.password === pass){

            document.getElementById("login-box").style.display = "none";

            document.getElementById("web-content").style.display = "block";

            return;
        }
    }

    document.getElementById("error").innerText = "Sai tài khoản hoặc mật khẩu!";
}
let mode = "";

function showLogin(){

    mode = "login";

    document.getElementById("form-box").style.display = "block";

    document.getElementById("actionBtn").innerText = "Đăng nhập";

    document.getElementById("actionBtn").onclick = dangNhap;
}

function showRegister(){

    mode = "register";

    document.getElementById("form-box").style.display = "block";

    document.getElementById("actionBtn").innerText = "Đăng ký";

    document.getElementById("actionBtn").onclick = dangKyForm;
}

function dangKyForm(){

    let newUser = document.getElementById("username").value;

    let newPass = document.getElementById("password").value;

    if(!newUser || !newPass){

        alert("Không được để trống!");
        return;
    }

    for(let acc of accounts){

        if(acc.username === newUser){

            alert("Tài khoản đã tồn tại!");
            return;
        }
    }

    accounts.push({

        username: newUser,
        password: newPass
    });

    saveAccounts();

    alert("Đăng ký thành công!");
}
