// Your code goes here
//Task #1
function isEquals(a, b) {
    // console.log(`-> ${a} === ${b}`, a === b);
    return a === b;
}

// isEquals(4,4)

//Task#2
function isBigger(a, b) {
    // console.log(`-> ${a} > ${b}`, a > b);
    return a > b
}

// isBigger(5, 4)

//Task #3
function storeNames() {
    const storeArr = [];
    for (let argument of arguments) {
        storeArr.push(argument);
    }
    // console.log("-> storeArr", storeArr);
    return storeArr;
}

// storeNames('Tommy Shelby', 'Ragnar Lodbrok', 'Tom Hardy', '2','dffd');

//Task #4
function getDifference(a, b) {
    if (a < b) {
        // console.log("-> b - a", b - a);
        return b - a;
    } else {
        // console.log("-> a - b", a - b);
        return a - b;
    }
}

// getDifference(5, 3);
// getDifference(5,8);

//Task #5
function negativeCount(arr) {
    let count = 0;
    for (let item of arr) {
        if (item < 0) {
            count++
        }
    }
    // console.log("-> count", count);
    return count
}

// negativeCount([4, 3, 2, 9]);
// negativeCount([0, -3, 5, 7]);

//Task #6
function letterCount(str, char) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === char) {
            count++
        }
    }
    // console.log("-> count", count);
    return count;
}

// letterCount("Marry", "r");
// letterCount("Barny", "y");

//Task #7

function countPoints(arr) {
    let points = 0;
    for (let item of arr) {
        let arr = item.split(':')
        if (+arr[0] > +arr[1]) {
            points += 3;
        } else if (arr[0] === arr[1]) {
            points += 1
        }
    }
    // console.log("-> points", points);
    return points;
}

// countPoints(["3:0", "2:2", "0:0", "3:2", "0:1", "1:1"]);
// countPoints(['100:90', '110:98', '100:100', '95:46', '54:90', '99:44', '90:90', '111:100']);