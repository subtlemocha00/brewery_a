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
        const navbar = document.querySelector('.navbar');
        const isClickInside = navbar.contains(event.target);
        const navbarToggler = document.querySelector('.navbar-toggler');
        const navbarCollapse = document.querySelector('.navbar-collapse');

        if (!isClickInside && navbarCollapse.classList.contains('show')) {
            navbarToggler.click();
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const sizeButtons = document.querySelectorAll('.size');
    sizeButtons.forEach(div => {
        div.addEventListener('click', function () {
            sizeButtons.forEach(d => d.classList.remove('selected'));
            this.classList.add('selected');
        });
    });
})