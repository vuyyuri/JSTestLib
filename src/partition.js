var isArray = function(arr){
	if(Object.prototype.toString.call(arr)==="[object Array]") return true;
	return false;
}

var partition = function(arr,func){
	var trueArr=[];
	var falseArr=[];
		for(var i=0,len = arr.length;i<len;i++){
		
			if(func(arr[i])){
				trueArr.push(arr[i]);}
			else{
				falseArr.push(arr[i]);
			}
		}
	
	return [trueArr, falseArr];
}

