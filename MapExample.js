const students = [
    {firstName: "Abhishek", lastName: "Thakur", rollNo: 01, age: 28},
    {firstName: "Swayam", lastName: "Pandey", rollNo: 02, age: 45},
    {firstName: "Satyam", lastName: "Prakash", rollNo: 03, age: 61},
    {firstName: "Avinash", lastName: "Kumar", rollNo: 05, age: 21},
    {firstName: "Anmol", lastName: "Singh", rollNo: 04, age: 28}
];

//List full names of students
const fullNames = students.map((x) => x.firstName + " " +x.lastName);
console.log(fullNames);

const output = students.reduce(function(acc, curr){
    if (acc[curr.age]){
        acc[acc.age] = ++acc[curr.age];
    }else{
        acc[curr.age] = 1;
    }
    return acc;
},{});

console.log(output); //{ '21': 1, '28': 2, '45': 1, '61': 1, undefined: 2 }

//filter persons whose age is less than 30
const studs = students.filter((x) => x.age < 30);
console.log(studs);

//filter persons whose age is less than 30 and print first names only
const studs2 = students.filter((x) => x.age < 30).map((x) => x.firstName); //chaining map,filter
console.log(studs2); //[ 'Abhishek', 'Avinash', 'Anmol' ]








