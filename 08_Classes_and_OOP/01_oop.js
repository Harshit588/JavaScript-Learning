//+++++++++++++++++++++++++ Object literals +++++++++++++++++++++++++++++++++++
// const user = {
//     userName: 'Harshit Soni',
//     address: 'Anjad',
//     company: 'Indew',
//     companyAddress: 'Indore',
//     printUserDetails: function () {
//         console.log(`Company Name:: ${this.company}`);
//         console.log(`Company Addr:: ${this.companyAddress}`);
//         console.log(`Logging status :: ${this.userName} successfully loged in...`);
//     }
// }
// user.printUserDetails()

// +++++++++++++++++++++++ Constructor Function +++++++++++++++++++++++++++++++++++
const user = function (userName, company, address) {
    this.userName = userName
    this.company = company
    this.address = address
    return this
}

// const user1 = user('Harshit', 'indew', 'Indore')
// console.log(user1.userName); // Harshit
// const user2 = user('Dev', 'BigScale', 'Surat')
// console.log(user1.userName); //Dev
// console.log(user2.userName); //Dev

const user1 = new user('Harshit', 'indew', 'Indore')
console.log(user1.userName); // Harshit
const user2 = new user('Dev', 'BigScale', 'Surat')
console.log(user1.userName); //Harshit
console.log(user2.userName); //Dev

