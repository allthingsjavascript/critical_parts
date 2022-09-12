'use strict';

let modules = [{name:'module1',init() {}},{name:'module2',init(){throw new Error('init(): Critical data missing.')}}];




for (let mod of modules) {
    mod.init();
}






