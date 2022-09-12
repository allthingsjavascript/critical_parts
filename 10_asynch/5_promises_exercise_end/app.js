'use strict';

// Use the fetch API to retreive the list of todos from the JSONPlaceHolder site. Once retrieved, filter the list to include only todos for user # 2. Also, include only the todos that have not been completed. Finally, of that list build an array that contains only the title information for those todos.

const isUser = (id, obj) => obj.userId === id;

// const isUser2 = isUser.bind(null, 2);

const isNotComplete = obj => !obj.completed;

const getTitle = obj => obj.title;

fetch('https://jsonplaceholder.typicode.com/todos')
  .then(response => response.json())
  .then(json => {
    let posts = json.filter(isUser.bind(null, 2))
      .filter(isNotComplete)
      .map(getTitle);
    console.log(posts);
  })
  .catch(msg => console.error('Problem with fetch: ' + msg));


