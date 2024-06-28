document.addEventListener('DOMContentLoaded', function() {
    let lastScrollTop = 0;
    const navbar = document.querySelector('.navbar');

    window.addEventListener('scroll', function() {
        const currentScroll = window.scrollY || document.documentElement.scrollTop;
        console.log(currentScroll);
        if (currentScroll > lastScrollTop && currentScroll > 90) {
            navbar.classList.add('navbar-hidden');
        } else {
            navbar.classList.remove('navbar-hidden');
        }
        lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
    });
});