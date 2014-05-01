test("emptyObject", function(){
    var data={};
    var result=[];
	equal(pairs(data),result, "returns empty object");
});

test("primitiveType",function(){
	var data=1;
	var result=[];
	equal(pairs(data),result, "returns empty object");
});

test("nullValue",function(){
	var data=null;
	var result = [];
	equal(pairs(data),result, "returns empty object");
});

test("validData",function(){
	var data={name:"Uday", roll:1}
	var result=[["name","Uday"],["roll",2]];
	equal(pairs(data),result,"Returns valid data")
});