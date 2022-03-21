const validation = (nameFormOne, phoneFormOne, nameFormTwo, phoneFormTwo) => {
    const value = (name, phone) => {
        name.addEventListener('input', (e) => {
            e.target.value = e.target.value.replace(/[^А-яA-z]+/i, "");
        });
        phone.addEventListener('input', (e) => {
            e.target.value = e.target.value.replace(/[^\d()+-]+/, "");
        });
    };
    value(nameFormOne, phoneFormOne);
    value(nameFormTwo, phoneFormTwo);
};
export { validation };