import * as html from './templates/header.md!md'; 

var Header = {
	parse: function(){ 
		return html;
	},
	html: function(){ return Header.parse() }
};

export {Header}


