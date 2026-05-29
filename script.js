```javascript
let accounts = JSON.parse(
localStorage.getItem("accounts")
) || [

{
username:"nguyenmav24",
password:"akrzen"
}

]

function saveAccounts(){

localStorage.setItem(
"accounts",
JSON.stringify(accounts)
)

}

function showLogin(){

document.getElementById("form-box")
.style.display="block"

document.getElementById("actionBtn")
.innerHTML="Đăng nhập"

document.getElementById("actionBtn")
.onclick=dangNhap

}

function showRegister(){

document.getElementById("form-box")
.style.display="block"

document.getElementById("actionBtn")
.innerHTML="Đăng ký"

document.getElementById("actionBtn")
.onclick=dangKy

}

function dangKy(){

let user =
document.getElementById("username")
.value

let pass =
document.getElementById("password")
.value

if(!user || !pass){

document.getElementById("error")
.innerHTML="Không được để trống"

return

}

for(let acc of accounts){

if(acc.username===user){

document.getElementById("error")
.innerHTML="Tài khoản đã tồn tại"

return

}

}

accounts.push({

username:user,
password:pass

})

saveAccounts()

document.getElementById("error")
.style.color="lightgreen"

document.getElementById("error")
.innerHTML="Đăng ký thành công"

}

function dangNhap(){

let user =
document.getElementById("username")
.value

let pass =
document.getElementById("password")
.value

for(let acc of accounts){

if(
acc.username===user &&
acc.password===pass
){

document.getElementById("login-box")
.style.display="none"

document.getElementById("web-content")
.style.display="block"

return

}

}

document.getElementById("error")
.innerHTML=
"Sai tài khoản hoặc mật khẩu"

}

function logout(){

location.reload()

}
```

