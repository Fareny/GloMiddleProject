const headerModal = () => {
    const headerModal = document.querySelector('.header-modal');
    const overlay = document.querySelector('.overlay');
    const balkony = document.querySelector("body");
    const serviceModal = document.querySelector('.services-modal');

    balkony.addEventListener('click', (e) => {
        if (e.target.className === 'btn btn-warning btn-block fancyboxModal') { //первая модалка
            headerModal.style.display = `block`;
            overlay.style.display = `block`;
        }

        if (e.target.className === 'btn btn-success btn-sm fancyboxModal') { //вторая модалка
            serviceModal.style.display = `block`;
            overlay.style.display = `block`;
        }

        if (e.target.className === 'header-modal__close' || e.target.className === 'overlay' ||
            e.target.className === 'services-modal__close') {  //закрываю
            headerModal.style.display = `none`;
            serviceModal.style.display = `none`;
            overlay.style.display = `none`;
        }
    });
};
export default headerModal;