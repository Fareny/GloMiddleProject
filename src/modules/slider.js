const slider = () => {
    const container = document.querySelector("#benefits > div");
    container.style.width = '585px';
    const swiperServices = new Swiper('#services .swiper', {
        direction: "horizontal",
        loop: true,
        navigation: {
            nextEl: '.services__arrow.services__arrow--right',
            prevEl: '.services__arrow.services__arrow--left',
        },
        breakpoints: {
            1200: {
                slidesPerView: 2,
            }
        }
    });
    const swiperBenefits = new Swiper('#benefits > div > div.benefits-inner.swiper', {
        direction: "horizontal",
        slidesPerGroup: 1,
        loop: true,
        slidesPerView: 'auto',
        navigation: {
            nextEl: '.benefits__arrow.benefits__arrow--right',
            prevEl: '.benefits__arrow.benefits__arrow--left',
        },
    });
    window.addEventListener('resize', () => {
        if (window.screen.width < 576) {
            container.style.width = '198px';
        } else {
            container.style.width = '585px';
        }
    });
};
export default slider;