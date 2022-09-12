'use strict';

let urls = ['https://jsonplaceholder.typicode.com/todos', 'https://jsonplaceholder.typicode.com/posts', 'https://jsonplaceholder.typicode.com/comments'];

const retrieveData = async function(urls) {
  const [todos, posts, comments] = await Promise.all(urls.map(url => fetch(url).then(resp => resp.json())));
  console.log(todos);
  console.log(posts);
  console.log(comments);
};

retrieveData(urls);