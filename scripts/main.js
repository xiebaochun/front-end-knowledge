
requirejs.config({
    //By default load any module IDs from js/lib
    baseUrl: 'scripts/libs',
    //except, if the module ID starts with "app",
    //load it from the js/app directory. paths
    //config is relative to the baseUrl, and
    //never includes a ".js" extension since
    //the paths config could be for a directory.
    paths: {
        jquery: 'jquery/1.7.2/jquery',
        extendsMethod:'modules/jsExtendsMethod',
        jm:'jquery-mobile/jquery.mobile-1.4.5'
    }
});
require(['jquery','extendsMethod','jm'],function($,extendsMethod,jm){
	console.log($);
	//extendsMethod.run();
});

