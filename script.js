$('document').ready(function() {
  // JS Starts here
  // Functions being defined
  function selectRoom(number) {

  }
  function beginGame() {
    $('.container').empty();
    $('.container').append("<p>Your journey in The Maze begins ...</p>");
    var toasts = 5;
    var unlocked = {
    
    }
    math.random.floor(x 15)
    rooms[0]();
  }
   
  var rooms = [room1, room2, room3, room4, room5, room6, room7, room8, room9, room10, room11, room12, room13, room14, room15];
  
  
  //ME JORDAN        
  function room1() {
    // TODO: make left button, add description of the room, background color, 
    $(".container").append("<p> Looks lika modern house bedroom witha chest </p>");
  }
  function room2() {
    $(".container").append("<p> Looks lika swamp and has live larva crawling in the floor </p>");
  }
  function room3() {
    $(".container").append("<p> Looks lika modern house bedroom witha chest </p>");
  }
  function room4() {
    $(".container").append("<p> Looks lika modern house bedroom witha chest </p>");
  }
  function room5() {
    $(".container").append("<p> Looks lika modern house bedroom witha chest </p>");
  }
                    
                    
  // WEI
  // Skeleton !
  function room6() {
    $(".container").append("<p>As you enter to the room, you feel a creepy prescence. A skeleton appears!</p>");
  }
  // Nothing (?)
  function room7() {
    $(".container").append("<p>You enter an empty room. There is a message written in the wall:</p>");
    $(".container").append('<p><i>"Have you tried a toast without bread?"</i></p>');
  }
  // Questioning your sanity
  function room8() {
    $(".container").append("<p>You feel that you have been trapped for hours inside the maze.</p>");
    $(".container").append("<p>You have been getting inside rooms, or maybe the rooms are getting inside you?</p>");
  }
  // Hints
  function room9() {
    $(".container").append("<p> The room doesn't have any features but you hear a voice from far away? </p>");
     $(".container").append('<p><i>"Toasts have a magical power, they resonate with the rooms to unlock passages!"</i></p>');
  }
  // Deadly trap
  function room10() {
    $(".container").append("<p>As soon as you get inside there are two signs</p>");
    $(".container").append('<p><i>"Do not toast!"</i></p>');
    $(".container").append('<p><i>"Toast for life!"</i></p>');
  }
                    
//Alizah
  //have springs, as in water.
  function room11() {
    $(".container").append("<p> Now this room has a water fall to go through </p>");
 
  }
  //balloon, pop it and have powerup?
  function room12() {
    $(".container").append("<p> There is a balloon, see what's in it to help you </p>");
  }
  //have fire??
  function room13() {
    $(".container").append("<p> Nothing here for you to get besides a fire right there </p>");

  }
  //toast a one of the breads w/ sun??
  function room14() {
    $(".container").append("<p> Look at the sun, toast up! </p>");

  }
  //choose between pan or something
  function room15() {
    $(".container").append("<p> Either choose a pan or a new piece of bread </p>");

  }
                  
  //Function being called 
  $("#play").click(function(){
    beginGame();
  });
});
