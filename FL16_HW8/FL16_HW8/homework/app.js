reverseNumber(-56789);

function reverseNumber(num) {
    let strNum = String(num);
    let newNum = '';
    if (num < 0) {
        newNum += '-';
    }
    for (let i = strNum.length - 1; i >= 0; i--) {
        newNum += strNum[i];
    }
    return console.log(parseInt(newNum));
}

forEach([2, 5, 8], function (el) {
    console.log(el);
})

function forEach(arr, func) {
    for (let i = 0; i < arr.length; i++) {
        func(arr[i])
    }
}

const res = map([2, 5, 8], function (el) {
    return el + 3;
})
console.log(res);
const res1 = map([1, 2, 3, 4, 5], function (el) {
    return el * 2;
})
console.log(res1);

function map(arr, func) {
    const resArr = [];
    forEach(arr, function (el) {
        resArr.push(func(el));
    })
    return resArr
}

const filtered1 = filter([2, 5, 1, 3, 8, 6], function (el) {
    return el > 3;
})
console.log(filtered1);
const filtered2 = filter([1, 4, 6, 7, 8, 10], function (el) {
    return el % 2 === 0;
})
console.log(filtered2);

function filter(arr, func) {
    const resArr = [];
    forEach(arr, function (el) {
        if (func(el)) {
            resArr.push(el)
        }
    })
    return resArr;
}

const list = [
    {
        "_id": "5b5e3168c6bf40f2c1235cd6",
        "index": 0,
        "age": 39,
        "eyeColor": "green",
        "name": "Stein",
        "favoriteFruit": "apple"
    },
    {
        "_id": "5b5e3168e328c0d72e4f27d8",
        "index": 1,
        "age": 38,
        "eyeColor": "blue",
        "name": "Cortez",
        "favoriteFruit": "strawberry"
    },
    {
        "_id": "5b5e3168cc79132b631c666a",
        "index": 2,
        "age": 2,
        "eyeColor": "blue",
        "name": "Suzette",
        "favoriteFruit": "apple"
    },
    {
        "_id": "5b5e31682093adcc6cd0dde5",
        "index": 3,
        "age": 17,
        "eyeColor": "green",
        "name": "Weiss",
        "favoriteFruit": "banana"
    }
]
getAdultAppleLovers(list);


function getAdultAppleLovers(data) {
    const filteredObj = filter(data, function (el) {
        return el.age > 18 && el.favoriteFruit === 'apple';
    })
    return map(filteredObj, function (el) {
        return console.log(el.name);
    })
}

getKeys({keyOne: 1, keyTwo: 2, keyThree: 3})

function getKeys(obj) {
    const resArr = [];
    for (let item in obj) {
        resArr.push(item);
    }
    return console.log(resArr);
}

getValues({keyOne: 1, keyTwo: 2, keyThree: 3});

function getValues(obj) {
    const resArr = [];
    for (let key in obj) {
        resArr.push(obj[key])
    }
    return console.log(resArr);
}

showFormattedDate(new Date('2015-12-17T01:10:00'));

function showFormattedDate(dateObj) {
    const arrDate=dateObj.toString().split(' ',4)
    return console.log(`It is ${arrDate[2]} of ${arrDate[1]}, ${arrDate[3]}`);
}
