export default timeout = function(ms) {
	return new Promise((resolve) => {
    			setTimeout(resolve, ms);
  	});
};
