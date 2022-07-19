//
// any rwquested data is coming from the back end as an array of object
// [ {}, {}, {}, {}]

// function test(x) {
//   console.log(x);
// }

// test([{ id: 1, title: "hamada, age: 50" }]);

/*
function test() {
  return {
    x: 1,
    y: 2,
    z: 3,
  };
}

let obj = test();

console.log(obj);

// */

// function return object  ... we use to send request and bringing data

// it's called XMLHTTP request

// let obj =  new XMLHttpRequest();
// console.log(obj);

// let xhttp{
//     onload:''
//     open:''
//     send: ''
//     responseText:''
// }

/*
const xhttp = new XMLHttpRequest(); // this function returns object

xhttp.onload = function () {
  console.log(JSON.parse(xhttp.responseText));
}; // the response  to the order / request

xhttp.open("GET", "https://jsonplaceholder.typicode.com/users"); // this is the call for request
xhttp.send(); // this is the sending od the request to get users.

let o = {
  name: "amiroba7",
  username: "ababamoba7",
};

*/
/*

const xhttp = new XMLHttpRequest();

xhttp.onload = function(){
  console.log(JSON.parse(xhttp.responseText));
};

xhttp.open("GET", "https://jsonplaceholder.typicode.com/users");
xhttp.send();  // send request to get users
*/

// convert string to array
// json.parse()====> responsible for converting and removing "" from the array

// promises [ RESOLVE] ===> means order is completed
// what if a problem/ responce happend it's called promises [REJECT]

// Fetch it's a kind of promise
// promise is  something that will happen in future .

/*
fetch("https://jsonplaceholder.typicode.com/users") // promise
  .then(function (test) {
    test
      .json() // considered as promise so required then and catch
      .then(function (data) {
        console.log(data);
      })
      .catch();
  }) // resolve // the parameter carries info about the request and the object inside
  // carries info about the response.
  // inside is also JSON responsible to bring the data.

  .catch(function (test) {}); // reject
*/

/*
function fetchUsers() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      for (var i = 0; i < data.length; i++) {
        console.log(data[i].email);
      }
    })
    .catch((err) => {
      console.log(err);
    });
}

fetchUsers();

*/

/*
// shorter method
fetch("https://jsonplaceholder.typicode.com/users")
  .then(function (res) {
    return res.json();
  })

  .then(function (data) {
    console.log(data);
  })

  .catch(function (err) {
    console.log(err);
  });


*/

/*

// arrow function # search it

fetch("https://jsonplaceholder.typicode.com/users")
  .then((res) => {
    return res.json();
  })

  .then((data) => {
    console.log(data);
  })

  .catch((err) => {
    console.log(err);
  });

  */

// callback function   to do somethinf and then annother thing will finish

// cb callback) is going to look as a parameter to the function


/*
function code(c) {
  c();
}

code(function () {
  console.log("hello call back ");
});
*/

// fucntion ccode will work and after it another function will work
// we call this call back function