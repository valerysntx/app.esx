
var Header = {
	parse: function(){ 
		return System.import('/templates/header.md!md')
							.then((html)=>{ 
								console.log(html); 
								return html;
							});
	},
	html: function(){ return Header.parse() }
};

export {Header}


