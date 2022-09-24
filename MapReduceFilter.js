const arr = [5,1,3,2,6];
// Double [10,2,6,4,12]
// Triple [15,3,9,6,18]
// Binary ["101", "1","11","10","110"]

//Map
function double(x){
    return x*2;
}
function triple(x){
    return x*3;
}
// const output = arr.map(double);
// console.log(output);  //[ 10, 2, 6, 4, 12 ]

// const output = arr.map(triple);
// console.log(output); //[ 15, 3, 9, 6, 18 ]

// function binary(x){
//     return x.toString(2);
// }
// const output = arr.map(binary);
// console.log(output); //[ '101', '1', '11', '10', '110' ]

// const output = arr.map(function binary(x){ //Higher order function
// return x.toString(2);
// });
// console.log(output); //[ '101', '1', '11', '10', '110' ]

const output = arr.map((x) => x.toString(2)); //using arrow function
console.log(output);

//filter

function isOdd(n){
    return n%2 != 0; //or x%2 will check in isOdd func
}
const oddNos = arr.filter(isOdd);
console.log(oddNos);

const odds = arr.filter((n) => n%2 ); //arrow func
console.log("odd nums are: "+odds);

const evens = arr.filter((n) => n%2===0 ); //arrow func
console.log("even nums are: "+evens);

const greaterThan = arr.filter((n) => n > 4); //arrow func
console.log("values greater than 4: "+greaterThan);

//syntax of reduce:  Array.reduce( (accumulator,curr_value) => expression ), intialValue)

function findSum(arr){
    let sum = 0;
    for (let i = 0; i < arr.length; i++){
        sum = sum + arr[i];
    }
    return sum;
}
console.log(findSum(arr));

//this can be executed with reduce func
const sum1 = arr.reduce(function(accumulator,curr_value){
    accumulator = accumulator + curr_value;
    return accumulator;} , 0);
    console.log(sum1);

    function findMax(arr){
        let max = 0;
        for (let i = 0; i < arr.length; i++){
            arr[i] > max;
            max = arr[i];
        }
        return max;
    }
    console.log("Maximum in array: " +findMax(arr));

    //using reduce function

    const max1 = arr.reduce(function(max,curr){
        if (curr > max){
            max = curr;
        }return max;
    },0);
    console.log(max1);

    








