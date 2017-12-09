/* ##### START OF VARS #### */
var random = 0;                                               //defined for generating word
var word = "";                                                //defined for choesen word from random
var easyAnimals = ["CAT", "MOUSE", "HORSE", "DOG", "LION","WORM","FOX","SWAN","FROG","BEAR",
"PIG","ZEBRA","ELEPHANT","TIGER","PANTHER","BIRD","HAMSTER","MOUSE","DUCK","PENGUIN","CHICKEN",
"COW","SHEEP","GOAT","FISH","RAT","BUTTERFLY","BEE","SCORPION","SPIDER","FLY","BUNNY","",
"TURTLE","JELLYFISH","SHARK","DOLPHIN","SNAIL","SNAKE","CENTIPEDE","MONKEY","DEER","BEAVER",
"CROCODILE","CAMEL","SEAL","GIRAFFE","EAGLE","FERRET","KANGAROO","OSTRICH","BISON","COALA"
,"PANDA"];   //defined field of animals
var easyCities = ["BRATISLAVA", "PARIS", "PRAGUE","SALZBURG","VENICE","DUBAI","ChARLESTON",
"BRUGES","KRAKOW","BEIRUT","LISBON","SYDNEY","BANGKOK","AMSTERDAM","ROME","ISTANBUL",
"BERLIN","CAPE","FLORENCE","MARRAKECH","PETERSBURG","BUDAPEST","LONDON","PARIS","TOKYO","BANGKOK",
"KOSICE","VIENNA","INNSBRUCK","LINZ","OSLO","MONTREAL","LISABON","MOSKVA","MISKOLC","BRNO","DUBLIN",
"DHAKA","DALLAS","KRAKOW","PRESOV","GRAZ","LONDON","TRNAVA","STOCKHOLM","SINGAPORE","BALI","BOSTON",
"HAMBURG","VARSAVA","MIAMI","HONGKONG","SYDNEY","BRUSSELS","CARTAGENA","HOLLYWOOD","DELHI"];  //defined field of cities
var hardAnimals = ["AARDVARK","BABOON", "SEAL","FALCON","PENGUIN","CRAB","SPITZ","GERBIL",
"PINSCHER","GHARIAL","CATTLE","HIMALAYAN","YAK","ZEBU","WOODPECKER","WOLVERINE","RHINOCEROS","CAPUCHIN",
"WHIPPET","WASP","WALRUS","SWAN","UAKARI","UGUISU","VULTURE","STOAT","LIONFISH","GECKO","LADYBIRD",
"KAKAPO","KUDU","INDRI","IMPALA","JACKAL","INDRI","IBIS","GROUSE","GOPHER","HIPPOPOTAMUS",
"HERON","HAVANESE","GAR","TAMARIN"];    //defined field of animals
var hardCities = ["BELMOPAN", "BIŠKEK", "BRIDGETOWN","BUJUMBURA","CARACAS","COTONOU","DAUHA","DODOMA",
"FREETOWN","GABORONE","CHARTUM","ISLAMABAD","JAMESTOWN","JEREVAN","KAMPALA","KATHMANDU","KIGALI","KINGSTON",
"KONAKRY","KOROR","LIBREVILLE","LOME","LUSAKA","MAMOUDZOU","MANAGUA","MASKAT","MONTEVIDEO","MORONI","NAIROBI",
"NASSAU","NIAMEY","NUUK","OUAGADOUGOU","PALIKIR","PARAMARIBO","PRAIA","QUITO","RABAT","SANA","SKOPJE","SANTIAGO",
"STANLEY","SUVA","THIMPHU"];     //defined field of cities 
var gameDiff;                                               //defined for chosen difficulity
var gameCat;                                                //defined for chosen category
var alphabet = ['A', 'B', 'C', 'D', 'E',
                'F', 'G', 'H', 'I', 'J',
                'K', 'L', 'M', 'N', 'O', 
                'P', 'Q', 'R', 'S', 'T', 
                'U', 'V', 'W', 'X', 'Y', 'Z'];                                     //defined field of alphabet
var play = document.getElementById('play');                 //defined div p,
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
/* ##### END OF VARS #### */

