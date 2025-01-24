// Typing Script JS
var typed = new Typed(".typing",{
    strings: ["Web Designer", "Web Developer" , "Web Application Developer" , "Content Creator",  "Programmer","Problem Solver","Web Application Developer"],
    typeSpeed: 80,
    backSpeed: 80,

});

var typed = new Typed(".typing-2",{
    strings: ["Web Designer", "Web Developer" , "Web Application Developer" ,"Content Creator",  "Programmer", "Soblem Solver" ,"Web Application Developer" ],
    typeSpeed: 100,
    backSpeed: 60,
    
});

// Show/Hide FAQs answer
const faqs = document.querySelectorAll('.faq');
faqs.forEach(faq => {
    faq.addEventListener('click', () => {
        faq.classList.toggle('open');

        //change icon
        const icon = faq.querySelector('.faq_icon i');
        if (icon.className === 'fa-solid fa-plus'){
            icon.className = 'fa-solid fa-minus';
        }
        else{
            icon.className = 'fa-solid fa-plus';
        }

    })
})

//Show/hide nav menu
const menu = document.querySelector('.nav_menu');
const menuBtn = document.querySelector('#open-menu-btn');
const closeBtn = document.querySelector('#close-menu-btn');

menuBtn.addEventListener('click', () => {
    menu.style.display = "flex";
    closeBtn.style.display = "inline-block";
    menuBtn.style.display = "none";
})

//close nav menu
const closeNav = () => {
    menu.style.display = "none";
    closeBtn.style.display = "none";
    menuBtn.style.display = "inline-block";
}
closeBtn.addEventListener('click', closeNav);

//nav color change on scroll
window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle('window-scroll', window.scrollY>100);
})


function updateClock() {
    const now = new Date();
    const options = { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false };
    document.getElementById('clock').textContent = now.toLocaleTimeString( options);
}

// Update clock every second
setInterval(updateClock, 1000);
// First update when the page loads
updateClock();
