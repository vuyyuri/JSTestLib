var pairs = function(obj){
	var result=[];
	for(var key in obj){
		if(obj.hasOwnProperty(key))
			result[key]=obj[key];
	}
	return result;
}

