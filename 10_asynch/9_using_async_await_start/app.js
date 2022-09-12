'use strict';

const filterPostsByUser = function(arr, userid) {
  return arr.filter(obj => obj.userId === userid);
};

fetch('https://jsonplaceholder.typicode.com/posts/')
  .then(response => response.json())
  .then(json => {
    let user1posts = filterPostsByUser(json, 1);
    console.log(user1posts);
  })
  .catch(msg => console.error('Error: ' + msg));