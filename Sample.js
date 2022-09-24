let array1 = ["rat", "cat", "bat", "snake", "lizard"];
console.log("array1 elements:" +array1);

let stack1 = [array1];  //Stack operations

let stack2 = stack1.push("Lion");
console.log("elements in stack1 are: " +stack1);
let pop1 = stack1.pop();
console.log("elements in pop1 are: " +pop1);

console.log(stack1.concat(stack2));


/*create a javascript file using map data structure
'a', 1
'b',22
'c',32
'd',65
const map1 = new Map();*/ 

const map1 = new Map();
map1.set("a" ,1);
map1.set("b",22);
map1.set("c",32);
map1.set("d",65);

console.log(map1);

console.log(map1.get("d"));

map1.set("a", 25);
console.log(map1.get("a"));

console.log(map1.size); 
map1.delete("b");
map1.delete("c");
map1.delete("d");
console.log(map1);


