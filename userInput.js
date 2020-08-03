var inquirer = require("inquirer");
var fs = require('fs');
const Hello = require('./greeting.js')
Hello ()
function userQuestions(){}

inquirer
  .prompt([
    {
      type: "input",
      message: "What is your user name?",
      name: "username"
    },
    {
      type: "input",
      message: "What is your email address?",
      name: "emailAddy"
    },
    {
      type: "password",
      message: "What is your password?",
      name: "password"
    },
    {
      type: "password",
      message: "Re-enter password to confirm:",
      name: "confirm"
    }
  ])
  .then(function(data) {
    if (data.password !== data.confirm){ // checking if both entered passwords are same if not reenter all the information
      console.log("Passwords do not match, Please re-enter your information");
      userQuestions ();
    }else{
      var fs = require("fs");
// storing user entered information in the userPassword.txt
      fs.writeFile("./userPswd.txt",  " User Name : " + data.username + " Email : " + data.emailAddy + " Password : " + data.password, function(err) {
     // fs.appendFile("userPassword.txt",data.username + " : " + data.password, function(err) {
      if (err) {
          return console.log(err);
      }else{
          console.log("Success!");
      }
});
}
})
userQuestions();