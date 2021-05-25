// Your code goes here
// Task 1
function getAge(birthDate) {
    let age, dateNow = new Date(), dateLast = new Date(birthDate);
    if (dateNow.getMonth() > dateLast.getMonth() ||
        (dateNow.getMonth() === dateLast.getMonth() &&
            dateNow.getDate() >= dateLast.getDate())) {
        age = dateNow.getFullYear() - dateLast.getFullYear();
    } else if (dateNow.getMonth() < dateLast.getMonth() ||
        (dateNow.getMonth() === dateLast.getMonth() &&
            dateNow.getDate() < dateLast.getDate())) {
        age = dateNow.getFullYear() - dateLast.getFullYear() - 1;
    }
    return age;
}

// Task 2
function getWeekDay(date) {
    let day = date;
    if (typeof date === "number") {
        day = new Date(date);
    }

    let weekDay;
    weekDay = day.getDay().toString();


    const week = {
        0: 'Sunday',
        1: 'Monday',
        2: 'Tuesday',
        3: 'Wednesday',
        4: 'Thursday',
        5: 'Friday',
        6: 'Saturday'
    }
    for (let weekKey in week) {
        if (weekDay === weekKey) {
            weekDay = week[weekKey];
        }
    }
    console.log("-> day", weekDay);
    return weekDay;
}

getWeekDay(Date.now()); // "Thursday" (if today is the 22nd October)
getWeekDay(new Date(2020, 9, 22)); // "Thursday