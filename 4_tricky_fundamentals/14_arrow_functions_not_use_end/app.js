
let obj = {
  firstName: 'Steven',
  lastName: 'Hancock',
  /* fullName() {
      return `${this.firstName} ${this.lastName}`;
  } */
  fullName: () => `${this.firstName} ${this.lastName}`
};

console.log(obj.fullName());

const div = document.getElementById('title2');

div.addEventListener('click', () => {
  this.innerHTML = 'I was clicked.';
});