import ko from "knockout";

import {Header} from "header";
import {Jumbo} from "jumbo";
import {Iframe} from 'Iframe';

var ApplicationViewModel = {
     
     initialize:  function (selector = '#ApplicationViewModel'){
        
     	Promise.all([ Header.parse(), Jumbo.parse(), Iframe.parse() ])
        .then( ([header, jumbo, iframe]) => {
     		//bind to DOM parsed markdown...

            var rootNode = document.querySelector(selector);

            Object.defineProperty(rootNode,"vm",{ 
                get: function(){
                   return {
                        header: ko.observable(  header ),
                        jumbo: ko.observable( jumbo ),
                        iframe: ko.observable ( iframe )
                    }
                }
            });
        });

	}
}

export {ApplicationViewModel}


