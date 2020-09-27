// Copyright date

let now = new Date();
let nowYear = now.getFullYear();
document.getElementById('date').textContent = nowYear;

// Toggle

let navLinks = document.getElementById('navbar-links');
let toggle = document.getElementById('toggle');

toggle.addEventListener('click', function () {
    navLinks.classList.toggle('--show-navigation');

    // if (navLinks.classList.contains('--show-navigation')) {
    //     navLinks.classList.remove('--show-navigation');
    // } else {
    //     navLinks.classList.add('--show-navigation');
    // }
});

// Smooth scrolling

let scrollLinks = document.querySelectorAll('.--scroll-link');

scrollLinks.forEach(function (link) {
    link.addEventListener('click', function (event) {
        event.preventDefault();
        if (navLinks.classList.contains('--show-navigation')) {
            navLinks.classList.remove('--show-navigation');
        }

        let id = event.currentTarget.getAttribute('href').slice(1);
        let element = document.getElementById(id);
        let barElement = document.querySelector('.navbar__header');
        let position = element.offsetTop - barElement.offsetHeight;

        window.scroll({
            top: position,
            left: 0,
            behavior: "smooth"
        });
    });
})