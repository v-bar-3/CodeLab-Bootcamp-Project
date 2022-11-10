import axios from "axios";

let response = await getCall();
console.log(response.data);
console.log("this should print out last!");

async function getCall() {
    let response = axios.get('https://jsonplaceholder.typicode.com/posts/1');
    console.log("in the function call!");
    return response;
}


//When to use either? They are interchangeable, they function similarly.
//If we have code reliant on API call, we would have to use ugly callbacks
//If we have small specific set of code, usable.
//Otherwise, we should use async and await

// - **.then** and **.catch** callbacks - these are two functions called in the case that your API call either succeeds or fails, storing code that should be ran right after the call completes in either case.
// - **async/await** keywords - these are keywords that force your program to pause and wait for the line with an `await` on it to finish.