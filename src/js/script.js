window.addEventListener('DOMContentLoaded', function() {

    const header = document.querySelector('.header');
    const cards = document.querySelectorAll('.what-we__item');

    //Header
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 0) {
            header.classList.add('header_active');
        } else {
            header.classList.remove('header_active');
        }
    });

    //Cards
    cards.forEach(card => {
        card.addEventListener('mousemove', function(e) {
            const ract = card.getBoundingClientRect();

            card.style.setProperty('--x', e.clientX - (ract.left + Math.floor(ract.width / 2)));
            card.style.setProperty('--y', e.clientY - (ract.top + Math.floor(ract.height / 2)));
        });

        card.addEventListener('mouseleave', function(e) {
            card.style.setProperty('--x', 0);
            card.style.setProperty('--y', 0);
        });
    });

    //Slider
    const swiper = new Swiper('.clients__slider', {
        loop: true,
        allowTouchMove: false,
    
        autoplay: {
            delay: 1000,
        },
        speed: 3000,
    
        breakpoints: {
            1200: {
                slidesPerView: 5,
                spaceBetween: 100
            },
            992: {
                slidesPerView: 4,
                spaceBetween: 75
            }
        }
    });
});