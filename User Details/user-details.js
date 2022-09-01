// На странице user-details.html:
// 4 Вивести всю, без виключення, інформацію про об'єкт user на який клікнули
// 5 Додати кнопку "post of current user", при кліку на яку, з'являються title всіх постів поточного юзера
// (для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)
// 6 Кожному посту додати кнопку/посилання, при кліку на яку відбувається перехід на сторінку post-details.html, котра має детальну інфу про поточний пост.

let url = new URL(location.href);
let id = url.searchParams.get('id');

let divWrap = document.createElement('div');
divWrap.classList.add('wrapWrap');
document.body.appendChild(divWrap);


fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then(response => response.json())
    .then((users) => {

        let divUserInfo = document.createElement('div');
        divUserInfo.classList.add('User-info');
        divWrap.appendChild(divUserInfo);

        let createUser = (obj) => {
            for (const objKey in obj) {
                if (typeof obj[objKey] !== 'object') {
                    let divElement = document.createElement('div');
                    divElement.innerText = `${objKey} - ${obj[objKey]}`;
                    divUserInfo.appendChild(divElement);

                } else {
                    createUser(obj[objKey]);
                }
            }
        };
        createUser(users);
            });


// 5 Додати кнопку "post of current user", при кліку на яку, з'являються title всіх постів поточного юзера
// (для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)
// 6 Кожному посту додати кнопку/посилання, при кліку на яку відбувається перехід на сторінку post-details.html, котра має детальну інфу про поточний пост.

fetch(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
    .then(response => response.json())
    .then(posts => {

        let divPost = document.createElement('div');
        divPost.classList.add('current-post');
        document.body.appendChild(divPost);

        let userPost = document.createElement('button');
        userPost.classList.add('button-style');
        userPost.innerHTML = `Post of current user`;
        divPost.appendChild(userPost);

            userPost.onclick = function () {
            let postsBtn = document.createElement('div');
            postsBtn.classList.add('all-posts');
            document.body.appendChild(postsBtn);

        for (const post of posts) {

                let divPosts = document.createElement('div');
                divPosts.classList.add('div-posts');
                divPosts.innerHTML = `<p>${post.title}</p>`;
                postsBtn.appendChild(divPosts);

                let button = document.createElement('button');
                button.classList.add('Btn-Class');
                button.innerText = `Post details`;
                divPosts.appendChild(button);

                button.onclick = () => {
                    location.href = `../Post details/post-details.html?id=${post.id}`;

                };
            }
        };
    });
