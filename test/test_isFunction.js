test("emptyObject", function(){
    var data={};
    var result=[];
	equal(isFunction(data),false, "returns false");
});

test("primitiveType",function(){
	var data=1;
	equal(isFunction(data),false, "eturns false");
});

test("nullValue",function(){
	var data=null;
	equal(isFunction(data),false, "returns false");
});

test("validData",function(){
	var data=function(){};
	equal(isFunction(data),true,"returns true")
});