var isFunction = function(obj){
	 if(typeof obj === 'function') return true;
	 return false;
}

var isArgument = function(obj){
	return obj.hasOwnProperty('callee');
}

