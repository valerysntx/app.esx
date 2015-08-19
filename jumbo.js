
var Jumbo = {
	parse:  function(){ 
		return System.import('/templates/jumbo.md!md')
							.then((html)=>{ 
								console.log(html); return html;
							});
	}
};

export {Jumbo}