function funNewgame(){ //set visible/unvisible div in html
    document.getElementById('newgame').style.display = "none"; //BUTTON newgame
    document.getElementById('difficulity').style.display = "block"; //DIV difficility
    document.getElementById('alphabet').style.display = "none"; //DIV alphabet
	document.getElementById('divMistake').style.display = "none"; //DIV mistakes
	document.getElementById('logo').style.display = "visible"; //IMG logo
    document.getElementById('header').style.display = "none";
    document.getElementById('footer').style.display = "none";
    document.getElementById('hint').style.display = "none";
    document.getElementById('reset').style.display = "none";
    checkNewgame++; //for finding if was pressed new game
} /* ### END OF FUNCTION funNewgame ### */ 

function funDifficulity(value){ //set visible/unvisible div in html
    document.getElementById('play').style.display = "none"; //BUTTON play
    document.getElementById('difficulity').style.display = "none"; //DIV difficility
    document.getElementById('category').style.display = "block"; //DIV category
    document.getElementById('alphabet').style.display = "none"; //DIV alphabet
	document.getElementById('divMistake').style.display = "none"; //DIV mistakes
	document.getElementById('logo').style.display = "visible"; //IMG logo
	document.getElementById('mainimg').style.display = "visible"; //DIV mainimg
    gameDiff = value; //saveing choosen difficulity to var gameDiff
    console.log("Difficulity: "+gameDiff+" (0-easy; 1-hard;)"); //print to console chosen difficulity
     document.getElementById('reset').style.display = "none";
} /* ### END OF FUNCTION funDifficulity ### */

function funCategory(value){ //set visible/unvisible div in html
    document.getElementById('play').style.display = "block"; //BUTTON play
    document.getElementById('difficulity').style.display = "none"; //DIV difficility
    document.getElementById('category').style.display = "none"; //DIV category 
    document.getElementById('alphabet').style.display = "none"; //DIV alphabet
	document.getElementById('divMistake').style.display = "none"; //DIV mistakes
	document.getElementById('logo').style.display = "visible"; //IMG logo
	document.getElementById('mainimg').style.display = "visible"; //DIV mainimg
    gameCat = value; //saveing choosen category to var gameCat
    console.log("Category: "+gameCat+" (0-animals; 1-cities;)"); //print to console chosen category
     document.getElementById('reset').style.display = "none";
} /* ### END OF FUNCTION funCategory ### */

function checkLetter(value) { //function for chcecking pressed letter
    
	
	var letter = alphabet[value]; //save pressed letter to var letter
	
        for(var i=0;i<word.length;i++) //browse word length
        {
            if(word[i]==letter && (lives>0 && checkScore!=score) && checkWord!=word.length) //compare insert letter from user with guessed word
            {
                answerArray[i]=letter;	//if guessed letter is correct insert it to position
				checkWord=checkWord+1;	//if guessed letter is correct add 1 to checkWord
				score+=10; //add 10 points to score
				if((lives>0 && checkScore!=score) || checkWord!=word.length) //compare lives if are greater than 0 and checkScore isn't like score
					{	
						document.getElementById('score').innerHTML = "Score: "+score; //print score 
					}				
            }
			
        }	
        var j = (word.indexOf(letter));
      if (j == -1 && lives>0 && checkScore!=score && checkWord!=word.length) 
	  {
		  lives -= 1; //sub lives of 1
		  var imgMistake = document.getElementById('imgMistake');
		  switch(lives) //printing img when is mistake
		  {
			  	case 9: imgMistake.src="img/mistakes/mistake1.png";break; //when lives=9 set other img
				case 8: imgMistake.src="img/mistakes/mistake2.png";break; //when lives=8 set other img
				case 7: imgMistake.src="img/mistakes/mistake3.png";break; //when lives=7 set other img
				case 6: imgMistake.src="img/mistakes/mistake4.png";break; //when lives=6 set other img
				case 5: imgMistake.src="img/mistakes/mistake5.png";break; //when lives=5 set other img
				case 4: imgMistake.src="img/mistakes/mistake6.png";break; //when lives=4 set other img
			  	case 3: imgMistake.src="img/mistakes/mistake7.png";break; //when lives=3 set other img
				case 2: imgMistake.src="img/mistakes/mistake8.png";break; //when lives=2 set other img
				case 1: imgMistake.src="img/mistakes/mistake9.png";break; //when lives=1 set other img
				case 0: imgMistake.src="img/mistakes/mistake10.png";break; //when lives=0 set other img
		  }
		  if(score>=5 && checkScore!=score && checkWord!=word.length) // if lives are bigger than 5 & checkScore isn't score & checkWord isn't word.length
			  {
				 	score-=5; //sub 5 points from score
				  	document.getElementById('score').innerHTML = "Score: "+score; // print score
			  }else if(score==0 && checkScore==score) // if score is 0 & checkScore is like score
				  {
					  document.getElementById('score').innerHTML = "Score: "+score; // print score
				  }
      }
        document.getElementById("gWord").innerHTML=answerArray.join(" "); // print letter instead underline

        if(lives>0) // if lives reach 0 then print Game over
            {
				if(checkWord==word.length) //if value of checkWord is the same like lenght of word
					{
						document.getElementById("lives").innerHTML="You win!"; //print You win! if user guess the word
						checkScore=score; //set value of score to checkScore
					}else{
						document.getElementById("lives").innerHTML="Lives: "+lives; //print lives
					}
                
            }else if(lives<=0) //if lives are 0 or less
                {
                    document.getElementById("lives").innerHTML="Game Over!"; //print Game Over!
					checkScore=score; //set value of score to checkScore
                }

		for(var g=0;g<26;g++) 
		{
			if(letter==alphabet[g] && (lives>0 && checkScore!=score) && checkWord!=word.length)
    		document.getElementById(alphabet[g]).style.visibility = "hidden"; //hide letter after click
		}	  

        } /* ### END OF FUNCTION checkLetter ### */

