var isFunction = function(obj){
	 return toString.call(obj)==='[object function]';
}

var isArgument = function(obj){
	return obj.hasOwnProperty('callee');
}

