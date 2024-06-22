document.addEventListener('DOMContentLoaded', function () {
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Optional: Stop observing once the class is added
            }
        });
    });

    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach(el => observer.observe(el));
});


document.addEventListener('DOMContentLoaded', function () {
    document.addEventListener('click', function (event) {
        const navbar = document.querySelector('.navbar'); // Select the navbar element
        const isClickInside = navbar.contains(event.target); // Check if the click is inside the navbar
        const navbarToggler = document.querySelector('.navbar-toggler'); // Select the navbar toggler button
        const navbarCollapse = document.querySelector('.navbar-collapse'); // Select the collapsible part of the navbar

        if (!isClickInside && navbarCollapse.classList.contains('show')) { // If the click is outside and navbar is expanded
            navbarToggler.click(); // Trigger a click on the toggler to collapse the navbar
        }
    });
});