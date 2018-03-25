$('document').ready(function() {
  // JS Starts 
  // Variables  ------------------------------------------------------------------------------------------
  var toasts = 5;
  var currentRoom;
    // Keeps track of the events: False = Hasn't happened, True = Happened 
  var event = {
    skeletonTalk:  false,
    skeletonGiveToast: false,
    popBalloon: false,
  }
  // Your inventory
  var collectibles = [];
  var rooms = [room1, room2, room3, room4, room5, room6, room7, room8, room9, room10, room11, room12, room13, room14, room15]
  var randomness = Math.random() * rooms.length;
  var randomRoom = Math.floor(randomness);
  // Functions being defined -----------------------------------------------------------------------------
  function selectRoom(number) {
    
  }
  function beginGame() {
    $('.container').empty();
    $('.container').append("<p>Your journey in The Maze begins ...</p>");
    console.log(randomRoom);
    rooms[randomRoom]();
  }
   
  function loot(roomNumber) {
    if (roomNumber === 1 ) {
      $(".container").append("<p>You force the chest with raw physical strength, you found super-toast!</p>");
      collectibles.push("Super Toast");
    }
  }
  
  //ME JORDAN        
  function room1() {
    // TODO: make left button, add description of the room, background color, 
    currentRoom = 1;
    $(".container").append("<p> Looks like a modern house bedroom with a chest </p>");
    
  }
  function room2() {
    currentRoom = 2;
    $(".container").append("<p> Looks lika swamp and has live larva crawling in the floor </p>");
    var chance = Math.random();
    if (chance > 0.5) {
      $(".container").append("<p> Disgusting! A toast has rotted away! </p>");
      toasts -= 1;
    } else {
      $(".container").append("<p> Being aware, you manage to keep your toasts safe. </p>");
    }
  }
  function room3() {
    currentRoom = 3;
    $(".container").append("<p> Smells like poop but like the room is very dark and you can't see anything (you didn't bring a flshlight) </p>");
    
  }
  function room4() {
    currentRoom = 4;
    $(".container").append("<p> Looks bright and you see something that looks lika rock with face and blink red eye but open mouth with shape of toast maybe it hungury </p>");
  }
  function room5() {
    currentRoom = 5;
    $(".container").append("<p> You see a moving rock that looks human; he's holding toasts and when he sees you he asks you if you want to gamble a toast in a game of rock paper scissors </p>");
    //EVENT HAPPENS IF CHOOSE TO GAMBLE
    //MOVING ROCK DAT LOOK HUMAN CHOICE
    
    var allChoices = [
        "rock",
        "paper",
        "scissors"
        ];
    $(".shoot").click(function() {
      var yourChoice = $(".yourChoice").val();
      $(".container").append("you chose " + heroChoice);
      var choiceRoll = Math.floor(Math.random()*3);
      var rockChoice = allChoices[choiceRoll];
      $(".container").append("the rock chose " + rockChoice);
      //CONDITIONAL TIES
        if(yourChoice === "rock" && computerChoice === "rock") {
                $("#judgementChoiceDisplay").text("Nobody!");
        } else if (yourChoice === "paper" && computerChoice === "paper"){
                $("#judgementChoiceDisplay").text("Nobody!");
        } else if (yourChoice === "scissors" && rockChoice === "scissors"){
                $("#judgementChoiceDisplay").text("Nobody!");
//CONDITIONAL HERO WINS
        } else if (yourChoice === "rock" && rockChoice === "scissors"){
                $("#judgementChoiceDisplay").text("HERO WINS!");
        } else if (yourChoice === "paper" && rockChoice === "rock"){
                $("#judgementChoiceDisplay").text("HERO WINS!");
        } else if (yourChoice === "scissors" && rockChoice === "paper"){
                $("#judgementChoiceDisplay").text("HERO WINS!");
//CONDITIONAL COMPUTER WINS
        } else if (yourChoice === "rock" && rockChoice === "paper"){
                $("#judgementChoiceDisplay").text("COMPUTER WINS!");
        } else if (yourChoice === "paper" && rockChoice === "scissors"){
                $("#judgementChoiceDisplay").text("COMPUTER WINS!");
        } else if (yourChoice === "scissors" && rockChoice === "rock"){
                $("#judgementChoiceDisplay").text("COKMPUTER WINS!");
        }
    });
  };
});
            
  // WEI
  // Skeleton !
  function room6() {
    currentRoom = 6;
    $(".container").append("<p>As you enter to the room, you feel a creepy prescence. A skeleton appears!</p>");
  }
  // Nothing (?)
  function room7() {
    currentRoom = 7;
    $(".container").append("<p>You enter an empty room. There is a message written in the wall:</p>");
    $(".container").append('<p><i>"Have you tried a toast without bread?"</i></p>');
  }
  // Questioning your sanity
  function room8() {
    currentRoom = 8;
    $(".container").append("<p>You feel that you have been trapped for hours inside the maze.</p>");
    $(".container").append("<p>You have been getting inside rooms, or maybe the rooms are getting inside you?</p>");
  }
  // Hints
  function room9() {
    currentRoom = 9;
    $(".container").append("<p> The room doesn't have any features but you hear a voice from far away? </p>");
     $(".container").append('<p><i>"Toasts have a magical power, they resonate with the rooms to unlock passages!"</i></p>');
  }
  // Deadly trap
  function room10() {
    currentRoom = 10;
    $(".container").append("<p>As soon as you get inside there are two signs</p>");
    $(".container").append('<p><i>"Do not toast!"</i></p>');
    $(".container").append('<p><i>"Toast for life!"</i></p>');
  }
                    
//Alizah
  //have springs, as in water.
  function room11() {
    currentRoom = 11;
    $(".container").append("<p> Now this room has a waterfall to gaze at</p>");
 
  }
  //balloon, pop it and have powerup?
  function room12() {
    currentRoom = 12;
    $(".container").append("<p> There is a balloon, pop it, see what's in it to help you </p>");
  }
  //have fire??
  function room13() {
    currentRoom = 13;
    $(".container").append("<p> Nothing here for you to get besides a nice fire </p>");

  }
  //toast a one of the breads w/ sun??
  function room14() {
    currentRoom = 14;
    $(".container").append("<p> Look at the sun, toast up! </p>");

  }
  //choose between pan or something
  function room15() {
    currentRoom = 15;
    $(".container").append("<p> Either choose a pan or a new piece of bread </p>");

  }
                  
  //Function being called 
  $("#play").click(function(){
    beginGame();
});
  $("#loot").click(loot(currentRoom));
});
  $("#left").click(function(){
});
  $("#right").click(function(){
});
  $("#forward").click(function(){
});
  $("#back").click(function(){
});