const slider = () => {
    const btnScroll = document.querySelector('.smooth-scroll');
    if (window.pageYOffset > 1300) {
        btnScroll.style.transition = 'all 0.4s ease-in-out';
        btnScroll.style.opacity = '1';
        btnScroll.addEventListener('click', (e) => {
            e.preventDefault();
            window.scroll({
                top: 0,
                behavior: "smooth"
            });
        });
    } else {
        btnScroll.style.opacity = '0';
    }
    window.onscroll = slider;
};
export default slider;