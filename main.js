const home=document.querySelector("#home");
const programs=document.querySelector("#programs");
const socials=document.querySelectorAll("#socials img");
const schedules=document.querySelectorAll(".schedule");
const explores=document.querySelectorAll(".explore");
const slides = document.querySelectorAll(".slide");
const leftBtn = document.querySelector(".left");
const rightBtn = document.querySelector(".right");
const leftB = document.getElementById("left-slide");
const rightB = document.getElementById("right-slide");
const pages = document.querySelectorAll(".page");
let current = 0;
let currentPage = 0;

//navigation btns
home.addEventListener("click", () =>{
    window.location.href="home.html";
});
programs.addEventListener("click", () =>{
    window.location.href="programs.html";
});

//socials
socials.forEach(item => {
    item.addEventListener("click", () =>{
        switch(item.id){
            case "fb":
                window.open("https://www.facebook.com/IQOnlineAcademyMK/");
                break;
            case "ig":
                window.open("https://www.instagram.com/iqonlineacademy/?hl=en");
                break;
            case "in":
                window.open("https://mk.linkedin.com/company/iq-online-academy");
                break;
        }
    });
});

//buttons
schedules.forEach(btn =>{
    btn.addEventListener("click", () =>{
        window.open("https://calendly.com/info-iq-online-academy/15min?month=2025-10");
    });
});
explores.forEach(btn =>{
    btn.addEventListener("click", () =>{
         window.location.href="programs.html";
    });
});

//testimonials
slides[current].classList.add("active");
function showSlide(index){
    slides.forEach(slide=>slide.classList.remove("active"));
    slides[index].classList.add("active");
}

rightBtn.addEventListener("click", () => {
    current = (current+1) % slides.length;
    showSlide(current);
});

leftBtn.addEventListener("click", () => {
    current = (current - 1 + slides.length) % slides.length;
    showSlide(current);
});

//programs
pages[currentPage].classList.add("visible");

function showPage(index) {
    pages.forEach(page => page.classList.remove("visible"));
    pages[index].classList.add("visible");
    currentPage = index;
}

rightB.addEventListener("click", () => {
    const nextPage = (currentPage + 1) % pages.length;
    showPage(nextPage);
});

leftB.addEventListener("click", () => {
    const prevPage = (currentPage - 1 + pages.length) % pages.length;
    showPage(prevPage);
});