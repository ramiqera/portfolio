/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*===== REMOVE MENU MOBILE =====*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*===== SCROLL SECTIONS ACTIVE LINK =====*/
const sections = document.querySelectorAll('section[id]')

window.addEventListener('scroll', scrollActive)

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active')
        }
    })
}

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 600,  // Reduced from 1000ms to 600ms
    reset: true
})

/* SCROLL HOME */
sr.reveal('.home__title', { duration: 500, delay: 0 })  // Reduced duration
sr.reveal('.home__scroll', { duration: 500, delay: 100 })  // Reduced duration
sr.reveal('.home__img', { origin: 'right', duration: 500, delay: 200 })  // Reduced duration

/* SCROLL ABOUT */
sr.reveal('.about__img', { duration: 500, delay: 300 })  // Reduced duration
sr.reveal('.about__subtitle', { duration: 500, delay: 200 })  // Reduced duration
sr.reveal('.about__profession', { duration: 500, delay: 300 })  // Reduced duration
sr.reveal('.about__text', { duration: 500, delay: 400 })  // Reduced duration
sr.reveal('.about__social-icon', { duration: 500, delay: 500, interval: 150 })  // Reduced duration

/* SCROLL SKILLS */
sr.reveal('.skills__subtitle', { duration: 500, delay: 0 })  // Reduced duration
sr.reveal('.skills__name', { distance: '20px', duration: 500, delay: 50, interval: 50 })  // Reduced duration
sr.reveal('.skills__img', { duration: 500, delay: 200 })  // Reduced duration

/* SCROLL PORTFOLIO */
sr.reveal('.portfolio__img', { duration: 500, interval: 150 })  // Reduced duration

/* SCROLL CONTACT */
sr.reveal('.contact__subtitle', { duration: 500, delay: 0 })  // Reduced duration
sr.reveal('.contact__text', { duration: 500, interval: 150 })  // Reduced duration
sr.reveal('.contact__input', { duration: 500, delay: 300 })  // Reduced duration
sr.reveal('.contact__button', { duration: 500, delay: 400 })  // Reduced duration





