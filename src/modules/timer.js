const timer = ((order, deadLine) => {
    const form = document.getElementById(`${order}`);
    const daysValue = form.querySelector(`.count_1 > span`);
    const hoursValue = form.querySelector(`.count_2 > span`);
    const minutesValue = form.querySelector(`.count_3 > span`);
    const secondsValue = form.querySelector(`.count_4 > span`);

    const getTimeRemaning = () => {
        let dateStop = new Date(deadLine).getTime();
        let dateNow = new Date().getTime();
        let timeRemaining = (dateStop - dateNow) / 1000;

        let days = Math.floor(timeRemaining / 60 / 60 / 24);
        let hours = Math.floor((timeRemaining / 60 / 60) % 24);
        let minutes = Math.floor((timeRemaining / 60) % 60);
        let seconds = Math.floor(timeRemaining % 60);

        return {
            timeRemaining,
            days,
            hours,
            minutes,
            seconds
        };
    };
    const updated = () => {
        let getTime = getTimeRemaning();
        if (getTime.timeRemaining <= 0) {
            daysValue.textContent = '00';
            hoursValue.textContent = '00';
            minutesValue.textContent = '00';
            secondsValue.textContent = '00';
        } else {
            daysValue.textContent = returnZero(getTime.days);
            hoursValue.textContent = returnZero(getTime.hours);
            minutesValue.textContent = returnZero(getTime.minutes);
            secondsValue.textContent = returnZero(getTime.seconds);
        }
    };

    setInterval(() => {
        let getTime = getTimeRemaning();
        if (getTime.timeRemaining > 0) {
            updated();
        }
    }, 1000);

    function returnZero(num) {
        return num <= 9 ? '0' + num : num;
    }
});
export default timer;