var asyncFunction =  function (func) {
	return new Promise((resolve) => {
    			return resolve(func()); 
  	});
}

export {asyncFunction}