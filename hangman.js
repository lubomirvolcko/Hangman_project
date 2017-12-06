var random = 0;                                               //defined for generating word
var word = "";                                                //defined for choesen word from random
var easyAnimals = ["CAT", "MOUSE", "HORSE", "DOG", "LION"];   //defined field of animals
var easyCities = ["BRATISLAVA", "PARIS", "DUBAI", "PRAGUE"];  //defined field of cities
var hardAnimals = ["CROCODILE", "FISH", "TIGER", "SNAKE"];    //defined field of animals
var hardCities = ["BERLIN", "VIENNA", "REYKJAVIK"];         //defined field of cities
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
var gWord;                                                  //defined for guessing word
var character = "_ ";                                       //defined for getting character _ instead of letter
var checkNewgame=0;                                         //define for chceking if is pressed btn Newgame
var answerArray=[];                                         //define array for underline and guessed letter
var lives=10;                                        		//define for lives
var score=0;												//define for score
var checkWord=0;											//define for counting right guessed word
var checkScore;												//define for finish score
function funNewgame(){ //set visible/unvisible div in html
    document.getElementById('newgame').style.display = "none";
    document.getElementById('difficulity').style.display = "block";
    document.getElementById('alphabet').style.display = "none";
	document.getElementById('canvas').style.display = "none";	document.getElementById('logo').style.display = "visible";
    checkNewgame++; //for finding if was pressed new game
} 

function funDifficulity(value){ //set visible/unvisible div in html
    document.getElementById('play').style.display = "none";
    document.getElementById('difficulity').style.display = "none";
    document.getElementById('category').style.display = "block"; 
    document.getElementById('alphabet').style.display = "none";
	document.getElementById('canvas').style.display = "none";
	document.getElementById('logo').style.display = "visible";
	document.getElementById('mainimg').style.display = "visible";
    gameDiff = value; //saveing choosen difficulity to var gameDiff
    console.log("Difficulity: "+gameDiff+" (0-easy; 1-hard;)");
}

function funCategory(value){ //set visible/unvisible div in html
    document.getElementById('play').style.display = "block";
    document.getElementById('difficulity').style.display = "none";
    document.getElementById('category').style.display = "none"; 
    document.getElementById('alphabet').style.display = "none";
	document.getElementById('canvas').style.display = "none";
	document.getElementById('logo').style.display = "visible";
	document.getElementById('mainimg').style.display = "visible";
    gameCat = value; //saveing choosen category to var gameCat
    console.log("Category: "+gameCat+" (0-animals; 1-cities;)");
}

function checkLetter(value) { //function for chcecking pressed letter
    
	/*c = document.getElementById('canvas');                      //define for canvas
    var ctx = c.getContext("2d");                               //define for canvas
	var img0 = document.createElement("IMG");
	img0.setAttribute("src", "mistake0.png");
	var cimg0 = ctx.drawImage(img0,10,440);
	var img1 = document.createElement("IMG");
	img1.setAttribute("src", "mistake1.png");
	var cimg1 = ctx.drawImage(img1,85,10);
	var img2 = document.createElement("IMG");
	img2.setAttribute("src", "mistake2.png");
	var img3 = document.createElement("IMG");
	img3.setAttribute("src", "mistake3.png");
	var img4 = document.createElement("IMG");
	img4.setAttribute("src", "mistake4.png");
	var img5 = document.createElement("IMG");
	img5.setAttribute("src", "mistake5.png");
	var img6 = document.createElement("IMG");
	img6.setAttribute("src", "mistake6.png");
	var img7 = document.createElement("IMG");
	img7.setAttribute("src", "mistake7.png");
	var img8 = document.createElement("IMG");
	img8.setAttribute("src", "mistake8.png");
	var img9 = document.createElement("IMG");
	img9.setAttribute("src", "mistake9.png");
	var img10 = document.createElement("IMG");
	img10.setAttribute("src", "mistake10.png");*/
	var letter = alphabet[value]; //save pressed letter to var letter
	
        for(var i=0;i<word.length;i++)    //browse word length
        {
            if(word[i]==letter && (lives>0 && checkScore!=score) && checkWord!=word.length)          //compare insert letter from user with guessed word
            {
                answerArray[i]=letter;	//if guessed letter is correct insert it to position
				checkWord=checkWord+1;	//if guessed letter is correct add 1 to checkWord
				score+=10;
				if((lives>0 && checkScore!=score) || checkWord!=word.length)
					{
						document.getElementById('score').innerHTML = "Score: "+score;
					}				
            }
			
        }	
        var j = (word.indexOf(letter));
      if (j == -1 && (lives>0 && checkScore!=score) && checkWord!=word.length) {
		  lives -= 1;
		  console.log("lives: "+lives);
		  if(score>=5 && (lives>0 && checkScore!=score) && checkWord!=word.length)
			  {
				 	score-=5; 
				  	document.getElementById('score').innerHTML = "Score: "+score;
			  }else if(score==0 && checkScore==score)
				  {
					  document.getElementById('score').innerHTML = "Score: "+score;
				  }
      }
        document.getElementById("gWord").innerHTML=answerArray.join(" ");  // print letter instead underline

        if(lives>0)     // if lives reach 0 then print Game over
            {
				if(checkWord==word.length)
					{
						document.getElementById("guesses").innerHTML="You win!";
						checkScore=score;
					}else{
						document.getElementById("guesses").innerHTML="Lives: "+lives;
					}
                
            }else if(lives<=0)
                {
                    document.getElementById("guesses").innerHTML="Game Over!";
					checkScore=score;
                }

		for(var g=0;g<26;g++) 
		{
			if(letter==alphabet[g] && (lives>0 && checkScore!=score) && checkWord!=word.length)
    		document.getElementById(alphabet[g]).style.visibility = "hidden"; //hide letter after click
		}
	
	  

        }

