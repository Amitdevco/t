const adminBtn = document.querySelector("#adminBtn");
const ad = document.querySelector(".ad");
const addd = document.querySelector(".addd");
const ev = document.querySelector(".ev");
const eventBtn = document.querySelector("#eventBtn");
const evclose = document.querySelector("#evclose");

eventBtn.addEventListener("click",function(){
    ev.style.display = "flex";
});

evclose.addEventListener("click",function(){
    ev.style.display = "none";
});

// Admin login functionality
adminBtn.addEventListener("click", function () {
    ad.style.display = "flex";
    addd.style.display = "flex";
});

ad.addEventListener("click", function () {
    ad.style.display = "none";
    addd.style.display = "none";
});

const userADMIN = document.querySelector("#userADMIN");
const passADMIN = document.querySelector("#passADMIN");
const btnADMIN = document.querySelector("#btnADMIN");

btnADMIN.addEventListener("click", function () {
    const user = userADMIN.value.trim();
    const pass = passADMIN.value.trim();

    if (user === "Amit" && pass === "tima") {
        window.location.href = "Admin.html"; 
    } else {
        const ad = document.querySelector(".ad");
        ad.style.display = "none";
        alert("Login failed");
    }
});

// Noticing: Display saved event data from localStorage
const evhead = document.querySelector("#evhead");
const evpara = document.querySelector("#evpara");

document.addEventListener("DOMContentLoaded", function() {
    const storedHeading = localStorage.getItem("heading");
    const storedBody = localStorage.getItem("body");

    if (storedHeading && storedBody) {
        evhead.textContent = storedHeading; 
        evpara.textContent = storedBody;   
    }
});
