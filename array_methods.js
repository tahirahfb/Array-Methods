const users = [
    {id: 1232, firstName: 'Cam', lastName: 'Danvers', logins: 35, isPremiumMember: false},
    {id: 3283, firstName: 'Elijah', lastName: 'Hawkings', logins: 3, isPremiumMember: true},
    {id: 9283, firstName: 'Ragupathy', lastName: 'Bodem', logins: 12, isPremiumMember: false},
    {id: 6972, firstName: 'Jamilla', lastName: 'Johnson', logins: 5, isPremiumMember: true},
    {id: 3998, firstName: 'Jose', lastName: 'Rivera', logins: 16, isPremiumMember: false},
    {id: 4982, firstName: 'Ted', lastName: 'Witherspoon', logins: 53, isPremiumMember: true},
    {id: 6929, firstName: 'Igor', lastName: 'Silenski', logins: 23, isPremiumMember: false},
    {id: 3879, firstName: 'Ira', lastName: 'Bolislovitz', logins: 9, isPremiumMember: false}
];

//Find a user named Jose Arrow Method
const userNamed = users.find(user => user.firstName === 'Jose');
console.log(userNamed);

//Find a user named Jose Function Method
const userName = users.find(function(uname){
    return uname.firstName === 'Jose';
}
)
console.log(userName);

console.log(" ");

//Get an array of all the premium members
const premMembers = users.filter(premium => premium.isPremiumMember === true);
console.log(premMembers);

console.log(" ");

//Get an array of all the user last names
const allLastNames = users.forEach(function(lname){
    console.log(lname.lastName);
}
)

console.log(" ");

//Get an array of the full names who have logged in more than 10 times
const tenLogins = users.filter(function(moreThanTen)
{
    if (moreThanTen.logins >= 10){
        console.log(moreThanTen.firstName, moreThanTen.lastName );
    }
})

console.log(" ");

//Get full names of users 
const fullNames = users.forEach(function(a){
    console.log(a.firstName, a.lastName);
})

console.log(" ");

//Get the total number of logins for the list of users
let total = 0;

users.forEach(userLogin => {
    total+= userLogin.logins;
});

console.log("Total Logins: ", total);
