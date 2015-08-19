import ko from "knockout";

import {Header} from "header";
import {Jumbo} from "jumbo";

var ApplicationViewModel = {
     initialize:  function (){
     	
     	Promise.all( [Header.parse(), Jumbo.parse()] ).then( ([header, jumbo]) => {
     		//bind to DOM parsed markdown...
     		ko.applyBindings({
	  				header: ko.observable(  header ),
      				jumbo: ko.observable( jumbo )
       		});

     	});

	 			  
	}
}

export {ApplicationViewModel}
  
 
 	
