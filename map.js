var map=function(arrayArg, funcArg){
	var resultArray= new Array();
	for(var i=0, len= arrayArg.length;i<len; i++){
		resultArray[i]=funcArg(arrayArg[i]);
	}
	return resultArray;
};
