var clone = function(arr){
	if(arr!==null && typeof arr!=='object') return arr;
	if(Object.prototype.toString.call(arr)==="[object Array]"){
		return arr.splice();
	}else{
		var result={};
		for(var key in arr){
			result[key]=arr[key];
		}
		return result;
	}
}