// Your code goes here
// Task 1
function getAge(birthDate) {
    let age, dateNow = new Date(), dateLast = new Date(birthDate);
    if (dateNow.getMonth() > dateLast.getMonth() ||
        dateNow.getMonth() === dateLast.getMonth() &&
        dateNow.getDate() >= dateLast.getDate()) {
        age = dateNow.getFullYear() - dateLast.getFullYear();
    } else if (dateNow.getMonth() < dateLast.getMonth() ||
        dateNow.getMonth() === dateLast.getMonth() &&
        dateNow.getDate() < dateLast.getDate()) {
        age = dateNow.getFullYear() - dateLast.getFullYear() - 1;
    }
    return age;
}

// Task 2
function getWeekDay(date) {
    const week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let day = date;
    if (typeof date === 'number') {
        day = new Date(date);
    }
    return week[day.getDay()];
}

//Task 3
function getAmountDaysToNewYear() {
    let currentDate = new Date();
    let newYear = new Date().setFullYear(currentDate.getFullYear() + 1, 0, 1);
    return Math.floor((newYear - currentDate) / (1000 * 60 * 60 * 24));
}

//Task 4;
function getProgrammersDay(year) {
    let date = new Date();
    let yearDate = date.setFullYear(year, 0, 1);
    let programmersDay = new Date(255 * 24 * 60 * 60 * 1000 + yearDate);
    let weekDay = getWeekDay(programmersDay);
    const arr = programmersDay.toDateString().split(' ');
    return `${arr[2]} ${arr[1]}, ${arr[3]} (${weekDay})`;
}

//Task 5;
function howFarIs(strDay) {
    let message;
    let number;
    const week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let currentDay = new Date().getDay();
    if (strDay.toLowerCase() === week[currentDay].toLowerCase()) {
        message = `Hey, today is ${strDay} =)`;
    } else {
        week.forEach((item, index) => {
            if (strDay.toLowerCase() === item.toLowerCase()) {
                if (currentDay < index) {
                    number = index - currentDay;
                } else {
                    number = 7 - currentDay + index;
                }
                message = `It's ${number} day(s) left till ${item}.`;
            }
        })
    }
    return message;
}

//Task 6
function isValidIdentifier(str) {
    const regExp = /^[a-z_$]+[\w\d_$]*$/gi;
    return regExp.test(str);
}

//Task 7
function capitalize(str) {
    return str.replace(/(^|\s)\S/g, a => a.toUpperCase());
}

//Task 8
function isValidAudioFile(str) {
    const regExp = /^[a-zA-Z]+\.(mp3|flac|alac|aac)$/;
    return regExp.test(str);
}

//Task 9
function getHexadecimalColors(str) {
    return str.match(/#+([a-f\d]{3}|[a-f\d]{6})\b/gi);
}

//task 10
function isValidPassword(str) {
    const regExp = /^(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z]).{8,}$/;
    return regExp.test(str);
}

// Task 11
function addThousandsSeparators(thousands) {
    if (typeof thousands !== 'string') {
        return thousands.toString().replace(/(\d)(?=(\d{3})+([^\d]|$))/g, '$1,');
    } else {
        return thousands.replace(/(\d)(?=(\d{3})+([^\d]|$))/g, '$1,');
    }
}

//Task 12
function getAllUrlsFromText(str) {
    if (!str){
        return new Error('Argument not defined');
    }
    const regExp = /^https:\/\/(www.)?\w{2,}\.\w{2,}\.?\w*\/*$/g;
    const strArr = str.split(' ');
    const resArr =[];
    strArr.forEach(item => {
        if (regExp.test(item)){
            resArr.push(item)
        }
    });
    return resArr;
}

