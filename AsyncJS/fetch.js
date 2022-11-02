fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then(data => {
        let fakeOutput = '';
        data.forEach(item => fakeOutput += `<img src=${item.image} /><h4>${item.title}</h4><p>${item.price}</p>`);
        document.body.innerHTML = fakeOutput;
    });

// async function fetchPosts(){
//     const res = await fetch('https://jsonplaceholder.typicode.com/posts');
//     const posts = await res.json();
//     let output = '';
//     posts.forEach(post => output += `<h4>${post.title}</h4><p>${post.body}</p>`);
//     document.body.innerHTML = output;
// }

// fetchPosts()