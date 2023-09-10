const hamgurgur  = document.querySelector(".hamgurgur");
const hidden_manu = document.querySelector(".hide-manu");
const login = document.querySelector(".login");
const for_login = document.querySelector(".for_login");
const for_login_input = document.querySelector(".for_login_input");


hamgurgur.addEventListener("click", ()=>{
    hidden_manu.classList.toggle("revil");
    hamgurgur.classList.toggle("active");
})

login.addEventListener("click", ()=>{
    for_login.classList.toggle("log_unlock");
})


let cap = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let small = "abcdefghijklmnopqrstuvwxyz";
let spacial = "`!@#$%^&*()_+{}:|>?<";



function Submit(){
    if(for_login_input.innerHTML === cap,small,spacial){
        alert("Please Enter The Username")
    }else{
        
    }

    
}

