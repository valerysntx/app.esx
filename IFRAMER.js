
var Iframe  = {
	parse:  function(){ 
		return System.import('oneTwoThree.html?').then((html)=>{ 
								console.log(html); return html;
							});
	},
	exec: function(){
		parse();		
	}
};

export {Iframe}


