// Ask the user their name
var playerName = window.prompt("What is your name?");
console.log(playerName);
//Ask the user if they eat meat
var question = function () {
    window.alert("Welcome to Burger Hut!")
var promptQuestion = confirm("Do you eat meat?");

if (promptQuestion) {
    window.alert("Here's a burger!");
}
else {
    window.alert("Here's a veggie burger!");
}
}
question();