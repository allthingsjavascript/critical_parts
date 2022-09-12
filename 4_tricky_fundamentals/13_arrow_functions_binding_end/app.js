

let obj = {
  name: 'Steven',
  funct3() {
      console.log(3, this);
      const funct4 = () => {
        console.log(4, this);
      };
      funct4();
  }
};
obj.funct3();

var controller = {
  data: "This is data",
  init() {
    let title = document.getElementById('title2');

    title.addEventListener('click', () => console.log(this.data));
  }
};

controller.init();