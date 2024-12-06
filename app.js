//Sum
function sum(array){
    let sum = 0;
    for( let i = 0; i < array.length; i++) {
        sum += array[i];
        return sum;
    }
}

//Average
function average(array){
    let average = 0;
    return sum(array) / array.length;
}

//Longest String
function longestString(array) {
    let longest = "";
    for( let i = 0; i < array.length; i++) {
        if (longest.length < array[i].length)
            longest = array[i];
    }

    return longest;
}

//Longer than n
function longerThanN(array) {
    let n = array[array.length - 1];
    resultArray = [];
    for (let i = 0; i < array.length - 1; i++) {
        if (array[i].length > n)
            resultArray.push(array[i]);
    }

    return resultArray;
}

//Number between 1 and n
function numberBetween(n) {
    if (n == 1)
        return 1;
    

    console.log(numberBetween(n -1));
    console.log(n);

}

numberBetween(8);

// PART 2: Thinking Methodically 

let arr = [{ id: "42", name: "Bruce", occupation: "Knight", age: "41" }, 
{ id: "48", name: "Barry", occupation: "Runner", age: "25" }, 
{ id: "57", name: "Bob", occupation: "Fry Cook", age: "19" }, 
{ id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" }, 
{ id: "7", name: "Bilbo", occupation: "None", age: "111" }]

let sortedArray = [...arr].sort((a, b) => a.age - b.age);

let filteredArray = [...arr].filter(a => a.age <= 50);

let mappedArray = [...arr].map(person => ({
    id: person.id,
    name: person.name,
    job: person.occupation,
    age: person.age + 1
}));

let sumAge = [...arr].reduce((total, person) => sum + person.age, 0);

let averageAge = sumAge / arr.length


//Part 2

let person = {
    name:"didwef",
    age:0,
    updated_at:date = {
        date:"9Am"
    }
};
function incrementAge(person) {
    person.age++;
}

function incrementAgeCopy(person) {
    newArray = person;
    newArray.age++;
    return newArray;

}

//Part 5
/*

How many of the scripts could be turned into functions?
    All sections of code that serve a particular function
What would the parameters look like? What kind of returns should they have?
    Parameters would be the necessary variables and the returns should be the goal of the function
Could you package your code into even smaller blocks, creating helper functions?
    You could
What else could be changed to optimize the code, knowing what you now know?
    Modularizing the code, Single Responsiblity Principle






*/