define('aModule', 
    ['formatName', 'upperCaseName'], 
    
    function ( formatName, upperCaseName ) {
    
        var aModule = {
            doNameStuff:function(name){
                return upperCaseName(formatName(name));
            }
        }
 
        return aModule;
});


require(['nameUtilities'], function ( nameUtilities ) {

  nameUtilities.doSomething();
});