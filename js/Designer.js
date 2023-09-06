const hamgurgur  = document.querySelector(".hamgurgur");
const hidden_manu_list = document.querySelector(".hidden_manu_list");


hamgurgur.addEventListener("click",()=>{
    hamgurgur.classList.toggle("active");
    hidden_manu_list.classList.toggle("active_hidden_manu_list")
})

