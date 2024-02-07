const menu = document.querySelector('.menu');
const menuButton = document.querySelector('.menu__icon');

menuButton.addEventListener('click', () => {
    menu.classList.toggle('menu__open');
});

document.addEventListener('click', (event) => {
    const isClickInsideMenu = menu.contains(event.target);
    const isClickInsideMenuButton = menuButton.contains(event.target);
    
    if (!isClickInsideMenu && !isClickInsideMenuButton) {
        menu.classList.remove('menu__open');
    }
});

const menuLinks = document.querySelectorAll('.menu a');

menuLinks.forEach(link => {
    link.addEventListener('click', event => {
        event.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        targetElement.scrollIntoView({ behavior: 'smooth' });
    });
});

let slideIndex = 0;
const totalSlides = 3; 

function showSlides() {
    const slides = document.getElementsByClassName('service-slide');
  
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }

    for (let i = slideIndex; i < slideIndex + totalSlides; i++) {
        slides[i].style.display = 'block';
    }
}

function nextSlide() {
    const slides = document.getElementsByClassName('service-slide');
    if (slideIndex + totalSlides < slides.length) {
        slideIndex++;
    } else {
        slideIndex = 0;
    }
    showSlides();
}

function prevSlide() {
    if (slideIndex > 0) {
        slideIndex--;
    } else {
        slideIndex = slides.length - totalSlides;
    }
    showSlides();
}

showSlides();

function handleResponsive() {
    if (window.innerWidth < 768) {
        const menu = document.querySelector('.menu');
        menu.style.position = 'absolute'; 
    } else {
        const menu = document.querySelector('.menu');
        menu.style.position = ''; 
    }
}


window.addEventListener('resize', handleResponsive);
window.addEventListener('load', handleResponsive);
