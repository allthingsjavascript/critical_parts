

let obj = {
  name: 'Steven',
  funct3() {
      console.log(3, this);
      const funct4 = function() {
        console.log(4, this);
      };
      funct4();
  }
};
obj.funct3();

