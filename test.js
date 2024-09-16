// --- Section 1: Coding Tasks (40 points) ---

// Task 1: Remove duplicates from an array of contacts
    // Implement your solution here

    let arr = ["0793654635", "0793656578",
          "0793656347", "0793654635", "0793656564", "0793656578"];

function removeDuplicates(arr) {
    let NewArr = [];
    arr.forEach(element => {
        if (!NewArr.includes(element)) {
            NewArr.push(element);
        }
    });
    return NewArr;
}
console.log(removeDuplicates(arr));


// Task 2: Merge two objects
function mergeObjects(obj1, obj2) {
   // Implement your solution here

   var obj1 = {1 : "Paivy", 2: "Develops"};
   var obj2 = { 3 : "Javascript"};
    
   Object.assign(obj1, obj2);
   // Printing object
   for (var key of Object.keys(obj1)) {
       console.log(key + " => " + obj1[key])
   }

}

// --- Section 2: Scenario-Based Questions (60 points) ---

// Scenario 1: Debugging
    // Implement your solution here

    function incrementArray(arr) {
        // Check if the input is a valid array
        if (!Array.isArray(arr)) {
            throw new Error('Array is not valid');
        }
    
        // Increment each element of the array by 1
        return arr.map(function(num) {
            if (typeof num !== 'number') {
                throw new Error('Array should contain only numbers');
            }
            return num + 1;
        });
    }
    const arr = [1, 2, 3, 4];
    console.log(incrementArray(arr));
    

// Scenario 2: Closures
function outer() {
    let count = 0;
    return function() {
        // Implement your solution here
        count++;
        return count;
    };
}
const counter = outer(); // create a closure
console.log(counter()); // Output: 1
console.log(counter()); // Output: 2
console.log(counter()); // Output: 3

// Scenario 3: Performance Optimization

//1. Memoization  results of expensive function calls to avoid repeated computations
//Useful in recursive algorithms like Fibonacci to prevent recalculating the same values.
// Dynamic programming uses memoization to improve time complexity, turning an exponential algorithm into linear time.
// 2. Lazy Loading
// Delays loading of resources until they’re needed, improving load time.
// Used for images, modules, or routes in large web apps.
// 3. Debouncing and Throttling
// Debounce: Delays execution until no new events trigger.
// Throttle: Limits execution to once every set interval.
// Applied in search inputs, scrolling, or window resizing.


// Scenario 4: Data Manipulation
    // Implement your solution here
    function getAdultNames(users) {
        // Filter users who are 25 or older and map to their names
        return users
            .filter(user => user.age >= 25)
            .map(user => user.name);
    }
    
    const users = [
        { name: 'Paivy', age: 18 },
        { name: 'Kimberly', age: 29 },
        { name: 'Arthur', age: 40 },
        { name: 'Simon', age: 22 }
    ];
    
    console.log(getAdultNames(users)); // Output: ['Kimberly', 'Arthur']
    

// Scenario 5: Asynchronous Data Handling
    // Implement your solution here
    async function fetchUserPosts(apiUrl) {
        try {
            const response = await fetch(apiUrl); // Fetch data from the API
            if (!response.ok) {
                throw new Error(`Error: ${response.status}`); // Handle HTTP errors
            }
            const data = await response.json(); // Parse the response as JSON
            return data; // Return the data
        } catch (error) {
            console.error('Failed to fetch user posts:', error); // Log errors
            throw error; // Optionally rethrow error for further handling
        }
    }
    const apiUrl = 'https://github.com/Paivy';
    fetchUserPosts(apiUrl)
        .then(posts => console.log(posts)) // Handle successful data
        .catch(err => console.error(err)); // Handle any errors
    


// Scenario 6: Memoization
    // Implement your solution here
    function memoize(fn) {
        const cache = {}; // Initialize an empty cache object
        
        return function(...args) {
            const key = JSON.stringify(args); // Create a unique key based on the arguments
            if (cache[key]) {
                return cache[key]; // Return cached result if it exists
            }
            const result = fn(...args); // Call the original function with the arguments
            cache[key] = result; // Store the result in the cache
            return result;
        };
    }
    
    // Example usage:
    const calculateFunction = (num) => {
        console.log('Calculating...');
        return num * 2;
    };
    
    const memoizedFunction = memoize(calculateFunction);
    
    console.log(memoizedFunction(5)); // Logs "Calculating..." and then "10"
    console.log(memoizedFunction(5)); // Returns cached result "10" without "Calculating..."
    
