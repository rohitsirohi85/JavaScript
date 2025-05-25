// creating the promise one

const promiseOne = new Promise(function (resolve, reject) {
    // do async task
    // do DB calls

    setTimeout(function () {
        console.log("async task starting");
        resolve()   // used to connect promise with then in consuming
    }, 2000)  // run 2 sec later while running
})

//consuming the promises

promiseOne.then(function () {
    console.log("promise received");
})


// or we can do like this--

new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log("direct promise");
        resolve()
    }, 2000)
}).then(function () {
    console.log("promise completed");
})


// or we can pass the data as a parameter inside resolve to then

const promiseThree = new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log("starting promise three");
        resolve({ username: "Rohit", email: "Rohit@gmail" })
    }, 3000);
})

// consuming promise three

promiseThree.then(function (x) {   // in here x is the parameter which contain data inside teh resolve but coz resolve directly connected with then wso it directly send data to then
    console.log(x);
})




// or we can handle data and error via promise 4

const promiseFour = new Promise(function (resolve, reject) {
    let error = false
    setTimeout(function () {
        if (!error) {
            console.log("starting promise 4");
            resolve({ username: "rohit", password: "1234" })
        } else {
            reject("ERROR:Something went wrong");
        }
    }, 4000)
})

promiseFour.then(function (user) {   // here user is a parameter which contain data from resolve
    console.log(user);
    return user.username  // here i am only returning the username from user data
})
    // note: the username which we are returning is go to the next then with help of concept "chaining"
    .then(function (x) {   // so means inside this x is the username which returning in the previous then
        console.log(x);
    })
    .catch(function (err) {
        console.log(err)
    }).finally(() => {
        console.log("promise is either resolved or rejected");
    })


    // we can use promise by async await

    const promiseFive = new Promise(function (resolve, reject) {
        let error = false
        setTimeout(function () {
            if (!error) {
                console.log("starting promise 4");
                resolve({ username: "rohit", password: "1234" })
            } else {
                reject("ERROR:Something went wrong");
            }
        }, 4000)
    })

    async function consumePromiseFive() {
        try {
            const response = await promiseFive
            console.log(response);
        } catch (error) {
            console.log(error);
            
        }
     
    }

    consumePromiseFive();



    // now let's do some real time use case - let's fetch this api https://jsonplaceholder.typicode.com/users

    async function fetchApi() {
        try {
            const x = await fetch('https://jsonplaceholder.typicode.com/users')  // using fetch keyword to fetch api
            const response = await x.json()  // convert the string data to json
            console.log(response);
            
        } catch (error) {
            console.log(error);
            
        }
    }
    fetchApi()  // calling the function


    // or we can directly do this via fetch

    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response)=>{
         return response.json();
    }).then((data)=>{
        console.log(data);
    }).catch((error)=>{
        console.log(error);
        
    })




