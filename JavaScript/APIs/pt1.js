import axios from "axios";

axios.get('https://jsonplaceholder.typicode.com/posts/1')
    .then(function (response) {
        //handle success
        let stringified = JSON.stringify(response.data);
        let parsed = JSON.parsed(stringified);
        console.log(stringified);
        console.log(parsed);
    })
    .catch(function (error) {
        // handle error
        console.log(error);
    });

console.log("this should log out first! :(")