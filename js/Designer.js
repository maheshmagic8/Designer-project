const hamgurgur  = document.querySelector(".hamgurgur");
const hidden_manu = document.querySelector(".hide-manu");
const login = document.querySelector(".login");
const for_login = document.querySelector(".for_login");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const submit_btn = document.querySelector(".submit-btn");
const form_m = document.querySelector("#form_m");
const for_login_Xicon = document.querySelector("#for_login_Xicon")
const for_signup_Xicon = document.querySelector("#for_signup_Xicon")
const for_signup = document.querySelector(".for_signup");
const signup = document.querySelector(".signup");

hamgurgur.addEventListener("click", ()=>{
    hidden_manu.classList.toggle("revil");
    hamgurgur.classList.toggle("active");
})

login.addEventListener("click", ()=>{
    for_login.style.transform = "scale(1)";
})

for_login_Xicon.addEventListener("click", ()=>{
    for_login.style.transform = "scale(0)";
})

for_signup_Xicon.addEventListener("click", ()=>{
    for_signup.style.transform = "scale(0)";
})

signup.addEventListener("click", ()=>{
    for_signup.style.transform = "scale(1)";
})


submit_btn.addEventListener("click" , (e)=>{
    e.preventDefault();
 

    swal({
        title: "Logind!",
        text: "You will be updated soon!",
        icon: "success",
        button: "OK!",
    });
})


