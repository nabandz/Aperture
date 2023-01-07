window.addEventListener('DOMContentLoaded', function() {

    const header = document.querySelector('.header');

    //Header
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 0) {
            header.classList.add('header_active');
        } else {
            header.classList.remove('header_active');
        }
    });
});