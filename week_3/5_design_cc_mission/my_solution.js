// I worked [by myself] on this challenge

// Your mission description:
//Player fighting with a Troll
// 
// 

// Pseudocode
// declare player and troll objects
// add functions in objects methods to interact with each other
// 
// 
// 

// Initial Code
var player = {
    name: "Sir MixALot",
    mana: 100,
    health: 100,
    strength: (Math.floor(Math.random() * (50 - 5) + 5)),
    posX: 0,
    posY: 0,
    moveXY: function(posX, posY) {
        player.posX += posX;
        player.posY += posY;
    },
    attack: function(Object) {
        Object.health -= this.strength;

    }
};

var troll = {
    strength: (Math.random() * (50 - 5) + 5),
    health: 100,
    attack: function(Object) {
        Object.health -= this.strength;
    }
};

while (troll.health > 0) {
    player.attack(troll);
    if (troll.health > 0) {
        console.log("The Troll Survives!\nTroll's health is "+troll.health);
    } else {
        console.log("You killed the troll");
    }

}






// Refactored Code






// Reflection
// Pretty simple implentation of the objects and using its properties to envoke various functions, could have gone more into
// detail with the other functions, but ran out of time.
// Wanted to work more on the game, but ran out of ideas, maybe I shouldve paired up for this challenge.
// 
// 
