
function add(a,b){
  a = a+b;
  return a;
}

function multiply(a,b){
  a = a*b;
  return a;
}

let dowhatever = function (a,b){
  a = multiply(a,b);
  console.log(`here are your two numbers ${a} , ${b}`);
};


let calc = function  (num1, num2, callback){
  num1 = add(num1,num2);
  return callback(num1,num2);
};

console.log(calc(2,3, dowhatever));
