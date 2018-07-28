var numbers = process.argv;


var numArray = [];
for(var i = 2 ;i < numbers.length; i++){
    numArray.push(parseFloat(numbers[i]));
}
//or you can use that

<!-- var numArrayMapped = numbers.slice(2).map(function(arg){ return parseFloat(arg);}); -->

console.log(numArray.sort());