/*function funHint () {
    document.getElementById('btnHint').innerHTML = "HINT "+function;        //function HINT
}*/






function game () { //function for game
        
        document.getElementById('play').style.display = "none"; //BUTTON play
        document.getElementById('difficulity').style.display = "none"; //DIV difficility
        document.getElementById('category').style.display = "none"; //DIV category
        document.getElementById('header').style.display = "none"; //Header
        document.getElementById('footer').style.display = "none"; //Footer
        document.getElementById('hint').style.display = "none";

        if(checkNewgame==0) //if WASN'T pressed button newgame
           {
            document.getElementById('alphabet').style.display = "none"; //DIV alphabet 
			document.getElementById('divMistake').style.display = "none"; //DIV mistakes
			document.getElementById("lives").style.display = "none"; //DIV lives
			document.getElementById('score').style.display = "none"; //DIV score
             document.getElementById('reset').style.display = "none";
           }else if(checkNewgame>0) //if WAS pressed button newgame
           {
			document.getElementById('logo').style.display = "none"; //IMG logo
			document.getElementById('mainimg').style.display = "none"; //DIV mainimg
            document.getElementById('alphabet').style.display = "block"; //DIV alphabet
			document.getElementById('divMistake').style.display = "block"; //DIV mistakes
			document.getElementById("lives").style.display = "block"; //DIV lives
			document.getElementById("lives").innerHTML="Lives: "+lives; //print lives
			document.getElementById('score').style.display = "block"; //DIV score
			document.getElementById('score').innerHTML = "Score: "+score; //print score
            document.getElementById('header').style.display = "block"; //Header
            document.getElementById('footer').style.display = "block"; //Footer
            document.getElementById('hint').style.display = "block";
            document.getElementById('reset').style.display = "block";
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
                        document.getElementById('lives').innerHTML = "Lives: "+lives; //print lives
                    }else if(gameCat==1) //if was choosen category cities
                    {
                        random = Math.floor(Math.random()*hardCities.length);  //generate random  word from field hardCities  
                        word = hardCities[random]; //save random word from field easyCities to var word
                        document.getElementById('lives').innerHTML = "Lives: "+lives; //print lives
                    }
              }
        
            console.log(word); //get to console random generated word
            
            
           for(var i = 0; i<word.length;i++)  //browse word length
           {
            answerArray[i]="_";               //write underlines exact position

           }
           var s=answerArray.join(" "); //insert between underlines space
           document.getElementById("gWord").innerHTML= s; //write on screen underlines 
	
} /* ### END OF FUNCTION game ###*/