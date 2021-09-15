function timer() {

    const deadline = '2021-12-12';

    function getTimeRemaining(endtime) {
        const totalTime = Date.parse(endtime) - Date.parse(new Date()),
            days = Math.floor((totalTime / (1000 * 60 * 60 * 24))),
            seconds = Math.floor((totalTime / 1000) % 60),
            minutes = Math.floor((totalTime / 1000 / 60) % 60),
            hours = Math.floor((totalTime / (1000 * 60 * 60) % 24));

        return {
            'total': totalTime,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    }

    function getZero(num) {
        if (num >= 0 && num < 10) {
            return '0' + num;
        } else {
            return num;
        }
    }

    function setClock(selector, endtime) {

        const timer = document.querySelector(selector),
            days = timer.querySelector("#days"),
            hours = timer.querySelector('#hours'),
            minutes = timer.querySelector('#minutes'),
            seconds = timer.querySelector('#seconds'),
            timeInterval = setInterval(updateClock, 1000);

        updateClock();

        function updateClock() {
            const totalTime = getTimeRemaining(endtime);

            days.innerHTML = getZero(totalTime.days);
            hours.innerHTML = getZero(totalTime.hours);
            minutes.innerHTML = getZero(totalTime.minutes);
            seconds.innerHTML = getZero(totalTime.seconds);

            if (totalTime.total <= 0) {
                clearInterval(timeInterval);
            }
        }
    }

    setClock('.timer', deadline);
}
timer();