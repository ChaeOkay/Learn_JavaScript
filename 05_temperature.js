function f2c(degrees){
  var c = Math.round(((degrees - 32) / 1.8));
  return c;
}; 

function c2f(degrees){
  var f = ((degrees * 1.8) + 32);
  return f;
};

function Temperature(){
  var f = 0;

  this.setFahrenheit = function(degrees){
    f = degrees;
  };

  this.fahrenheit = function(){
    return f;
  };

};
