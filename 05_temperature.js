function f2c(degrees){
  var c = Math.round(((degrees - 32) / 1.8));
  return c;
}; 

function c2f(degrees){
  var f = ((degrees * 1.8) + 32);
  return f;
};

function Temperature(degrees){
  var f = 0;
  var c = 0;
  var unknown = degrees;

  this.setFahrenheit = function(degrees){
    f = degrees;
  };

  this.fahrenheit = function(){    //doesn't convert farenheit to celcius
    if (undefined != unknown){
      f = ((unknown * 1.8) + 32);
    }; 
    return f;
  };

  this.setCelcius = function(degrees){
    c = degrees;
  };

  this.celcius = function(){    //doesn't convert celcius to farenheit
    if (undefined != unknown){
      c = Math.round(((unknown - 32) / 1.8));
      return c;
    }; 
    return c;
  };

};
