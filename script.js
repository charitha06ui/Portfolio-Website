// ==============================
// Typing Animation
// ==============================

const typing = document.querySelector(".typing");

const words = [
    "Computer Science Student",
    "Web Developer",
    "Python Developer",
    "Cloud Enthusiast"
];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect(){

    const currentWord = words[wordIndex];

    if(!isDeleting){
        typing.textContent = currentWord.substring(0, charIndex++);
    }else{
        typing.textContent = currentWord.substring(0, charIndex--);
    }

    let speed = isDeleting ? 60 : 120;

    if(!isDeleting && charIndex === currentWord.length + 1){
        isDeleting = true;
        speed = 1500;
    }

    if(isDeleting && charIndex === 0){
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
    }

    setTimeout(typeEffect, speed);
}

typeEffect();


// ==============================
// Active Navbar
// ==============================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", ()=>{

    let current = "";

    sections.forEach(section=>{

        const sectionTop = section.offsetTop - 120;

        if(pageYOffset >= sectionTop){
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href") === "#" + current){
            link.classList.add("active");
        }

    });

});


// ==============================
// Reveal Animation
// ==============================

const reveals = document.querySelectorAll(
".about,.skill-card,.education-card,.project-card,.certificate-card,.contact");

window.addEventListener("scroll",()=>{

    reveals.forEach(item=>{

        const windowHeight = window.innerHeight;

        const revealTop = item.getBoundingClientRect().top;

        if(revealTop < windowHeight - 100){

            item.classList.add("show");

        }

    });

});