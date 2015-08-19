import {Injector} from 'injector';
var injector = Injector();

var SystemInjector = function(packageName){
			return new Promise((resolve, reject)=>{
		       return System.import(packageName).then((pkg)=>{ 
		       		injector.register(packageName,pkg); 
		        	return resolve(pkg);	
		       	 }).catch(reject);
			});
};

export {SystemInjector}
