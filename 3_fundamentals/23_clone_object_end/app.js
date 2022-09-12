
let obj = {
  name: 'Steven',
  number: 0,
  settings: {
    role: 'user'
  }
};

let obj1 = Object.assign({}, obj);

let obj2 = {...obj};

let obj3 = JSON.parse(JSON.stringify(obj));