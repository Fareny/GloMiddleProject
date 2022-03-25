import { validation } from "./validation";
const sendForm = (ifCalc) => {
    const formOne = document.getElementById('order_1');
    const formTwo = document.getElementById('order_2');
    const modalOne = document.querySelector('.header-modal.header-modal--opened');
    const modalTwo = document.querySelector('.services-modal.services-modal--opened');
    const forms = document.querySelectorAll('.form-control.required');
    const inputsFormOne = formOne.querySelectorAll('input');
    const inputsFormTwo = formTwo.querySelectorAll('input');

    let
        nameModalOne = forms[10],
        phoneModalOne = forms[11],
        nameModalTwo = forms[12],
        phoneModalTwo = forms[13],

        nameFormOne = inputsFormOne[0],
        phoneFormOne = inputsFormOne[1],
        nameFormTwo = inputsFormTwo[0],
        phoneFormTwo = inputsFormTwo[1];

    const sendData = (data) => {
        return fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': "application/json",
            }
        }).then(res => res.json());
    };

    let price = document.getElementById('calc-total');
    validation(nameFormOne, phoneFormOne, nameFormTwo, phoneFormTwo);
    validation(nameModalOne, phoneModalOne, nameModalTwo, phoneModalTwo);
    const validate = (formItem) => {
        let result = true;
        let name = formItem.name;
        let phone = formItem.phone;

        if (phone.length > 16 || phone.length < 6 || name.length < 2) {
            result = false;
        } else if (ifCalc == true) {
            result = true;
        }
        return result;
    };

    const successMassage = () => {
        const messOne = document.querySelectorAll('.order-form-heading');
        const messTwo = document.querySelectorAll("#callback > div.box-modal_title > div")[1];
        const messThree = document.querySelectorAll("#application > div.box-modal_title > div")[1];
        let messageSuccsess = 'Спасибо! Менеджер свяжется с вами.';

        messOne.forEach((item) => {
            item.textContent = messageSuccsess;
            setTimeout(() => { item.textContent = 'ОСТАВИТЬ ЗАЯВКУ'; }, 5000);
        });
        messTwo.textContent = messageSuccsess;
        setTimeout(() => { messTwo.textContent = 'ЗАКАЗ ЗВОНКА'; }, 5000);
        messThree.textContent = messageSuccsess;
        setTimeout(() => { messThree.textContent = 'ВЫЗОВ ЗАМЕРЩИКА'; }, 5000);
    };

    const send = (form, name, phone) => {
        form.addEventListener('click', (e) => {
            e.preventDefault();
            if (e.target.className == 'btn btn-warning btn-block feedback' ||
                e.target.className == 'btn btn-warning feedback' || e.target.className == 'btn btn-success feedback') {
                const data = {
                    name: name.value,
                    phone: phone.value,
                };
                if (validate(data) == true) {
                    if (ifCalc == true && price.value != 0) {
                        data.price = price.value;
                    }
                    sendData(data);
                    successMassage();
                    clear();
                } else {
                    alert('Не валидные данные!!!');
                }
            }
        });
    };
    send(formOne, nameFormOne, phoneFormOne); send(modalOne, nameModalOne, phoneModalOne);
    send(formTwo, nameFormTwo, phoneFormTwo); send(modalTwo, nameModalTwo, phoneModalTwo);

    const clear = () => {
        nameModalOne.value = '';
        phoneModalOne.value = '';
        nameModalTwo.value = '';
        phoneModalTwo.value = '';
        nameFormOne.value = '';
        phoneFormOne.value = '';
        nameFormTwo.value = '';
        phoneFormTwo.value = '';
    };
};
export default sendForm;