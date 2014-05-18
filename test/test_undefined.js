test("emptyObject", function(){
    var data={};
    var result={};
	equal(identity(data),result, "returns empty object");
});

test("primitiveType",function(){
	var data=1;
	var result=1;
	equal(identity(data),result, "returns 1 ");
});

test("nullValue",function(){
	var data=null;
	var result = null;
	equal(identity(data),result, "returns null object");
});

test("validData",function(){
	var data={name:"Uday", roll:1};
	var result={name:"Uday", roll:1};
	equal(identity(data),result,"Returns valid data")
});

test("undefined",function(){
	var data=undefined;
	var result= undefined;
	equal(identity(data),result,"Returns undefined")
});
