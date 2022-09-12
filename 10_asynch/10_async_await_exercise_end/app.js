'use strict';

// Create an async function that recieves a url and then retrieves the data. Show how to make use of the function to retrieve data from the JSONPlaceholder site.

const fetchData = async url => {
  try {
    let resp = await fetch(url);
    return resp.json();
  } catch(msg) {
    console.warn(msg);
  }
};

fetchData('https://jsonplaceholder.typicode.com/comments')
  .then(data => console.log(data));