import ko from "knockout";

import {Header} from "header";
import {Jumbo} from "jumbo";

import {Iframe} from 'IFRAMER';

var ApplicationViewModel = {
     initialize:  function (){

     	Promise.all( [Header.parse(), Jumbo.parse(), Iframe ] ).then( ([header, jumbo, iframe]) =>
        {
     		//bind to DOM parsed markdown...        //
        ApplicationViewModel.data = {
            header: ko.observable(  header ),
            jumbo: ko.observable( jumbo ),
            iframe: ko.observable ( iframe ),
          };

     	ko.applyBindings(ApplicationViewModel.data);

     	});


	}
}

export {ApplicationViewModel}


