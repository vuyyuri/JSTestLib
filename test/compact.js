var compact = function(arr){
	var result=[];
	for(i=0,len=arr.length;i<len;i++){
		if(arr[i]!==null && arr[i]!==false && typeof arr[i] !== 'undefined' && !isNaN(arr[i]))
			result.push(arr[i]);
	}
	return result;
}
