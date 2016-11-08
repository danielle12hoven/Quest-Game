console.log('project1.js loaded');

$(document).ready(function(){

  console.log("party time");


var stoppingStations = [
  'Start',
  'TheVillage',
  'Outpost',
  'Behind',
  'TheShadows',
  'Cabin',
  'BigField',
  'Cave',
  'InnerMountain',
  'MountainTop',
  // 'Lives',
];


var intervalTime = 2000;
var intervalTime2 = 50000;
var intervalTime3 = 3000;
var delay = null;


var lives = ['life1', 'life2', 'life3']

var removeLife = function(){
  $('#'+lives[0]).remove();
  lives.shift();
}


//Dialog boxes//
    //----- OPEN
  console.log($('[data-popup-open]'));
    $('[data-popup-open]').on('click', function(e)  {
        var targetedPopup = $(this).attr('data-popup-open');
        $('[data-popup="' + targetedPopup + '"]').fadeIn(350);
    });
    //----- CLOSE
  console.log($('[data-popup-close]'));
    $('[data-popup-close]').on('click', function(e)  {
        var targetedPopup = $(this).attr('data-popup-close');
        $('[data-popup="' + targetedPopup + '"]').fadeOut(350);
    });
//end of dialog box//


//Making each stopping point in the game//
var createPoints = function(){
  $('#gameBoard').append("<section id='stations'></section>");
    for(var i = 0; i < stoppingStations.length; i++) {
      $('#stations').append('<article class = "stoppingStations" id = "'+stoppingStations[i]+'"><h1>'+stoppingStations[i]+'</h1></article>');
    };
    movePlayer1()
}


//Move to staring point//
var movePlayer1 = function(){
  $('#Start').append($('#playerOne'));
    var popUpWindow = function() {
      $('[data-popup="popup-1"]').fadeIn(350);
      $('a.popup-close').click(movePlayer2);
    }
    delay = setTimeout(popUpWindow, intervalTime3);
  }



//The Village//
var movePlayer2 = function(){
  $('#TheVillage').append($("#playerOne"));
    $('#textBox').text("You have entered the village.");
    delay = setTimeout(movePlayer3, intervalTime);
}



var movePlayer3 = function(){
  var prompt1 = prompt("I have a tail, and I have a head, but I have no body. I am NOT a snake. What am I?");
    console.log(prompt1);

      // $('[data-popup="popup-3"]').fadeIn(350);

      if(prompt1 === 'coin'){
        $('#textBox').text("You are correct. Move on.");
        $('#Outpost').append($('#playerOne'));
        $('#textBox').text("Onwards!");
           delay = setTimeout(movePlayer4, intervalTime3);
      } else {
        $('#textBox').text("Wrong answer. You just lost a life");
          removeLife();
            if(lives.length === 0){
              $('[data-popup="popup-3"]').fadeIn(350);
            }else {
          delay = setTimeout(movePlayer3, intervalTime);
      }
    }
  }



var movePlayer4 = function(){
  var prompt2 = prompt("Mary's father has 4 children; three are named Nana, Nene, and Nini. So what is the 4th child's name?");
    console.log(prompt2);

      if(prompt2 === 'mary'){
        $('#textBox').text("You are correct. Move on.");
        $('#Behind').append($("#playerOne"));
        $('#textBox').text("The questions will keep getting harder.");
          delay = setTimeout(movePlayer5, intervalTime3);
      } else {
        $('#textBox').text("Wrong answer. You just lost a life");
          removeLife();
            if(lives.length === 0){
              $('[data-popup="popup-3"]').fadeIn(350);
            }else {
           delay = setTimeout(movePlayer4, intervalTime);
      }
    }
  }

var movePlayer5 = function(){
  var prompt3 = prompt("What starts with F and ends in uck?");
    console.log(prompt3);

      if(prompt3 === 'firetruck'){
        $('#textBox').text("You are correct. Move on.");
        $('#BigField').append($("#playerOne"));
          delay = setTimeout(movePlayer6, intervalTime3);
      } else {
        $('#textBox').text("Wrong answer. You just lost a life");
          removeLife();
            if(lives.length === 0){
              $('[data-popup="popup-3"]').fadeIn(350);
            }else {
            delay = setTimeout(movePlayer5, intervalTime);
        }
      }
  }

var movePlayer6 = function(){
  var prompt4 = prompt("What crosses the river but doesn't move?")
    console.log(prompt4);

      if(prompt4 === 'bridge'){
        $('#textBox').text("You are correct. Move on.");
        $('#TheShadows').append($("#playerOne"));
        $('#textBox').text("Watch out, you are entering the shadows.");
          delay = setTimeout(movePlayer7, intervalTime3);
      } else {
        $('#textBox').text("Wrong answer. You just lost a life");
            removeLife();
            if(lives.length === 0){
              $('[data-popup="popup-3"]').fadeIn(350);
            }else {
          delay = setTimeout(movePlayer6, intervalTime);
        }
      }
  }

var movePlayer7 = function(){
  var prompt5 = prompt("What begins with T, ends with T and has T in it?")
    console.log(prompt5);

      if(prompt5 === 'teapot'){
        $('#textBox').text("You are correct. Move on.");
        $('#Cabin').append($("#playerOne"));
        $('#textBox').text("Walk up to the cabin and solve the next question.");
          delay = setTimeout(movePlayer8, intervalTime3);
      } else {
        $('#textBox').text("Wrong answer. You just lost a life");
            removeLife();
            if(lives.length === 0){
              $('[data-popup="popup-3"]').fadeIn(350);
            }else {
          delay = setTimeout(movePlayer7, intervalTime);
      }
    }
}

var movePlayer8 = function(){
  var prompt6 = prompt("Wednesday, Tom and Joe went to a restaurant and ate dinner. When they were done they paid for the food and left. But Tom and Joe didn't pay for the food. Who did?")
    console.log(prompt6);

      if(prompt6 === 'wednesday'){
        $('#textBox').text("You are correct. Move on.");
        $('#Cave').append($("#playerOne"));
        $('#textBox').text("You walk into the cave...");
          delay = setTimeout(movePlayer9, intervalTime3);
        } else {
        $('#textBox').text("Wrong answer. You just lost a life");
            removeLife();
            if(lives.length === 0){
              $('[data-popup="popup-3"]').fadeIn(350);
            }else {
          delay = setTimeout(movePlayer8, intervalTime)
        }
      }
  }

var movePlayer9 = function(){
  var prompt7 = prompt("What pine has the longest and sharpest needles?")
    console.log(prompt7);

      if(prompt7 === 'porqupine'){
        $('#textBox').text("You are correct. Move on.");
        $('#InnerMountain').append($("#playerOne"));
        $('#textBox').text("You are now inside the mountain, solve next the riddle");
          delay = setTimeout(movePlayer10, intervalTime3);
        } else {
        $('#textBox').text("Wrong answer. You just lost a life");
            removeLife();
            if(lives.length === 0){
              $('[data-popup="popup-3"]').fadeIn(350);
            }else {
          delay = setTimeout(movePlayer9, intervalTime)
        }
      }
}

var movePlayer10 = function(){
  var prompt8 = prompt("Mr. Smith has 4 daughters. Each of his daughters has a brother. How many children does Mr. Smith have?")
    console.log(prompt8);

      if(prompt8 === '5'){
        $('#textBox').text("You are correct. Move on.");
        $('#MountainTop').append($("#playerOne"));
          $('#textBox').text("Almost at the top!");
          delay = setTimeout(movePlayer11, intervalTime3);
      } else {
        $('#textBox').text("Wrong answer. You just lost a life")
            removeLife();
            if(lives.length === 0){
              $('[data-popup="popup-3"]').fadeIn(350);
            }else {
          delay = setTimeout(movePlayer10, intervalTime)
        }
      }
}

var movePlayer11 = function(){
  var prompt9 = prompt("I travel all over the world, but always stay in my corner. What am I?")
    console.log(prompt9);

      if(prompt9 === 'stamp'){
        $('#textBox').text("You have won!!");
        $('[data-popup="popup-2"]').fadeIn(350);
      } else {
        $('#textBox').text("Wrong answer. You just lost a life");
            removeLife();
            if(lives.length === 0){
              $('[data-popup="popup-3"]').fadeIn(350);
            }else {
          delay = setTimeout(movePlayer11, intervalTime)
        }
      }
}

createPoints();

//end file
});
