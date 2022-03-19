const slider = () => {
    const balkony = document.querySelector("body");
    const row = document.querySelector('#services > div > div.row');
    const slides = row.querySelectorAll('.service-block');
    balkony.addEventListener('click', (e) => {
        console.log(slides);
    });
};
export default slider;