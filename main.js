function clock() {
    let deg = 6;
    const hours = document.querySelector('#hr');
    const minutes = document.querySelector('#mn');
    const seconds = document.querySelector('#sc');
    
    setInterval(() => {
        let date = new Date();
        let h = date.getHours() * 30;
        let m = date.getMinutes() * deg;
        let s = date.getSeconds() * deg;
        
        hours.style.transform = `rotateZ(${(h)+(m/12)}deg)`;
        minutes.style.transform = `rotateZ(${(m)}deg)`;
        seconds.style.transform = `rotateZ(${(s)}deg)`;
    })
}
clock();

function day() {
    const day = document.querySelector('.day');
    const dayOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let date = new Date();
    let d = date.getDay();
    day.innerHTML = dayOfWeek[d];
}
day();

function deadline() {
    //const form = document.querySelector(".timer-form");
    let getHour = document.querySelector(".timer-clock__hour");
    let getMinute = document.querySelector(".timer-clock__minute");
    let getSecond = document.querySelector(".timer-clock__second");
    let hourValue = document.querySelector("#timer-hour");
    let minuteValue = document.querySelector("#timer-minute");
    let secondValue = document.querySelector("#timer-second");
    let h;
    let m;
    let s;
    let values = [];
    let time;
    document.querySelector(".btn").addEventListener('click', () => {
        checkValues();
    })  
    function checkValues() {
        let hourNumber = Number(hourValue.value);
        let minuteNumber = Number(minuteValue.value);
        let secondNumber = Number(secondValue.value);
        if (hourNumber >= 0 && hourNumber < 25 && hourNumber != null && minuteNumber >= 0 && minuteNumber < 60 && minuteNumber != null && secondNumber > 0 && secondNumber < 60 && secondNumber != null) {
            values.push(hourNumber, minuteNumber, secondNumber);
            h = values[0];
            m = values[1];
            s = values[2];

            showTimer(h, m, s);
            console.log(values)

            const timer = document.querySelector('.timer-clock');
            timer.style.display = 'flex';
            const formTimer = document.querySelector('.timer');
            formTimer.style.display = 'none';
        } else {
            alert("Введите правильно знаечние!")
        }
    }
    document.querySelector('.button-second__start').addEventListener('click', () => {      
        time = setInterval(timer, 1000)     
        const start = document.querySelector('.button-second__start');
        start.style.display = 'none';
        const stop = document.querySelector('.button-first__stop');
        stop.style.display= 'block';
    })

    document.querySelector('.button-first__stop').addEventListener('click', () => {
        clearInterval(time);
        const start = document.querySelector('.button-second__start');
        start.style.display = 'block';
        const stop = document.querySelector('.button-first__stop');
        stop.style.display= 'none';
    })

    document.querySelector('.cancel-btn').addEventListener('click', () => {
        clearTimer();
        hourValue.innerText = '11';
        const stop = document.querySelector('.button-first__stop');
        stop.style.display= 'none';
        const start = document.querySelector('.button-second__start');
        start.style.display = 'block';
        const timer = document.querySelector('.timer-clock');
        timer.style.display = 'none';
        const formTimer = document.querySelector('.timer');
        formTimer.style.display = 'block';
    });

    function clearTimer() {
        clearInterval(time);
        values = [];
        h = 0;
        m = 0;
        s = 0;
        getHour.innerText = '00';
        getMinute.innerText = '00';
        getSecond.innerText = '00';
    }

    function timer() {
        if(s > 0) {
            console.log(s--);
        }
        else if (m > 0) {
            s = 59;
            console.log(m--);
        }
        else if (h > 0) {
            m = 59;
            s = 59;
            console.log(h--);
        }
         else if(h == 0 && m == 0 && s == 0) {
            clearInterval(time);
            const start = document.querySelector('.button-second__start');
            start.style.display = 'block';
            const stop = document.querySelector('.button-first__stop');
            stop.style.display= 'none';
            alert("Время вышло!");
            console.log("Время вышло");
        }

        showTimer(h, m, s);
    }

    function showTimer(hours, minutes, seconds) {
        if (hours < 10) {
            getHour.innerText = '0' + hours;
        } else {
            getHour.innerText = hours;
        }

        if (minutes < 10) {
            getMinute.innerText = '0' + minutes;
        } else {
            getMinute.innerText = minutes;
        }

        if (seconds < 10) {
            getSecond.innerText = '0' + seconds;
        } else {
            getSecond.innerText = seconds;
        }
    }
}
deadline();

