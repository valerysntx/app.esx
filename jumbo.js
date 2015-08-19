import * as html from './templates/jumbo.md!md';

var Jumbo = {
	parse:  function(){ 
		return html;
	},
    html: function(){ return Jumbo.parse(); }
};

export {Jumbo}


