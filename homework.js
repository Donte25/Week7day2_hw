//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/
let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}

const displayFood = (person) => {
    for (let key in person) {
        if (Array.isArray(person[key])) {
            console.log(`${key}: ${person[key].join(', ')}`)
        }
        else if (typeof person[key] === 'shakes') {
            console.log(`${key}:`)
            for (let dict_key of person[key]) {
                console.log(`${dict_key}: ${person[key][dict_key]}`)
            }
        }
        else {
            console.log(`${key}: ${person[key]}`)
        }
    }
}

displayFood(person3)


//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Prototype
function Person(name, age) {
    this.name = name;
    this.age = age;
    
    // Use an arrow to create the printInfo method
    this.printInfo = () => {
        console.log(`Name: ${this.name}, Age: ${this.age}`);
    }

    // Create another arrow function for the addAge method that takes a single parameter
    // Adding to the age    
    this.addAge = (amt) => {
        this.age += amt;
    }
}

const person1 = new Person('Donte', 26)
const person2 = new Person('Peter Griffin', 42)
console.log(person1)
console.log(person2)
person1.addAge(3)
console.log(person1.age)


// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/
const checkString = str => {
    return new Promise((resolve, reject) => {
        if (str.length >= 10) {
            resolve('Big Word')
        }
        else if (str.length < 10) {
            resolve('Small Number')
        }
        else {
            reject('Unknown')
        }
    })
}

const str1 = checkString('racecar')
console.log(str1)

const output = async (input) => {
    checkString(input)
    const response = await checkString(input)
    console.log(response)
}

output('racecarracecar')
output('racecar')

