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

    let getTime = getTimeRemaning();
    const updated = (daysCount, hoursCount, minutesCount, secondsCount) => {

        if (getTime.timeRemaining <= 0) {
            daysCount.textContent = '00';
            hoursCount.textContent = '00';
            minutesCount.textContent = '00';
            secondsCount.textContent = '00';
        } else {
            daysCount.textContent = returnZero(getTime.days);
            hoursCount.textContent = returnZero(getTime.hours);
            minutesCount.textContent = returnZero(getTime.minutes);
            secondsCount.textContent = returnZero(getTime.seconds);
        }
    };
    setInterval(() => {
        if (getTime.timeRemaining > 0) {
            updated(daysValue[0], hoursValue[0], minutesValue[0], secondsValue[0]);
            updated(daysValue[1], hoursValue[1], minutesValue[1], secondsValue[1]);
        }
    }, 1000);

    updated(daysValue[0], hoursValue[0], minutesValue[0], secondsValue[0]);
    updated(daysValue[1], hoursValue[1], minutesValue[1], secondsValue[1]);

    function returnZero(num) {
        return num <= 9 ? '0' + num : num;
    }
});
export default timer;