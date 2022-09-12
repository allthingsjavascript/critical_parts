
let cnt = 0;
let title = document.getElementById('title');

function titleClick(e) {
    cnt++;
    console.log('The number of times title has been clicked: ' + cnt);
    if (cnt > 5) {
        title.removeEventListener('click', titleClick);
    }
};

title.addEventListener('click', titleClick);
