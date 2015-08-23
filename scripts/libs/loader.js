/*	
*	Name:          Js file loader 
*	Author:        xiebaochun
*	Created date:  2015/08/20
*	Last update:   2015/08/20
*   Version:       0.0.1 
*/
var require;
!(function(global){
	var req;

    defaults = {
    	customRootPath:'./',
    };

    function req(name){
		load(defaults.customRootPath + name);
	}

	function load(path){
		var script = document.createElement('script');
		script.type = 'text/javascript';
		script.charset = 'utf-8';
        script.async = true;
		script.src = path+'.js';
		document.getElementsByTagName('head')[0].appendChild(script);
	}

	function config (options){
		defaults = extend(defaults,options);
	}

	function extend(defaults,options){	
		for(var i in defaults){
			for(var j in options){
				if(i === j){
					defaults[i] = options[j];
				}
			}
		}
		return defaults;
	}

	window.config = config;

	if(!require){
		require = req;
	}

	window.onload=function(){
		var main = document.getElementsByTagName('script')[0].getAttribute('data-main');
	    load('scripts/'+main);
	}

})(this);