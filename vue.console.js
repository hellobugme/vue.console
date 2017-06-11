if(Vue){
    ['log', 'info', 'warn', 'error'].forEach(function(api){
        var _api = console[api];
        console[api] = function(){
            _api.apply(console, [].slice.call(arguments).map(function(arg){
                return typeof arg === 'object' ? JSON.parse(JSON.stringify(arg)) : arg;
            }));
        };
    });
}