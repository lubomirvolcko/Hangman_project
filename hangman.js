var random = 0;                                               //defined for generating word
var word = "";                                                //defined for choesen word from random
var easyAnimals = ["CAT", "MOUSE", "HORSE", "DOG", "LION"];   //defined field of animals
var easyCities = ["BRATISLAVA", "PARIS", "DUBAI", "PRAGUE"];  //defined field of cities
var hardAnimals = ["CROCODILE", "FISH", "TIGER", "SNAKE"];	  //defined field of animals
var hardCities = ["BERLIN", "VIENNA", "REYKJAVIK"];			//defined field of cities
var gameDiff;                                               //defined for chosen difficulity
var gameCat;                                                //defined for chosen category
var alphabet = ['A', 'B', 'C', 'D', 'E',
                'F', 'G', 'H', 'I', 'J',
				'K', 'L', 'M', 'N', 'O', 
                'P', 'Q', 'R', 'S', 'T', 
                'U', 'V', 'W', 'X', 'Y', 'Z'];                                     //defined field of alphabet
var play = document.getElementById('play');                 //defined div play
var btnPlay = document.getElementById('btnPlay');           //defined button play
var difficulity = document.getElementById('difficulity');   //defined div difficulity
var btnEasy = document.getElementById('btnEasy');           //defined button easy
var btnHard = document.getElementById('btnHard');           //defined button hard
var category = document.getElementById('category');         //defined div difficulity
var btnAnimals = document.getElementById('btnAnimals');     //defined button animals
var btnCities = document.getElementById('btnCities');       //defined button cities
//var canvas = document.getElementById('canvas');             //defined of canvas
var gWord;                                                  //defined for guessing word
var character = "_ ";                                       //defined for getting character _ instead of letter
var checkNewgame=0;											//define for chceking if is pressed btn Newgame

function funNewgame(){
    document.getElementById('newgame').style.display = "none";
    document.getElementById('difficulity').style.display = "block";
    document.getElementById('alphabet').style.display = "none";
	checkNewgame++;	
}

function funDifficulity(value){
    document.getElementById('play').style.display = "none";
    document.getElementById('difficulity').style.display = "none";
    document.getElementById('category').style.display = "block"; 
    document.getElementById('alphabet').style.display = "none";
    gameDiff = value;
    console.log("Difficulity: "+gameDiff);
}

function funCategory(value){
    document.getElementById('play').style.display = "block";
    document.getElementById('difficulity').style.display = "none";
    document.getElementById('category').style.display = "none";
    document.getElementById('alphabet').style.display = "none";
    gameCat = value;
    console.log("Category: "+gameCat);
}

function checkLetter(value) {
        var letter = alphabet[value];
    
        console.log(value);
        console.log(letter);
        }

function game () {
        
    
        document.getElementById('play').style.display = "none";     
        document.getElementById('difficulity').style.display = "none";
        document.getElementById('category').style.display = "none";
        if(checkNewgame==0)
		   {
		   	document.getElementById('alphabet').style.display = "none";
		   }else if(checkNewgame>0)
		   {
			document.getElementById('alphabet').style.display = "block"; 
			}
        if(gameDiff==0)
          {
              if(gameCat==0)
            	{
                	random = Math.floor(Math.random()*easyAnimals.length); 
                	word = easyAnimals[random];
            	}else if(gameCat==1)
            	{
                	random = Math.floor(Math.random()*easyCities.length);  
                	word = easyCities[random];
            	}
              
          }else if(gameDiff==1)
              {
                  if(gameCat==0)
            		{
                		random = Math.floor(Math.random()*hardAnimals.length); 
                		word = hardAnimals[random];
            		}else if(gameCat==1)
            		{
                		random = Math.floor(Math.random()*hardCities.length);  
                		word = hardCities[random];
            		}
              }
        
            console.log(word);
            var x=0; //define for counting letters
            var wInstead='';
            var underline='_ ';   
            while(x<word.length)
            {
                wInstead=wInstead+underline;
                x++;
            }
            document.getElementById('gWord').innerHTML=wInstead;
			//CANVAS
			/*var c = document.getElementById('canvas');
              var ctx = c.getContext("2d");
              ctx.moveTo(10,10);
              ctx.lineTo(450,450);
              ctx.stroke();
			  */
}