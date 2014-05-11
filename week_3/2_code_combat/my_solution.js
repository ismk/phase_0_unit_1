// I worked on this challenge [by myself]
 
// For each mission, write the title as a comment. (Shown here). Also include pseudocode as a comment. 
// Note: to make commenting easier, you can highlight the section you want to comment and hold 
// command + / This will comment the line. 

//Grab the Mushroom Complete
//Pseudocode...
// move up 
// move right
// move left
// move up
// attack
//Actual code:
this.moveUp();
this.moveRight();
this.moveLeft();
this.moveUp();
this.attackNearbyEnemy();

//Drink Me Complete
//Pseudocode...
// attack
// move right
// move down
// move up
// move right
// attack
//Actual code:

this.attackNearbyEnemy();
this.moveRight();
this.moveDown();
this.moveUp();
this.moveRight();
this.attackNearbyEnemy();

//Taunt the Guards Complete
// move right
// bust door
// move right
// say something
// move left
// move left
// say something
// move right
// say something
// move right
// move right
// move up
// move right
// say something
// move down
// move right
// move up
// move right

//Actual code:
this.moveRight();
this.bustDownDoor();

this.moveRight();
this.say("Hey there!");
this.moveLeft();
this.moveLeft();
this.say("Attack!");

this.moveRight();
this.say("Follow me.");
this.moveRight();
this.moveRight();
this.moveUp();
this.moveRight();
this.say("Hey There");
this.moveDown();
this.moveRight();
this.moveUp();
this.moveRight();

//It's a Trap! Complete
// Taunt the Ogre and run for cover!
this.moveDown();
this.moveDown();
this.say("Hey");
this.moveUp();
this.say("Attack!");
this.moveUp();

//Taunt Complete
this.say("Hey!");

// Lure the ogre right into your arrow trap
// by saying a few more things at him.
// Anything works!
this.say("Hey!");
this.say("Hey");
this.say("He");
this.say("H");
this.say("Tharin");
this.say("Ohone");


//Break the Prison Complete
// Write this isFriend(name) spell to tell friend from foe.
// Return true for friends' names, false for ogres' names.
if (name === "William")
    return true;
if (name === "Krogg")
    return false;
if (name == "Lucas")
    return true;
// <-- Start here; Krogg is not a friend!
if (name === "Gort"|| name == "Brack")
    return false;
if (name == "Robert" || name == "Marcus")
    return true;
if(name == "Gordon")
    return true;
    
//Cowardly Taunt Complete

this.moveXY(50, 16);
this.moveXY(63, 20);
this.moveXY(70, 10);  // This is a safe spot.

this.say("I can lure them in here.");

// Run your soldier out where the ogres can hear you.
this.moveXY(50,16);
// Say something!
this.say("RAAAR");
// Then run back behind the arrow towers for safety.
this.moveXY(70,10);
// You can shift+click on the map to insert coordinates.

//Commanding Followers Complete
this.moveXY(49, 66);
this.moveXY(60, 63);
this.moveXY(75, 63);
this.say("Hail, friends!");

// Saying anything with "follow" in it will get nearby soldiers
// to follow you
this.say("follow");
// Saying anything with "attack" will send nearby troops into
// a battle mode.

// Make sure Tharin is safe!
this.moveXY(56,42);
this.say("attack");
this.moveXY(75,63);


//Mobile Artillery Complete
//Pseudocode...
// move to x-axis and y-axis
// attack at enemy location
// move to other x-axis and y-axis
// attack at enemy location
// attack at enemy location
// attack at enemy location
// attack at enemy location

//Actual code:
this.moveXY(30, 26);  // Move into range
this.attackXY(46, 5);  // Shoot once in the middle of the ogres

// If they survive a hit, ogres retaliate!
// Larger ogres take more than one hit...
// So, position and aim carefully.
this.moveXY(44,38);
this.attackXY(67,56);
this.attackXY(56,45);
this.attackXY(49,63);
this.attackXY(46,52);
 
 
//Answer to questions: 
// Q. What is "this" referring to? Think programming-wise rather than in the terms of the game.
// A. "this" refers to the current context of the function of that parent object, whether it being a function or an object

// What does the () do in JavaScript?
// A. The parenthesis invokes the operation(s) in that particular function. Basically runs the code in that particular function by using ().

// What is the point of the semicolons? 
// A. The semicolon marks the end of that statement, whether it be declaring a variable, object or function, or some other operation. 


// Reflection:

//I am sorry but I didn’t get much out of the code combat beginner campaign, I think they were a exercise in futility, it made no attempt to make the user understand the commands they were using, there was no javascript as such involved, if one replaced the functions called using another language it would make no difference, the whole point of the exercise was to introduce a beginner to javascript and at no point in the exercise I saw it do that.
//The simple commands didn’t explain properly *how* the function was being processed, a layman could play the starting missions without learning anything about javascript.
//I would’ve preferred to alt east start with the CodeAcademy track on JavaScript rather than spend my time doing Code combat.

//Also the code itself was so simple that writing pseudocode for it made no sense.
