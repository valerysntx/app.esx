import {Injector} from 'injector';
var injector = Injector();

var SystemInjector = async function(packageName){
			return new Promise((resolve, reject)=>{
		      await return System.import(packageName).then((pkg)=>{ 
		       	
		       	injector.register(packageName,pkg); 
		        
		        return resolve(pkg);
		       	
		       	 }).catch(reject);
			});
};

export {SystemInjector}
