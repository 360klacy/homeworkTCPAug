// Download node, inquirer, and require them both. 
// Require greeting function and call it before questions
// Create a function for  questions with inquirer and save the responses to a local server userPswd.txt

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

//Continue function with conditional statement for password acceptance
//Check if password do not match give user "err" return to begininning of questions
//Everything else matches, continue with questions and write data from user input into local server file userPswd.txt
//Give user a confirmation/success message once complete
//Call the function

  .then(function(data) {
    if (data.password !== data.confirm){ 
      console.log("Passwords do not match, Please re-enter your information");
      userQuestions ();
    }else{
      var fs = require("fs");
      fs.writeFile("./userPswd.txt",  " User Name : " + data.username + " Email : " + data.emailAddy + " Password : " + data.password, function(err) {
      if (err) {
          return console.log(err);
      }else{
          console.log("Success!");
      }
});
}
})
userQuestions();