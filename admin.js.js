const sidebarBTN = document.querySelector("#sidebar"); 
const nav = document.querySelector("#nav");
const crossEvent = document.querySelector("#crossEvent");
const createEvents = document.querySelector("#createEvents");
const events = document.querySelector("#events");
const submitEvent = document.querySelector("#submitEvent");

let c = 0;
sidebarBTN.addEventListener("click", function(){
    if(c === 0){
        nav.style.transform = "translateX(0)";
        sidebarBTN.innerHTML = "←";
        c = 1;
    } else {
        nav.style.transform = "translateX(-800px)"; 
        sidebarBTN.innerHTML = "→";
        c = 0;
    }
});

// Create an event and save it to localStorage
submitEvent.addEventListener("click", function() {
    let head = document.querySelector("#head");
    let body = document.querySelector("#body");

    const enteredHead = head.value;
    const enteredBody = body.value;

    // Store values in localStorage
    localStorage.setItem("heading", enteredHead);
    localStorage.setItem("body", enteredBody);

    // Clear input fields after saving
    head.value = "";
    body.value = "";
});

events.addEventListener("click", function(){
    createEvents.style.display = "flex";
});

crossEvent.addEventListener("click", function(){
    createEvents.style.display = "none";
});
