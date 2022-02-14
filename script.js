const container = document.getElementsByClassName("container");
// const signUp = document.getElementsByClassName("signup-text");
// const signIn = document.getElementsByClassName("signin-text");
// const forgotPassword = document.getElementsByClassName("forgot-text");
let signUpBox = document.getElementsByClassName("signup-box");
let signInBox = document.getElementsByClassName("signin-box");
let forgotPasswordBox = document.getElementsByClassName("forgotpassword-box");
let changePasswordBox = document.getElementsByClassName("passwordchange-box");
// signIn.addEventListener("fo")
// console.log(signIn);
    signInBox[0].style.display= "block"
    signUpBox[0].style.display="none"
    forgotPasswordBox[0].style.display="none"
    changePasswordBox[0].style.display="none"

function signup(){
    signInBox[0].style.display= "none"
    signUpBox[0].style="display:block;"
    forgotPasswordBox[0].style="display:none;"
    changePasswordBox[0].style="display:none"
}
function signIn(){
    signInBox[0].style= "display:block;"
    signUpBox[0].style="display:none;"
    forgotPasswordBox[0].style="display:none;"
    changePasswordBox[0].style="display:none;"
}
function forgotPassword() {
    signInBox[0].style= "display:none;"
    signUpBox[0].style="display:none;"
    forgotPasswordBox[0].style="display:block;"
    changePasswordBox[0].style="display:none;"
}
function signInClick() {
    window.open("comment.html")
}
function signUpClick() {
    signInBox[0].style= "display:block;"
    signUpBox[0].style="display:none;"
    forgotPasswordBox[0].style="display:none;"
}
function forgotClick(){
    signInBox[0].style= "display:none;"
    signUpBox[0].style="display:none;"
    forgotPasswordBox[0].style="display:none;"
    changePasswordBox[0].style="display:block;"
}