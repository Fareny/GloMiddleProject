const headerModal = () => {
    const headerModal = document.querySelector('.header-modal');
    const overlay = document.querySelector('.overlay');
    const balkony = document.querySelector("body");
    const imgResponsive = document.querySelectorAll('.sertificate-document');
    const documentOverlay = document.querySelectorAll('.document-overlay');
    const serviceModal = document.querySelector('.services-modal');
    const modalContent = document.querySelector('.modalContent');
    const modalOverlay = document.querySelector('.modalOverlay');

    overlay.style.zIndex = 99;
    documentOverlay.forEach((item) => {
        item.style.height = '0px';
    });
    balkony.addEventListener('click', (e) => {
        if (e.target.className === 'btn btn-warning btn-block fancyboxModal') { //первая модалка
            headerModal.style.display = `block`;
            overlay.style.display = `block`;
        }

        if (e.target.className === 'btn btn-success btn-sm fancyboxModal') { //вторая модалка
            serviceModal.style.display = `block`;
            overlay.style.display = `block`;
        }

        if (e.target.className === 'img-responsive') { //модальное изображение  
            e.preventDefault();
            const doc = document.querySelectorAll('.sertificate-document .img-responsive');
            doc.forEach((item, i) => {
                item.id = `imageContent${i}`;
            });

            if (e.target.id == 'imageContent0') {
                modalContent.style.backgroundImage = `url(${imgResponsive[0].href})`;
            } else if (e.target.id == 'imageContent1') {
                modalContent.style.backgroundImage = `url(${imgResponsive[1].href})`;
            } else if (e.target.id == 'imageContent2') {
                modalContent.style.backgroundImage = `url(${imgResponsive[2].href})`;
            }

            modalOverlay.style.visibility = 'visible';
            modalOverlay.style.opacity = 1;
            modalContent.style.visibility = 'visible';
            modalContent.style.opacity = 1;
        }

        if (e.target.className === 'header-modal__close' || e.target.className === 'overlay' ||
            e.target.className === 'services-modal__close' || e.target.className === 'modalImageclose') {  //закрываю
            headerModal.style.display = `none`;
            serviceModal.style.display = `none`;
            overlay.style.display = `none`;
        }

        if (e.target.className === 'modalImageclose' || e.target.className === 'modalOverlay') {
            modalOverlay.style.visibility = 'hidden'; //закрываю мадальное иображение
            modalOverlay.style.opacity = 0;
            modalContent.style.visibility = 'hidden';
            modalContent.style.opacity = 0;
        }
    });
};
export default headerModal;