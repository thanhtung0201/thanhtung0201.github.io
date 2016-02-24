//Global card
var cards = ['img1.png','img2.jpg','img3.png','img4.jpg','img5.jpg','img6.jpg','img7.jpg','img8.png','img9.jpg','img10.jpg',
       'img10.jpg','img11.jpg','img12.jpg','img13.png','img14.png','img15.jpg','img16.jpg','img17.jpg','img18.jpg',
       'img19.jpg','img20.jpg','img21.jpg','img22.png','img23.png','img24.png','img25.jpg','img26.png','img27.png',
       'img28.jpg','img29.jpg','img30.jpg','img31.jpg','img32.jpg','img33.jpg','img34.jpg','img35.jpg','img36.jpg',
       'img37.jpg','img38.jpg','img39.jpg','img40.jpg','img41.jpg','img42.jpg','img43.jpg','img44.jpg','img45.jpg',
       'img46.jpg','img47.jpg','img48.jpg','img49.jpg','img50.jpg','img51.jpg','img52.jpg'];
var background = ['bg1.jpg','bg2.jpg','bg3.jpg','bg4.jpg','bg5.jpg','bg6.jpg'];
var card = $(".card");
//Create array card random for game 
var audioIngame = $("#source");
var haffCard = [];
var tempFullCardGame = [];
var fullCardGame = [];
var current;
var count = 0; //Count number of card correct
var globalIncrease = false;
haffCard = pushRandomArrayToArray(cards,12); //Create random 12 card 

//Next step , duplicate haffCard array in order to 24 card 
haffCard = haffCard.concat(haffCard);
//Random tempFullCardGame
fullCardGame = pushRandomArrayToArray(haffCard,24);
//Load game
var imgBg = background[Math.floor( Math.random() * (background.length))];
 $("body").css("background-image","url('images/background-img/" + imgBg + "')");
 $(".progress").css("visibility","hidden");
function loadGame(level)
{
  $(".screen-start").css("visibility","hidden");
  $(".progress").css("visibility","initial");
  var imagesCard = ""; //backimage card
  var time = 0;        //Time progress depend level
  var increaseWidth;   // Time increase if choose corect
  var timeStopCard = 0; 
if(level == 1)
{
  imagesCard = 'back.png';
  time = 1000;
  increaseWidth = 5;
  timeStopCard = 700;
  $("#audio").attr("src",'audio/ingame1.mp3');
  $("#audio").trigger("play");
}
else
{
  imagesCard = 'back.jpg';
  time = 400;
  increaseWidth = 4;
  timeStopCard = 400;
  $("#audio").attr("src",'audio/ingame.mp3');
  $("#audio").trigger("play");
}
  var html = '';
 for(var i = 0 ; i < fullCardGame.length ; i++)
 {
   html +=  '<div class= "grid">' +
            '<div class="card" data-name="' + fullCardGame[i] +   
            '" onclick = "flip(this,'+ timeStopCard + ')" > <div class="card-font"><img src = "images/content-img/' + imagesCard + '"/></div>' +
            '<div class = "card-back"><img src= "images/content-img/' + fullCardGame[i]+'"/></div>' +
            '</div></div>';           
}
$("#content").html(html);
//Process time
var progressbar = $("progress");
var constant = progressbar.val();
var val = progressbar.val();
var timer = setInterval(frame,time);
 function frame() {
if(globalIncrease == true)
  {
    if(val >= constant - increaseWidth)
    {
      val = constant;
      globalIncrease = false;  //Cho nay xu ly neu tra loi dung. Gia su timer = 1000, hien tai la 980, neu giam 40 thi reset ve 1000
    }
    else
    {
    val = val + increaseWidth; 
    globalIncrease = false;
    }
  }
  if(count == 12 )
  {
  clearInterval(timer);
  window.location.href = "champion.html";
  }
    if (val <= 0) {
      clearInterval(timer);
      if(count < 12)
      {
        $(".screen-lose").css("visibility","initial");
        $("#audio").trigger("pause");
        $("#warning").trigger("pause");
      }

    } else {
    val = val - 1;  
    progressbar.val(val);
    if(val < 25)
    {
    $("#warning").attr("src",'audio/warning.mp3');
    $("#warning").attr("loop",false);
    $("#warning").trigger("play");
  }
    }
  }
}

function flip(card,timeStopCard)
{
  $("#click").attr("src",'audio/clickCard.mp3');
  $("#click").attr("loop",false);
  $("#click").trigger("play");
  $(card).toggleClass("flipped");
  if(!current)
  {
    current = $(card);
    $(card).css('pointerEvents','none');
  }
  else
  {
     $(".card").css('pointerEvents','none');
    if(current.attr('data-name') != $(card).attr('data-name'))
    {
       
      setTimeout(function(){
        $(card).toggleClass("flipped");
        current.toggleClass("flipped");
        $("#click").attr("src",'audio/wrong.mp3');
        $("#click").attr("loop",false);
        $("#click").trigger("play");
        $(".card").css('pointerEvents','auto');
        $(".card.displayCard").css('pointerEvents','none');
        current = null;
      },timeStopCard);
    }
    else
    {
     setTimeout(function(){
        globalIncrease = true;
        count++;
        $(card).css('opacity',0);  
        current.css('opacity',0);  
        $("#click").attr("src",'audio/right.mp3');
        $("#click").attr("loop",false);
        $("#click").trigger("play");
        $(card).addClass("displayCard");
        current.addClass("displayCard");
        $(".card").css('pointerEvents','auto');
        $(".card.displayCard").css('pointerEvents','none');
        current = null;
      },300);
    }
  }

}
//Get random numberCard from input array card
function pushRandomArrayToArray(input,numberCard)
{
     var randomNumberCard = [];
       var i = 0;
       var count = 0;
          while(i < input.length && count < numberCard)
          {
            var temp = input[Math.floor( Math.random() * (input.length-i))];
            randomNumberCard.push(temp);
            removeArrayItem(input,temp);
            count++;
          } 
       return randomNumberCard;                      
}

//Created array from  array using remove element itemToRemove
function removeArrayItem(array, itemToRemove) {
    // Count of removed items
    var removeCounter = 0;

    for (var index = 0; index < array.length; index++) {
        if (array[index] === itemToRemove) {
            // Remove array item at current index
            array.splice(index, 1);

            removeCounter++;
            index--;
            break;  // Only remove the first element was find
        }
    }
    return removeCounter;
}
function reload()
{
  location.reload();
}