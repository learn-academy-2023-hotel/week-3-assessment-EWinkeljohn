// ASSESSMENT 3: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Prompt: Create a function that takes in a number (greater than 2) and returns an array containing the Fibonacci sequence. The length of the array is determined by the argument of the function.

// a) Create a test with expect statements for each of the variables provided.

describe("fibonacci", () => {
  it("takes in a number (greater than 2) and returns an array containing the Fibonacci sequence. The length of the array is determined by the argument of the function", () => {
    expect(fibonacci(6)).toEqual([1, 1, 2, 3, 5, 8])
    expect(fibonacci(10)).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55])
  })
})
// Test passes when the expect statements are run individually, but unable to figure out why it will not pass with both expect statements live

const fibonacciLength1 = 6
// Expected output: [1, 1, 2, 3, 5, 8]

const fibonacciLength2 = 10
// Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

// b) Create the function that makes the test pass.

const array = [1, 1]
// declare variable for first 2 numbers in sequence
const fibonacci = (number) => {
// decalre fibonacci function with a parameter to take in a number
  for (let i=2; i < number; i++){
    // create for loop that starts at the 2nd index and iterates the number of times indicated by the variable
    let sequenceArray = (array[i-1] + array[i-2])
    // declare new variable for value calculated adding the values at index-1 and index-2 of const array
    array.push(sequenceArray)
    // push the new values to the end of the array
  }
  return array
  // return the new array
}
// console.log(fibonacci(fibonacciLength1))
// Output --> [1, 1, 2, 3, 5, 8]
// console.log(fibonacci(fibonacciLength2))
// Output --> [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]




// Pseudo code:

// --------------------2) For the following prompt, use ChatGPT or an equivalent AI tool to help you solve the problem. The prompt will require the use of a JavaScript method called Object.values()
// Prompt: Create a function that takes in an object and returns an array of the object's values sorted from least to greatest.

// a) Create a test with expect statements for each of the variables provided.

describe("sort", () => {
  it("takes in an object and returns an array of the object's values sorted from least to greatest", () => {
    expect(sorter({
      sunday: 90,
      monday: 30,
      tuesday: 20,
      wednesday: 15,
      thursday: 30,
      friday: 15,
      saturday: 60
    })).toEqual([15, 15, 20, 30, 30, 60, 90])
    expect(sorter({
      sunday: 100,
      monday: 10,
      tuesday: 45,
      wednesday: 60,
      thursday: 20,
      friday: 15,
      saturday: 65
    })).toEqual([10, 15, 20, 45, 60, 65, 100])
  })
})

// Both tests pass

const studyMinutesWeek1 = {
  sunday: 90,
  monday: 30,
  tuesday: 20,
  wednesday: 15,
  thursday: 30,
  friday: 15,
  saturday: 60
}
// Expected output: [15, 15, 20, 30, 30, 60, 90]

const studyMinutesWeek2 = {
  sunday: 100,
  monday: 10,
  tuesday: 45,
  wednesday: 60,
  thursday: 20,
  friday: 15,
  saturday: 65
}
// Expected output: [10, 15, 20, 45, 60, 65, 100]

// b) Create the function that makes the test pass.



const sorter = (object) => {
  // defines the function with a parameter to accept an object
  let values = Object.values(object)
  // decalre a variable for the objects extracted from the argument with Object.values
  return values.sort(function(a,b){return a - b})
  // return the values variable sorted numerically by defining the sort behavior using sort.function(a,b){return a - b}
  }
  console.log(sorter(studyMinutesWeek1))
  // Output --> [15, 15, 20, 30, 30, 60, 90]
  console.log(sorter(studyMinutesWeek2))
  // Output --> [ 10, 15,  20, 45, 60, 65, 100]

