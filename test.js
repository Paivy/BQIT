// --- Section 1: Coding Tasks (40 points) ---

// Task 1: Remove duplicates from an array of contacts
function removeDuplicates(arr) {
    // Implement your solution here

    let arr = ["HP", "Lenovo",
          "Dell", "HP", "Apple", "Lenovo"];

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

}

// Task 2: Merge two objects
function mergeObjects(obj1, obj2) {
   // Implement your solution here
}

// --- Section 2: Scenario-Based Questions (60 points) ---

// Scenario 1: Debugging
function incrementArray(arr) {
    // Implement your solution here
}

// Scenario 2: Closures
function outer() {
    let count = 0;
    return function() {
        // Implement your solution here
    };
}

// Scenario 3: Performance Optimization

// Scenario 4: Data Manipulation
function getAdultNames(users) {
    // Implement your solution here
}

// Scenario 5: Asynchronous Data Handling
async function fetchUserPosts(apiUrl) {
    // Implement your solution here
}


// Scenario 6: Memoization
function memoize(fn) {
    // Implement your solution here
}
