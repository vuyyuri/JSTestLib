var unique = function(arr){
	if(arr===null) return;
	var result=[];
	for(var i=0,len=arr.length; i<len;i++ ){ 
		for(var j=i+1;j<arr.length; j++){
			if(arr[i]=== arr[j])
				arr.splice(j,1);
		}
		result.push(arr[i]);
	}
	return result;
}