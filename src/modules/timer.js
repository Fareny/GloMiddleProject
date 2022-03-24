const timer = (deadLine => {
    const daysValue = document.querySelectorAll('.count_1 > span');
    const hoursValue = document.querySelectorAll('.count_2 > span');
    const minutesValue = document.querySelectorAll('.count_3 > span');
    const secondsValue = document.querySelectorAll('.count_4 > span');

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
            daysValue[0].textContent = '00';
            hoursValue[0].textContent = '00';
            minutesValue[0].textContent = '00';
            secondsValue[0].textContent = '00';

            daysValue[1].textContent = '00';
            hoursValue[1].textContent = '00';
            minutesValue[1].textContent = '00';
            secondsValue[1].textContent = '00';
        } else {
            daysValue[0].textContent = returnZero(getTime.days);
            hoursValue[0].textContent = returnZero(getTime.hours);
            minutesValue[0].textContent = returnZero(getTime.minutes);
            secondsValue[0].textContent = returnZero(getTime.seconds);

            daysValue[1].textContent = daysValue[0].textContent;
            hoursValue[1].textContent = hoursValue[0].textContent;
            minutesValue[1].textContent = minutesValue[0].textContent;
            secondsValue[1].textContent = secondsValue[0].textContent;
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