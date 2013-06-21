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

	this.push = function(){
		
	};
}