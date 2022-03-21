const calc = () => {
    let calcType = document.getElementById('calc-type');
    let calcTypeMaterial = document.getElementById('calc-type-material');
    let calcInput = document.getElementById('calc-input');//площадь
    let container = document.querySelector('#calc');
    let calcTotal = document.getElementById('calc-total');

    const countCalc = () => {
        let res = +calcInput.value * +calcType.value * +calcTypeMaterial.value;
        calcTotal.value = res.toFixed(2);
    };

    container.addEventListener('input', () => {
        if (calcType !== '--' || calcTypeMaterial !== '--' || calcInput !== '') {
            countCalc();
        }
    });
};
export default calc;