// Create a basic command line Node application using the inquirer package.
var inquirer = require('inquirer');

// Your application should ask the user any five questions of your choosing.
// The question set should include at least one:

//    - Basic input,
//    - Password,
//    - List,
//    - Checkbox,
//    - and Confirm


inquirer
    .prompt([
        // Here we create a basic text prompt.
        {
            type: "input",
            message: "What's your name?",
            name: "username"
        },
        // Here we create a basic password-protected text prompt.
        {
            type: "password",
            message: "Set your password",
            name: "password"
        },
        {
            type: "confirm",
            message: "Are you sure:",
            name: "confirm",
            default: true
        },
        // Here we give the user a list to choose from.
        {
            type: "list",
            message: "What type of music you like?",
            choices: ["Deep House", "Hip Hop", "Pop"],
            name: "type"
        }
        // Here we ask the user to confirm.
    ]).then(function (inquirerResponse) {

        if(inquirerResponse.type == "Deep House"){
            inquirer
                .prompt([{
                    type: "checkbox",
                    message: "Your Favorite Dj",
                    choices: ["Tiesto", "Avicii", "Armin Van Buren", "Calvin Harris"],
                    name: "artist"
                }]).then(function (response1) {
                console.log('Welcome ' + inquirerResponse.username);
                console.log('your password is  ' + inquirerResponse.password);
                console.log('+++++++++++++++++++++++++++++++++++++++++++');
                console.log('your fav artist is' + respons1.artist + ' because you liked ' + inquirerResponse.type + ' music');

            })
        } else if(inquirerResponse.type == "Hip Hop"){
            inquirer
                .prompt([{
                    type: "checkbox",
                    message: "Your Favorite rapper",
                    choices: ["Eminem", "Kendrick Lamar", "Kanye", "Drake"],
                    name: "artist"
                }]).then(function (response2) {
                console.log('Welcome ' + inquirerResponse.username);
                console.log('your password is  ' + inquirerResponse.password);
                console.log('+++++++++++++++++++++++++++++++++++++++++++');
                console.log('your fav artist is' + response2.artist + ' because you liked ' + inquirerResponse.type + ' music');
            })
        }else if(inquirerResponse.type == "Pop"){
            inquirer
                .prompt([{
                    type: "checkbox",
                    message: "Your Favorite singer",
                    choices: ["Katy Perry", "Demi Lavato", "Beyonce", "Camilla"],
                    name: "artist"
                }]).then(function (response3) {
                console.log('Welcome ' + inquirerResponse.username);
                console.log('your password is  ' + inquirerResponse.password);
                console.log('+++++++++++++++++++++++++++++++++++++++++++');
                console.log('your fav artist is' + response3.artist + ' because you liked ' + inquirerResponse.type + ' music');
            })
        }



});

// Then if a user's password matches a pre-defined password, re-display the data back to the user with some text.
// See the inquirer GitHub documentation "examples" page if you need help.

// Remember to be creative!

// ========================================================================
