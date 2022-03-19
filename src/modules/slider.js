const slider = () => {
    const container = document.querySelector("#benefits > div");
    container.style.width = '585px';
    const swiperServices = new Swiper('#services .swiper', {
        direction: "horizontal",
        loop: true,
        slidesPerView: 2,
        navigation: {
            nextEl: '.services__arrow.services__arrow--right',
            prevEl: '.services__arrow.services__arrow--left',
        },
    });
    const swiperBenefits = new Swiper('#benefits > div > div.benefits-inner.swiper', {
        direction: "horizontal",
        slidesPerGroup: 3,
        loop: true,
        slidesPerView: 'auto',


        navigation: {
            nextEl: '.benefits__arrow.benefits__arrow--right',
            prevEl: '.benefits__arrow.benefits__arrow--left',
        },
    });
};
export default slider;