import { validation } from "./validation";
const sendForm = (ifCalc) => {
    const formOne = document.getElementById('order_1');
    const formTwo = document.getElementById('order_2');
    const inputsFormOne = formOne.querySelectorAll('input');
    const inputsFormTwo = formTwo.querySelectorAll('input');

    let nameFormOne = inputsFormOne[0],
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
    const validate = (formItem) => {
        let result = true;
        let name = formItem.name;
        let phone = formItem.phone;

        if (phone.length > 16 || phone.length == 0 || name.length < 2) {
            result = false;
        } else if (ifCalc == true && price.value.length == 0) {
            result = false;
        }
        return result;
    };

    const clear = () => {
        nameFormOne.value = '';
        phoneFormOne.value = '';
        nameFormTwo.value = '';
        phoneFormTwo.value = '';
    };

    const send = (form, name, phone) => {
        form.addEventListener('click', (e) => {
            e.preventDefault();
            if (e.target.className == 'btn btn-warning btn-block feedback') {
                const data = {
                    name: name.value,
                    phone: phone.value,
                };
                if (validate(data) == true) {
                    if (ifCalc == true) {
                        data.price = price.value;
                    }
                    sendData(data);
                    clear();
                    alert('Спасибо! Менеджер свяжется с вами.');
                } else {
                    alert('Не валидные данные!!!');
                }
            }
        });
    };
    send(formOne, nameFormOne, phoneFormOne);
    send(formTwo, nameFormTwo, phoneFormTwo);
};
export default sendForm;