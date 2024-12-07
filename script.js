// Registration section
const username = document.querySelector("#username");
const userpass = document.querySelector("#userpass");
const btn = document.querySelector("#btn");
const reg = document.querySelector("#reg");
const register = document.querySelector(".register");
const logg = document.querySelector(".logg");
const msgbox = document.querySelector(".msgbox");
const msg = document.querySelector("#msg");

msg.addEventListener("click",function(){
    register.style.display = 'none';
    logg.style.display = "flex";
    msgbox.style.display = 'none'
})

reg.addEventListener("click",function(){
    register.style.display = "flex";
    logg.style.display = "none";
    reg.style.display = "none"
})


btn.addEventListener("click", function() {
    const user = username.value.trim();
    const pass = userpass.value.trim();

    if (user === "" || pass === "") {
        alert("please register first");
        return; 
    }

    localStorage.setItem(`user${user}`, pass);
    username.value = "";  
    userpass.value = ""; 
    msgbox.style.display = "flex"
});

// Login section
const log = document.querySelector("#log");
const logname = document.querySelector("#logname");
const logpass = document.querySelector("#logpass");

log.addEventListener("click", function() {
    const passwords = localStorage.getItem(`user${logname.value.trim()}`); 
    if (logpass.value.trim() === passwords) {  
        alert("login successful");
        logname.value = "";  
        logpass.value = ""; 
        window.location.href = "class.html"
    } else {
        alert("incorrect password OR username");
        logname.value = "";  
        logpass.value = ""; 
    }
});
