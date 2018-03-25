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
    room1();
  }
                    
  //ME JORDAN        
  function room1() {
    // TODO: make left button, add description of the room, background color, 
    $(".container").append("<p> Looks lika modern house bedroom witha chest </p>");
  }
  function room2() {
    $(".container").append("<p> Looks lika modern house bedroom witha chest </p>");
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
    $(".container").append("<p>You enter an empty room</p>")
  }
  function room8() {

  }
  function room9() {

  }
  function room10() {

  }
                    
//Alizah
  //have springs, as in water.
  function room11() {
    //$(".desciption").append(" <p> Now this room has a water fall to go through

  }
  //balloon, pop it and have powerup?
  function room12() {

  }
  //have fire??
  function room13() {

  }
  //toast a one of the breads w/ sun??
  function room14() {

  }
  //choose between pan or something
  function room15() {

  }
                  
  //Function being called 
  $("#play").click(function(){
    beginGame();
  });
});
