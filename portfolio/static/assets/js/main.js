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
    duration: 300,  // Changed duration to 300ms for faster animation
    reset: true
})

/* SCROLL HOME */
sr.reveal('.home__title', { duration: 300, delay: 0 })  // Duration of 300ms, no delay
sr.reveal('.home__scroll', { duration: 300, delay: 50 })  // Duration of 300ms, slight delay
sr.reveal('.home__img', { origin: 'right', duration: 300, delay: 100 })  // Duration of 300ms

/* SCROLL ABOUT */
sr.reveal('.about__img', { duration: 300, delay: 150 })  // Duration of 300ms
sr.reveal('.about__subtitle', { duration: 300, delay: 100 })  // Duration of 300ms
sr.reveal('.about__profession', { duration: 300, delay: 150 })  // Duration of 300ms
sr.reveal('.about__text', { duration: 300, delay: 200 })  // Duration of 300ms
sr.reveal('.about__social-icon', { duration: 300, delay: 250, interval: 100 })  // Duration of 300ms, adjusted interval

/* SCROLL SKILLS */
sr.reveal('.skills__subtitle', { duration: 300, delay: 0 })  // Duration of 300ms
sr.reveal('.skills__name', { distance: '20px', duration: 300, delay: 25, interval: 75 })  // Duration of 300ms
sr.reveal('.skills__img', { duration: 300, delay: 100 })  // Duration of 300ms

/* SCROLL PORTFOLIO */
sr.reveal('.portfolio__img', { duration: 300, interval: 100 })  // Duration of 300ms

/* SCROLL CONTACT */
sr.reveal('.contact__subtitle', { duration: 300, delay: 0 })  // Duration of 300ms
sr.reveal('.contact__text', { duration: 300, interval: 100 })  // Duration of 300ms
sr.reveal('.contact__input', { duration: 300, delay: 200 })  // Duration of 300ms
sr.reveal('.contact__button', { duration: 300, delay: 250 })  // Duration of 300ms






