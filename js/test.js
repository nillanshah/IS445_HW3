const start = Number(prompt("Enter start"));
const end = Number(prompt("Enter end"));
const step = Number(prompt("Enter step"));

function getRange(start, end, step){

  var diff = Math.abs(start - end);
  max_count = (diff / Math.abs(step)) + 1;
  var counter = 0;
  arr = [];

  while (counter < max_count){
    arr.push(start + (step * counter));
    counter++;
  }
  return arr;
}
function getSum(arr){
  var sum = arr.reduce((a, b) => a + b, 0);
  return sum;
}

function getBinary(arr){
  temp_arr = [];
  for (var x of arr){
    temp_arr.push((Number(x) >>> 0).toString(2));
  }
  return temp_arr;
}

function validInput(){
  if (!(step < 0 || step > 0)){
    var output = "Invalid integer input, please reload and try again";
    document.getElementById("invalidInput").innerHTML = output;
  } else {
    var range = getRange(start, end, step)
    document.getElementById("range").innerHTML = range;
    document.getElementById("sum").innerHTML = getSum(range);
    document.getElementById("binary").innerHTML = getBinary(range);
  }
}