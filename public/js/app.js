//Areas
let navbar = document.querySelector('.navbar');
let loginForm = document.querySelector('.login-form');


//Clickables
let menuIcon = document.querySelector('#mobile');
let loginArea = document.querySelector('#login-btn');


window.onscroll = () => {
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}

loginArea.onclick = () => {
    loginForm.classList.toggle('active');
    navbar.classList.remove('active');
}

menuIcon.onclick = () => {
    navbar.classList.toggle('active');
    loginForm.classList.remove('active');

}

//Slider Pagination

var swiper = new Swiper(".modelos-slider", {
    pagination: {
        el: ".swiper-pagination",
    },
    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
    },
    loop: true,
});