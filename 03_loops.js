function repeat(msg, repeats) {
	var result = "";
	for (var i = 0; i < repeats; i++){
		result = result + msg;
	};
	return result;
};

function join(array_list, symbol){
	var delimeter = symbol || ""
	var result = ""

	if (delimeter == symbol){
		for (var i = 0; i < array_list.length-1; i++){
			result += array_list[i] + delimeter;
		};
		result += array_list[array_list.length-1]

	} else {
		for (var i = 0; i <= array_list.length-1; i++){
			result += array_list[i];
		};
	};

	return result;
};

function sum(numbers){
	var result = 0;
	for (var i = 0; i < numbers.length; i++){
		result += numbers[i];
	};
	return result;
};

function paramify(hash){

	var result = "";
	var sorted = new Array();
	var index = 0;

	for (var i in hash){
		sorted.push(i)
	}; 

	sorted.sort();

	for (var h in hash){
		result += sorted[index] + "=" + hash[sorted[index]] + "&"
		index += 1;
	};
	return result.slice(0,-1);
};