function game () { //function for game
        
        document.getElementById('play').style.display = "none";  //set visible/unvisible div in html 
        document.getElementById('difficulity').style.display = "none"; //set visible/unvisible div in html
        document.getElementById('category').style.display = "none"; //set category btn to unvisible
        if(checkNewgame==0) //set aplhabet keyboard to unvisible
           {
            document.getElementById('alphabet').style.display = "none";
			document.getElementById('canvas').style.display = "none";
			document.getElementById("guesses").style.display = "none";
			document.getElementById('score').style.display = "none";
           }else if(checkNewgame>0) //set aplhabet keyboard to visible
           {
			document.getElementById('logo').style.display = "none";
			document.getElementById('mainimg').style.display = "none";
            document.getElementById('alphabet').style.display = "block";
			document.getElementById('canvas').style.display = "block";
			document.getElementById("guesses").style.display = "block";
			   document.getElementById("guesses").innerHTML="Lives: "+lives;
			document.getElementById('score').style.display = "block";
				document.getElementById('score').innerHTML = "Score: "+score;
            }
        if(gameDiff==0) //if was choosen difficulity easy
          {
              if(gameCat==0) //if was choosen category animals
                {
                    random = Math.floor(Math.random()*easyAnimals.length); //generate random  word from field easyAnimals
                    word = easyAnimals[random]; //save random word from field easyAnimals to var word
                }else if(gameCat==1) //if was choosen category cities
                {
                    random = Math.floor(Math.random()*easyCities.length); //generate random  word from field easyCities 
                    word = easyCities[random]; //save random word from field easyCities to var word
                }
              
          }else if(gameDiff==1) //if was choosen difficulity hard
              {
                  if(gameCat==0) //if was choosen category animals
                    {
                        random = Math.floor(Math.random()*hardAnimals.length); //generate random  word from field hardAnimals 
                        word = hardAnimals[random]; //save random word from field hardAnimals to var word
                        document.getElementById('guesses').innerHTML = "Lives: "+lives;
                    }else if(gameCat==1) //if was choosen category cities
                    {
                        random = Math.floor(Math.random()*hardCities.length);  //generate random  word from field hardCities  
                        word = hardCities[random]; //save random word from field easyCities to var word
                        document.getElementById('guesses').innerHTML = "Lives: "+lives;
                    }
              }
        
            console.log(word);
            
            
           for(var i = 0; i<word.length;i++)  //browse word length
           {
            answerArray[i]="_";               //write underlines exact position

           }
           var s=answerArray.join(" "); //insert between underlines space
           document.getElementById("gWord").innerHTML= s; //write on screen underlines 
}