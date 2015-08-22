import {css} from 'templates/header.css!';
import {html} from './templates/header.md!md';   

var Header = {
	parse: function(){ 
		return Promise.resolve( html )
	},
	html: function(){ 
		return Header.parse().then((html)=>{ 
			 return Promise.resolve( html ) ;
	    }); 
	}
};

export {Header}


