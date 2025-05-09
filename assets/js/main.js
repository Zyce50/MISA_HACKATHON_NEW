/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader(){
    const header = document.getElementById('header')
    // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 50) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*=============== POPULAR SWIPER ===============*/
let swiperPopular = new Swiper('.popular__container', {
    loop: true,
    spaceBetween: 24,
    slidesPerView: "auto",
    grabCursor: true,

    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
    },
    breakpoints: {
        768: {
          slidesPerView: 3,
        },
        1024: {
          spaceBetween: 48,
        },
      },
});

/*=============== MIXITUP FILTER FEATURED ===============*/
const featuredContainer = document.querySelector('.featured__content');
if (featuredContainer) {
    let mixerFeatured = mixitup('.featured__content', {
        selectors: {
            target: '.featured__card'
        },
        animation: {
            duration: 300
        }
    });

    /* Link active featured */ 
    const linkFeatured = document.querySelectorAll('.featured__item')

    function activeFeatured(){
        linkFeatured.forEach(l=> l.classList.remove('active-featured'))
        this.classList.add('active-featured')
    }
    linkFeatured.forEach(l=> l.addEventListener('click', activeFeatured))
}

/*=============== SHOW SCROLL UP ===============*/ 
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if(this.scrollY >= 350) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
  }
  window.addEventListener('scroll', scrollUp)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset
    
    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
        sectionTop = current.offsetTop - 58,
        sectionId = current.getAttribute('id')
        
        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    // reset: true
})
  
  sr.reveal(`.home__title, .popular__container, .features__img, .featured__filters`)
  sr.reveal(`.home__subtitle`,{delay: 500})
  sr.reveal(`.home__elec`, {delay: 600})
  sr.reveal(`.home__img`, {delay: 800})
  sr.reveal(`.home__car-data`, {delay: 900, interval: 100, origin: 'bottom'})
  sr.reveal(`.home__button`, {delay: 1000, origin: 'bottom'})
  sr.reveal(`.about__group, .offer__data`,{origin: 'left'})
  sr.reveal(`.about__data, .offer__img`,{origin: 'right'})
  sr.reveal(`.features__map`,{delay: 600, origin: 'bottom'})
  sr.reveal(`.features__card`,{interval: 300})
  sr.reveal(`.featured__card, .logos__content, .footer__content`,{interval: 100})

/*==================== DARK LIGHT THEME ====================*/ 
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM Content Loaded');
    const themeButton = document.getElementById('theme-button');
    console.log('Theme button:', themeButton);
    
    if (!themeButton) {
        console.error('Theme button not found!');
        return;
    }

    const darkTheme = 'dark-theme'
    const iconTheme = 'ri-sun-line'

    // Previously selected topic (if user selected)
    const selectedTheme = localStorage.getItem('selected-theme')
    const selectedIcon = localStorage.getItem('selected-icon')

    // We obtain the current theme that the interface has by validating the dark-theme class
    const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
    const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'

    // We validate if the user previously chose a topic
    if (selectedTheme) {
        // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
        document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
        themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme)
    }

    // Activate / deactivate the theme manually with the button
    themeButton.addEventListener('click', () => {
        console.log('Theme button clicked');
        // Add or remove the dark / icon theme
        document.body.classList.toggle(darkTheme)
        themeButton.classList.toggle(iconTheme)
        // We save the theme and the current icon that the user chose
        localStorage.setItem('selected-theme', getCurrentTheme())
        localStorage.setItem('selected-icon', getCurrentIcon())
    })
})