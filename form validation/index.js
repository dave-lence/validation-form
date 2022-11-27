const form = document.getElementById("formdata")

let id = (id) => document.getElementById(id)
let classes = (classes) => document.getElementsByClassName(classes)

let userName = id("username")
let email = id("email")
let pwd = id("pwd")
let errorMsg = classes("error-msg") 
let successIcom = classes("success-icon")
let failureIcon = classes("failure-icon")


form.addEventListener("submit", function(e){
    e.preventDefault()

    verify(userName, 0, "Username can't be empty!");
    verify(email, 1, "Email address can't be empty");
    verify(pwd, 2, "Enter a valid password");

})
       

let verify = (id, serial, message) => {
    if(id.value.trim() === ""){
        errorMsg[serial].innerHTML = message;
        id.style.border = "2px solid red"
        successIcom[serial].style.opacity = "0"
        failureIcon[serial].style.opacity = "1"
    }
     else{
        errorMsg[serial].innerHTML = "";
        id.style.border = "2px solid green"
        successIcom[serial].style.opacity = "1"
        failureIcon[serial].style.opacity = "0"
    }

    
}