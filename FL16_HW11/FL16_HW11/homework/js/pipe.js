function isFunction(functionToCheck) {
    return functionToCheck && {}.toString.call(functionToCheck) === '[object Function]';
}

const pipe = (value, ...funcs) => {

    let res;
    let position;
    try {
        for (let funcsKey in funcs) {
            if (!isFunction(funcs[funcsKey])) {
                position = funcsKey;
                throw new Error('ERROR');
            }
        }
        res = funcs.reduce((arg, fn, index) => {
            position = index;
            return fn(arg)
        }, value);
    } catch (err) {
        res = `Provided argument at position ${position} is not a function!`;
    }
    return res;
};

const replaceUnderscoreWithSpace = (value) => value.replace(/_/g, ' ');
const capitalize = (value) =>
    value
        .split(' ')
        .map((val) => val.charAt(0).toUpperCase() + val.slice(1))
        .join(' ');
const appendGreeting = (value) => `Hello, ${value}!`;

const error = pipe('john_doe', replaceUnderscoreWithSpace, 'capitalize', '');

alert(error);

const result = pipe('john_doe', replaceUnderscoreWithSpace, capitalize, appendGreeting);

alert(result);
