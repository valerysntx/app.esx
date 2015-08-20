export default vtree = {
 dom: 
[].slice.call(document.body.childNodes).map(function(el){
 return el 
     && el.nodeType==8  
     && /iframe/i.test(el.nodeValue)
 	  && el.nextSibling.nextSibling;
}).filter(Boolean).filter(function(el){

 var html = el.nodeValue.replace(/(^<!--|-->)/i,'');
 el.parentNode.innerHTML+=html;

})      
}
