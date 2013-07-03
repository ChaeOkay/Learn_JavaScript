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

	var sorted = [];

	for (var key in hash){
		if (hash.hasOwnProperty(key)){
			sorted.push(key);
		};
	};

	sorted.sort();

	for (var i = 0; i < sorted.length; i++){
		result += sorted[i] + "=" + hash[sorted[i]] + "&"
	};

	return result.substr(0, result.length - 1);
};

/*
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty?redirectlocale=en-US&redirectslug=JavaScript%2FReference%2FGlobal_Objects%2FObject%2FhasOwnProperty
*/




