/*
    const myPromise = new Promise(function (resolve, err) {
        setTimeout(function () {
            console.log("Inside A Promise");
            resolve()
        },1000)
    })
    myPromise.then(function () {
        console.log("Calling then() ");
    })
    // op -> Inside A Promise Calling then()
    */

/*
    new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Inside Promise...");
            resolve()
        }, 1000)
    }).then(() => {
        console.log("Inside then()");
    })
    // op -> Inside A Promise Calling then()
*/
/*
    new Promise((resolve, reject) => {
        setTimeout(function () {
            console.log("Inside SetTimeOut");
            resolve({
                userName: 'Harshit Soni',
                password: 'Harshit@123'
            })
        }, 1000)
    }).then((user) => {
        console.log(user);
    })
    // op -> Inside SetTimeOut { userName: 'Harshit Soni', password: 'Harshit@123' }
*/

/*
    new Promise((resolve, reject) => {
        setTimeout(() => {
            const isError = true
            if (isError) {
                resolve({
                    userName: 'Harshit Soni',
                    password: '12345'
                })
            } else {
                reject('ERROR :: Something Went Wrong')
            }
        }, 1000)
    }).then((user) => {
        console.log(user);
        return user.userName
    }).then((userName) => {
        console.log("UserName :: " + userName);
    }).catch((err) => {
        console.log(err);
    }).finally(() => {
        console.log("Your Operation is done or not? ");

    })
    // if isError = false then output will be ERROR :: Something Went Wrong (Finnally)
    // if isError = true then output will be { userName: 'Harshit Soni', password: '12345' } UserName :: Harshit Soni (finally)
*/

/*
    const MyPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            const isError = false
            if (isError) {
                resolve({
                    userName: 'JavaScript',
                    password: '123'
                })
            } else {
                reject('ERROR :: Something Went Wrong In JS')
            }
        }, 1000)
    })

    async function GetNewPromiseData() {
        try {
            const data = await MyPromise
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    }
    GetNewPromiseData()
    // if isError = false then output will be { userName: 'JavaScript', password: '123' }
    // if isError = true then output will be ERROR :: Something Went Wrong In JS
*/

//Fetch the Data come in URL 
// Method one 
async function GetAllUserFromUrl() {

    try {
        const dataByUrl = await fetch('https://api.github.com/users')
        const jsonData = await dataByUrl.json()
        console.log(jsonData);
    } catch (error) {
        console.log("Error: " + error);
    }
}
// GetAllUserFromUrl()

// MethodTwo 
fetch('https://api.github.com/users')
    .then((response) => {
        return response.json()
    }).then((data) => console.log(data))
    .catch((error) => console.log(error))
    .finally(() => console.log("Operation Done"))
