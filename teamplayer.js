var inquirer = require("inquirer");

//var starters = [];


var team_score = 0;

var starters=[];
var subs=[];
var teams=[];

var player = function (name, position, offense, defense) {
    this.name = name;
    this.position = position;
    this.offense = offense;
    this.defense = defense;

    this.goodGame = function () {
        if (coinFlip()){
            this.offense++;
            this.defense ++;
        }
    };
    this.badGame = function () {
        if(coinFlip()){
            this.offense--;
            this.defense --;
        }

    };
    this.printStats = function () {
       console.log('Name = '+ this.name);
       console.log('Position = '+ this.position);
       console.log('Offense = '+ this.offense);
       console.log('Defense = '+ this.defense);
    }


};

function coinFlip() {
   return  Math.floor(Math.random() + 1) ;
}

var count = 0;

var askQuestion = function() {
    // if statement to ensure that our questions are only asked five times
    if (count < 3) {
        console.log('Please create Player number '+ parseFloat(count+1));
        // runs inquirer and asks the user a series of questions whose replies are
        // stored within the variable answers inside of the .then statement
        inquirer.prompt([
            {
                name: "name",
                message: "What is your name?"
            }, {
                name: "position",
                message: "What is your current position?"
            }, {
                name: "defense",
                message: "Whats you defense 1 - 10?"
            }, {
                name: "offense",
                message: "what is your offense  1 - 10?"
            }
        ]).then(function(answers) {
            // initializes the variable newProgrammer to be a programmer object which will take
            // in all of the user's answers to the questions above
            var newPlayer = new player(
                answers.name,
                answers.position,
                answers.offense,
                answers.defense);
            // printInfo method is run to show that the newProgrammer object was successfully created and filled
            newPlayer.printStats();

            if(count < 2){
                starters.push(newPlayer);}
            else {
                subs.push(newPlayer);
            }
            // add one to count to increment our recursive loop by one
            count++;
            // run the askquestion function again so as to either end the loop or ask the questions again
            askQuestion();
        });
        // else statement which prints "all questions asked" to the console
        // when the code has been run five times
    }
    else {
        for(var i = 0; i<5; i++){

            play();
        }
        substitute_player();
        if(team_score > 0){

            this.goodGame();
        } else {
            this.badGame();
        };
    }
};
console.log('Create 3 players');

askQuestion();


var play = function () {
        console.log('+++++++++++++++++++++++++++++++');
        var random_num = Math.floor(Math.random() * 10);
        console.log('First Number '+ random_num);
        var random_num2 = Math.floor(Math.random() * 10);
        console.log('Second Number '+ random_num2);


        if(random_num < (starters[0].offense + starters[1].offense )){
            team_score++;
            console.log('score updated! '+team_score);
        }
        if (random_num2 > (starters[0].defense + starters[1].defense )) {
            team_score--;
            console.log('score updated! '+team_score);
        }

};
var substitute_player = function(){
    inquirer.prompt([
        {
            name: "player",
            message: "which player (number 1 or  2 ) you want to remove?",
            type : "input"
        }
    ]).then(function(answers) {
        starters.splice(player, 1);
        starters.push(subs[0]);
        console.log('your new players are : '+starters);
    });
};



