'use strict';

let modules = [{name:'module1',init() {}},{name:'module2',init(){throw new Error('init(): Critical data missing.')}}];

const reportError = function(critical, msg, userMsg) {
    if (critical){
        const alertMsg = document.querySelector('#alertMessage');
        alertMsg.innerHTML = userMsg;
        document.getElementById('overlay').style.display = 'flex';
    }
    
    logError(critical, msg);
}

function logError(sev, msg){};


for (let mod of modules) {
    try {
        mod.init();
    } catch(err) {
        reportError(true, `${mod.name} did not load. ${err.message}`, `The ${mod.name} module did not load and the application will not run. Reload page to try again.`);
    }
    
}






