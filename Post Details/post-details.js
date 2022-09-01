let url1 = new URL(location.href);
let id1 = url1.searchParams.get('id');
let post = +url1.searchParams.get('post');


let wrap = document.createElement('div');
wrap.classList.add('wrap-block');
document.body.appendChild(wrap);


        fetch(`https://jsonplaceholder.typicode.com/posts/${id1}`)
    .then(response => response.json())
    .then(posts => {

        let divH2 = document.createElement('div');
        divH2.classList.add('clas-h2');
        wrap.appendChild(divH2);

        for (let postsKey in posts) {

            let h3 = document.createElement('h3');
            h3.innerText = `${postsKey} - ${posts[postsKey]}`;
            divH2.appendChild(h3);
        }
});




fetch(`https://jsonplaceholder.typicode.com/posts/${id1}/comments`)
    .then(response => response.json())
    .then(comments => {

        let kast = document.createElement('div');
        kast.classList.add('kast');
        document.body.appendChild(kast);

        let comentar = document.createElement('div');
        comentar.classList.add('block-comment');
        comentar.innerHTML = `<h2>Comments</h2>`;
        kast.appendChild(comentar);

        let comm = document.createElement('div');
        comm.classList.add('class-com');
        document.body.appendChild(comm);

        for (let commentsKey in comments) {
            let divCom = document.createElement('div');
            divCom.classList.add('div-Com');
            divCom.innerText = `${comments[commentsKey].body}`;
            comm.appendChild(divCom)
        }
    });

