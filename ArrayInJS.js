let origDogs = ["Bulldog", "Beagle", "Labrador"];
let cats = new Array ("Americal Curl", "Bengal");
let birds = new Array ("Falcons", "Duck", "Flamingoes");

//Array copy Elements
let slicedDogs = origDogs.slice(1,2);
console.log("sliced dogs: "+slicedDogs);

let copyDogs = [...origDogs]; //this will copy elemnts of the given array
console.log(copyDogs);
let dogs = origDogs.slice(0);
console.log("sliced dogs: "+dogs);

//Stack function (LIFO) push, pop
let pushDog = dogs.push("Golden Retriever");
console.log(dogs); //[ 'Bulldog', 'Beagle', 'Labrador', 'Golden Retriever' ]
let popDog = dogs.pop();
dogs[dogs.length] = "Poodle";
console.log(dogs);  //  [ 'Bulldog', 'Beagle', 'Labrador', 'Poodle' ]

//Add and Remove from first
let addFirst = dogs.unshift("Golden Retriever");
let shiftDog = dogs.shift();
console.log(addFirst); //5
console.log(shiftDog); //Golden Retriever

//Atomic add and removeelements (where, how many to remove , element list)
dogs.splice(2,1,"Pug", "Boxer");
console.log(dogs); //[ 'Bulldog', 'Beagle', 'Pug', 'Boxer', 'Poodle' ]


const number = [111,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
const words = ["This", "That", "Those", "Which", "Whose", "Whome"];
// console.log(number.length);
// console.log(number.reverse());
// console.log(number.sort());

let num = [2,6,1,3,4,5,8,9,7];  // sorting the elemnts
console.log(num.sort(comparingNumbers));
function comparingNumbers(a,b){
    return a-b;
}



// const nums1 = [1,2,3,4,5];
// const nums2 = [6,7,8,9,10];
// console.log(nums1.join("-")); //concanating the inner elements and will return as string using separator

// console.log(nums1.concat(nums2)); // it will join the two arrays

// let nums3 = nums1.concat(nums2);
// console.log(tyoeof(nums3));

// let nums4 = nums1.join("-");
// console.log(typeof(nums4));

let intArray = [11,12,13,14,15,16,17,18,19,20];
console.log(intArray.slice(4)); //it will cut and show the array after given index
//(intArray.splice(start, deleteCount, item1, ..., itemN));

console.log(intArray.slice(4,7));
console.log(intArray);

console.log(intArray.splice()); //will remove elements from array
console.log(intArray.splice(1,4))//will remove the elements of the range given

console.log(number.slice(15,20));