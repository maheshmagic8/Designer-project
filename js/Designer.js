const hamgurgur  = document.querySelector(".hamgurgur");
const hidden_manu = document.querySelector(".hide-manu");
const login = document.querySelector(".login");
const for_login = document.querySelector(".for_login");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const submit_btn = document.querySelector(".submit-btn");
const form_m = document.querySelector("#form_m");


hamgurgur.addEventListener("click", ()=>{
    hidden_manu.classList.toggle("revil");
    hamgurgur.classList.toggle("active");
})

login.addEventListener("click", ()=>{
    for_login.classList.toggle("log_unlock");
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


