
test("primitiveType",function(){
	var data=1;
	var result=[];
	equal(compact(data),result, "returns empty object");
});

test("validData",function(){
	var data=[1,0,1]
	var result=[1,0,1];
	equal(compact(data),result,"Returns valid data")
});

test("validDatanull",function(){
	var data=[1,0,1,null,false,31]
	var result=[1,0,1,31];
	equal(compact(data),result,"Returns valid data")
});