function visitLink(path) {
    //your code goes here

    if (!localStorage.getItem(path)) {
        let count = 1;
        localStorage.setItem(path, count);
    } else {
        let count = +localStorage.getItem(path);
        localStorage[path] = ++count;
    }
}

function viewResults() {
    const container = document.querySelector(".mx-auto");
    const ul = document.createElement('ul');
    let list = '';
    for (let item in localStorage) {
        if (localStorage.hasOwnProperty(item)) {
            list += `
            <li>You visited ${item} ${localStorage.getItem(item)} time(s)</li>`
        }
    }
    ul.insertAdjacentHTML('afterbegin', list);
    container.append(ul);
    localStorage.clear();
}

