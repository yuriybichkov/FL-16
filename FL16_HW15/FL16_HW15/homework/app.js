const root = document.getElementById('root');
const addTweetBtn = document.querySelector('.addTweet');
const modifyItem = document.getElementById('modifyItem');
const tweetItems = document.getElementById('tweetItems');
const alertMessage = document.getElementById('alertMessage');
const cancelModification = document.getElementById('cancelModification');
const saveModifiedItem = document.getElementById('saveModifiedItem');
const modifyItemInput = document.getElementById('modifyItemInput');
const navigationButtons = document.getElementById('navigationButtons');
const list = document.getElementById('list');
const tweets = [];

window.addEventListener('hashchange', () => hashChange());
addTweetBtn.addEventListener('click', function () {
    location.hash = '#/add';
});
cancelModification.addEventListener('click', function () {
    location.hash = '';
});
saveModifiedItem.addEventListener('click', () => {
    if (tweets.length === 0) {
        if (modifyItemInput.value !== '' && location.hash === '#/add') {
            return saveTweet();
        }
    } else {
        for (let tweet of tweets) {
            if (tweet.text === modifyItemInput.value) {
                return showMessage('Error! You can\'t tweet about that');
            }
        }
        if (modifyItemInput.value !== '' && location.hash === '#/add') {
            return saveTweet();
        }
    }
})
;
document.addEventListener('click', evt => removeTweet(evt));
document.addEventListener('click', evt => editTweet(evt));
document.addEventListener('click', evt => like(evt));
document.addEventListener('click', evt => unlike(evt));

function hashChange() {
    switch (location.hash) {
        case '':
            renderTweetsList();
            break;
        case '#/add':
            renderAddTweet();
            break;
        case '#/liked':
            renderLikedList();
            break;
    }
}

function renderTweetsList() {
    list.classList.remove('hidden');
    addTweetBtn.classList.remove('hidden')
    if (document.querySelector('.go-to-liked')) {
        document.querySelector('.go-to-liked').classList.remove('hidden')
    }
    if (document.querySelector('.liked-list')) {
        document.querySelector('.liked-list').remove();
    }
    if (document.querySelector('.back')) {
        document.querySelector('.back').remove();
    }
    modifyItem.classList.add('hidden');
    tweetItems.classList.remove('hidden');
}

function renderAddTweet(text = '') {
    tweetItems.classList.add('hidden');
    modifyItem.classList.remove('hidden');
    modifyItemInput.value = text;
}

function renderLikedList() {
    list.classList.add('hidden');
    addTweetBtn.classList.add('hidden');
    document.querySelector('.go-to-liked').classList.add('hidden');
}

function showMessage(text) {
    alertMessage.classList.remove('hidden');
    document.getElementById('alertMessageText').textContent = text;
    setTimeout(() => alertMessage.classList.add('hidden'), 2000)
}

function saveTweet(item = null, elem) {
    location.hash = '';

    if (item === null) {
        let id;
        if (tweets[tweets.length - 1]) {
            id = tweets[tweets.length - 1].id + 1;
        } else {
            id = 1;
        }
        tweets.push({
            id: id,
            text: modifyItemInput.value,
            liked: false
        });
        renderTweets(tweets[tweets.length - 1]);
    } else {
        item.text = modifyItemInput.value;
        elem.textContent = modifyItemInput.value;
    }
}

function renderTweets(item) {
    let listContent = `<li id="${item.id}">
                        <p>${item.text}</p>
                        <div> 
                          <button class="remove">Remove</button>
                          <button class="like">Like</button>
                        </div>
                      </li>`
    list.insertAdjacentHTML('beforeend', listContent);
}

function renderLikedTweets(array) {

    const backBtn = document.createElement('button');
    backBtn.classList.add('back');
    backBtn.textContent = 'Back'
    navigationButtons.append(backBtn);
    const listOfLiked = document.createElement('ul');
    listOfLiked.classList.add('liked-list');
    tweetItems.append(listOfLiked);
    let listContent = '';
    for (let item of array) {
        listContent += `<li id="${item.id}">
                        <p>${item.text}</p>
                        <div> 
                          <button class="remove">Remove</button>
                          <button class="like">Unlike</button>
                        </div>
                      </li>`
    }
    listOfLiked.insertAdjacentHTML('beforeend', listContent);
    backBtn.addEventListener('click', () => closeLikedTweets());
}

function removeTweet(e) {
    if (e.target.classList.contains('remove')) {
        let id = e.target.parentNode.parentNode.id;
        let removedItem = document.getElementById(id);
        for (let i = 0; i < tweets.length; i++) {
            if (tweets[i].id === +id) {
                tweets.splice(i, 1);
            }
        }
        removedItem.remove();
        const likesBtn = document.querySelector('.go-to-liked');
        if (document.querySelectorAll('.unlike').length === 0 && likesBtn) {
            likesBtn.remove();
        }
    }
}

function editTweet(e) {
    if (e.target.tagName === 'P') {
        let editedElem = e.target;
        let id = e.target.parentNode.id;
        location.hash = `#/edit/:${id}`;
        renderAddTweet(e.target.textContent);
        for (let item of tweets) {
            if (item.id === +id) {
                saveModifiedItem.addEventListener('click', () => {
                    if (location.hash === `#/edit/:${id}`) {
                        for (let tweet of tweets) {
                            if (tweet.text === modifyItemInput.value) {
                                return showMessage('Error! You can\'t tweet about that');
                            }
                        }
                    }
                    if (modifyItemInput.value !== '' && location.hash === `#/edit/:${id}`) {
                        return saveTweet(item, editedElem);
                    }
                })
            }
        }
    }
}

function like(e) {
    if (e.target.classList.contains('like')) {
        e.target.textContent = 'Unlike';
        e.target.classList.toggle('unlike');
        e.target.classList.toggle('like');
        let id = e.target.parentNode.parentNode.id;
        if (!document.querySelector('.go-to-liked')) {
            const likesBtn = document.createElement('button');
            likesBtn.classList.add('go-to-liked');
            likesBtn.textContent = 'Go to liked';
            navigationButtons.append(likesBtn);
            likesBtn.addEventListener('click', () => showLiked());
        }
        for (let tweet of tweets) {
            if (tweet.id === +id) {
                tweet.liked = true
            }
        }
        showMessage(`Hooray! You liked tweet with id ${id}!`)
        e.stopImmediatePropagation();
    }

}

function unlike(e) {
    if (e.target.classList.contains('unlike')) {
        e.target.textContent = 'Like';
        e.target.classList.toggle('unlike');
        e.target.classList.toggle('like');
        let id = e.target.parentNode.parentNode.id;
        for (let tweet of tweets) {
            if (tweet.id === +id) {
                tweet.liked = false
            }
        }
        const likesBtn = document.querySelector('.go-to-liked');
        if (document.querySelectorAll('.unlike').length === 0) {
            likesBtn.remove();
        }
        showMessage(`Sorry you no longer like tweet with id ${id}`)
        e.stopImmediatePropagation();
    }
}

function showLiked() {
    const likedTweets = tweets.filter(tweet => tweet.liked === true);
    location.hash = '#/liked';
    renderLikedTweets(likedTweets);
}

function closeLikedTweets() {
    location.hash = '';
}
