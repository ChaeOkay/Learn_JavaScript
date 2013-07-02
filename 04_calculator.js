function Calculator(){
	var total = 0;

	this.value = function(){
		return total;
	};

	this.add = function(number){
		total += number;
	};

	this.subtract = function(number){
		total -= number;
	};

	var rpn = [];

	this.push = function(number){
		rpn.push(number);
	};

	this.plus = function(){

		if (rpn.length == 1){
			total += rpn.pop();
		} else if (rpn.length > 1){
			total += rpn.pop();
			total += rpn.pop();
		} else {
			throw "calculator is empty"; //not being thrown
		};
	};

	this.minus = function(){
		if (rpn.length == 1){
			total -= rpn.pop();
		} else {
			var num2 = rpn.pop();
			var num1 = rpn.pop();
			total += (num1 - num2);
		};
	};

	this.divide = function(){ 
		if (rpn.length == 1){
			total = (rpn.pop() / total)
		} else {
			var num2 = rpn.pop();
			var num1 = rpn.pop();
			total = (num1 / num2);
		};
	};

	this.times = function(){ 
		if (rpn.length == 1){
			total *= rpn.pop();
		} else {
			total = rpn.pop() * rpn.pop();
		};
	};	

}