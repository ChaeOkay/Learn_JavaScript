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

	return result
};