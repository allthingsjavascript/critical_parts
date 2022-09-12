//'use strict';
const funct1 = function() {
  console.log(1, this);
  const funct2 = function() {
      console.log(2, this);
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
  };

  funct2();
};

funct1();
