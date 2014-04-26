var some = function(val,func){
	var result = false;
	if (val === null) return result;
	if(Object.prototype.toString.call(val)!=="[object Array]" && (result=func(val))) return result;
	for(var i=0, len=val.length;i<len;i++)
		if(func(val[i]) === true) return true;
	return result;
}