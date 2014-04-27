var map=function(array, func){
	var result= [];
	for(var i=0, len= array.length;i<len; i++)
		result.push(func(array[i]));
	return result;
};
