
var Iframe  = {
	parse:  function(){ 
		return System.import('Iframe.html!text').then((html)=>{ 
								console.log(html); 
								return html;
							});
	},
	exec: function(){
		parse();		
	}
};

export {Iframe}