function openClock() {
    const btnclock = document.querySelector(".panel-bottom__clock");
    const clock = document.querySelector(".clock");
    const formTimer = document.querySelector(".area");
    btnclock.addEventListener('click', () => {
        formTimer.style.display = "none";
        clock.style.display = "flex";
    })
}
openClock();

function openTimer() {
    const btntimer = document.querySelector(".panel-bottom__timer");
    const clock = document.querySelector(".clock");
    const formTimer = document.querySelector(".area");
    btntimer.addEventListener('click', () => {
        clock.style.display = "none";
        formTimer.style.display = "block";
    })
}
openTimer();


            /*let first = new Date();
            first.setHours(values[0][0]);
            let firstHour = first.getHours();
            console.log(firstHour);
            
            let second = new Date();
            second.setMinutes(values[0][1]);
            let firstMinute = second.getMinutes();
            
            let third = new Date();
            third.setSeconds(values[0][2]);
            let firstSecond = third.getSeconds();
            
            let dateHour = new Date();
            let dateFirst = dateHour.getHours();
            
            let dateMinute = new Date();
            let dateSecond = dateMinute.getMinutes();

            let dateSeconds = new Date();
            let dateThird = dateSeconds.getSeconds();
            
            let deadlineHour = dateFirst + firstHour;*/

            /*let timer = setInterval(() => {
                if(firstSecond >= 0) {
                    console.log(firstSecond--);
                } else if (){
                    clearInterval(timer)
                }
                if(firstMinute >= 0) {
                    console.log(firstMinute--);
                } else {
                    
                }
                if(firstHour >= 0) {
                    console.log(firstHour--);
                } else {
                    
                }
            }, 1000);*/
            
 

/*function timer () {
    let timerInput = document.querySelector("#timer-hour");
    let button = document.querySelector(".btn");
    let timerShow = document.querySelector(".timer-clock__hour");
    

    button.addEventListener('click', () => {
        let time = parseInt(timerInput.value) * 60;
        let s = time % 60;
        let minutes = time / 60 % 60;
        let hours = time / 60 / 60 % 60;
        interval = setInterval(() => {
            if(time <= 0) {
                clearInterval(interval);
                alert("Время закончилось!");
            }  else {
                let strTime = `${Math.trunc(hours)}:${Math.trunc(minutes)}:${Math.trunc(s)}`;
                timerShow.innerHTML = strTime;
            }
            --time;
            console.log(time);
        }, 1000)
    })
}
timer();*/

// form.addEventListener('submit', event => {
        //     event.preventDefault();

        //     for(let element of form.elements) {
        //         if(element.tagName === 'INPUT') {
        //             values.push(element.value);
        //         }
        //     }
        // console.log(hourValue.value);
        // console.log(typeof(hourValue.value));
        // console.log(typeof())
        
        // })
        /*else if (h > 0 || h == 0 && m > 0 && s == 0) {
            s = 59;
            m--;
        }*/
        /*else if (h > 0 && m == 0) {
            m = 59;
            h--;
        }*/
        //let timerShow = document.querySelector(".timer-clock__hour");
        //let strTime = `${Math.trunc(hours)}:${Math.trunc(minutes)}:${Math.trunc(seconds)}`;
        //timerShow.innerHTML = strTime;

function Word() {
    console.log('Hello world')
}
Word();
    
