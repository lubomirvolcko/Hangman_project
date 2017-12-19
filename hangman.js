/* ##### START OF VARS #### */
var random = 0;                                               //defined for generating word
var word = "";                                                //defined for choesen word from random
var easyAnimals = ["CAT", "MOUSE", "HORSE", "DOG", "LION","WORM","FOX","SWAN","FROG","BEAR",
"PIG","ZEBRA","ELEPHANT","TIGER","PANTHER","BIRD","HAMSTER","MOUSE","DUCK","PENGUIN","CHICKEN",
"COW","SHEEP","GOAT","FISH","RAT","BUTTERFLY","BEE","SCORPION","SPIDER","FLY","BUNNY",
"TURTLE","JELLYFISH","SHARK","DOLPHIN","SNAIL","SNAKE","CENTIPEDE","MONKEY","DEER","BEAVER",
"CROCODILE","CAMEL","SEAL","GIRAFFE","EAGLE","FERRET","KANGAROO","OSTRICH","BISON","COALA"
,"PANDA"];                                    //defined field of animals
var easyCities = ["BRATISLAVA", "PARIS", "PRAGUE","SALZBURG","VENICE","DUBAI","CHARLESTON",
"BRUGES","KRAKOW","BEIRUT","LISBON","SYDNEY","BANGKOK","AMSTERDAM","ROME","ISTANBUL",
"BERLIN","CAPE","FLORENCE","MARRAKECH","PETERSBURG","BUDAPEST","LONDON","PARIS","TOKYO","BANGKOK",
"KOSICE","VIENNA","INNSBRUCK","LINZ","OSLO","MONTREAL","LISABON","MOSKVA","MISKOLC","BRNO","DUBLIN",
"DHAKA","DALLAS","KRAKOW","PRESOV","GRAZ","LONDON","TRNAVA","STOCKHOLM","SINGAPORE","BALI","BOSTON",
"HAMBURG","VARSAVA","MIAMI","HONGKONG","SYDNEY","BRUSSELS","CARTAGENA","HOLLYWOOD","DELHI"];                                     //defined field of cities
var hardAnimals = ["AARDVARK","BABOON", "SEAL","FALCON","PENGUIN","CRAB","SPITZ","GERBIL",
"PINSCHER","GHARIAL","CATTLE","HIMALAYAN","YAK","ZEBU","WOODPECKER","WOLVERINE","RHINOCEROS","CAPUCHIN",
"WHIPPET","WASP","WALRUS","SWAN","UAKARI","UGUISU","VULTURE","STOAT","LIONFISH","GECKO","LADYBIRD",
"KAKAPO","KUDU","INDRI","IMPALA","JACKAL","INDRI","IBIS","GROUSE","GOPHER","HIPPOPOTAMUS",
"HERON","HAVANESE","GAR","TAMARIN"];                                    //defined field of animals
var hardCities = ["BELMOPAN", "BIŠKEK", "BRIDGETOWN","BUJUMBURA","CARACAS","COTONOU","DAUHA","DODOMA",
"FREETOWN","GABORONE","CHARTUM","ISLAMABAD","JAMESTOWN","JEREVAN","KAMPALA","KATHMANDU","KIGALI","KINGSTON",
"KONAKRY","KOROR","LIBREVILLE","LOME","LUSAKA","MAMOUDZOU","MANAGUA","MASKAT","MONTEVIDEO","MORONI","NAIROBI",
"NASSAU","NIAMEY","NUUK","OUAGADOUGOU","PALIKIR","PARAMARIBO","PRAIA","QUITO","RABAT","SANA","SKOPJE","SANTIAGO",
"STANLEY","SUVA","THIMPHU"];                                     //defined field of cities
var hintEasyAnimals = ["COTTON BALL", "LOVES CHEESE", "STIFLE SHOE", "BEST FRIEND OF HUMAN", "KING OF THE ANIMALS","HIDES IN APPLE","GINGER RED COAT","THE UGLY DUCKLING",
                       "TURNS INTO THE PRINCE","WINTER SLEEP", "ROLLING IN THE MUD","CROSSWALK","BIG TRUNK","STRIPED WILD CAT","BLACK WILD CAT","KNOWS HOW TO FLY",
                       "RUNNING AROUND IN THE WHEEL","LOVES CHEESE","TOY IN THE BATH","BIRD IN A TAILCOAT","LAYS EGGS", "GIVES MILK","COTTON FUR","BEARD AND HORNS",
                       "BREATHE UNDER THE WATER","LONG TAILED MOUSE","COLORFUL WINGS","HONEY MAKER","POISON ON TAIL","WEB","ANNOYING BUG","CARROT", "CARAPACE",
                       "POISON TENTACLES","PADDLE ABOVE WATER","PLAYFUL FISH","HOUSE ON THE BACK","REPTILE","HUNDRED LEGS","HANGS ON THE TREES","MALES HAVE BIG HORNS",
                       "BUILDS A DAM", "AN ACIENT LIZARD","HUNCHBACK","SEA LION","LONG NECK","KING OF BIRDS","LONG BODY MOUSE", "WEARS THE BABY IN THE BAG","HEAD IN THE SAND",
                       "INDIAN HERD","CUTE SILVER BEAR","ASIAN BLACK AND WHITE BEAR"]; 	                             //defined field of hint easyAnimals
var hintEasyCities = ["CAPITAL CITY OF SLOVAKIA", "EIFFEL TOWER", "CHARLES BRIDGE","MOZART’S BIRTHPLACE","CANALS","LARGEST CITY IN THE UNITED ARAB EMIRATES",
                      "JAZZ DANCE", "CAPITAL CITY OF WEST FLANDERS ","CENTER OF SOUTH POLAND","CAPITAL CITY OF LABANON","CAPITAL CITY OF PORTUGAL",
                      "WORLDS LARGEST NATURAL HARBOUR","CAPITAL CITY OF THAILAND","CLOGS","COLOSSEUM","THE LARGEST CITY IN TURKEY", "CAPITAL CITY OF GERMANY",
                      "CAPITAL CITY OF SOUTH AFRICA","CAPITAL CITY OF TUSCANY","THE MAJOR CITY OD MORROCO","FORMER STALINGRAD","GRESHAM PALACE","BIG BEN",
                      "TRIUMPHAL ARCH","THE CAPITAL CITY OF JAPAN","CAPITAL CITY OF THAILAND", "ST. ELISABETH CATHEDRAL","SACHER TART","CAPITAL CITY OF TYROL",
                      "THE CAPITAL OF UPPER AUSTRIA","CAPITAL CITY OF NORWAY","CITY OF MARY","THE CAPITAL CITY OF PORTUGAL","SAINT BASILS CATHEDRAL",
                      "CASTLE OF DIÓSGYőR","SECOND LARGEST CITY IN CZECH REPUBLIC","THE LARGEST CITY OF IRELAND", "CAPITAL CITY OD BANGLADESH","MARGARET HUNT HILL BRIDGE",
                      "WAWEL CATHEDRAL","SALTERN IN EAST SLOVAKIA","CAPITAL OF STYRIA","NOTTING HILL CARNIVAL","JAN KONIAREK GALLERY","CAPITAL OF SWEDEN",
                      "GARDENS BY THE BAY","THE ISLAND OF THE GODS","TEA PARTY", "ST NKOLAI MAMORIAL IN GERMANY","THE CAPITAL CITY OF POLAND",
                      "THE BARNACLE HISTORIC STATE PARK","FOURTH MOST DENSLEY POPULATED REGION IN THE EARTH","JORN UTZON’S OPERA HOUSE","CAPITAL OF BELGIUM","BOCAGRANDE HARBOUR","WALK OF FAME","CAPITAL OF INDIA"]; 	                             //defined field of hint easyCities
var hintHardAnimals = ["PIG-LIKE SNOUT","RED BACK MONKEY", "SEA LION","BIRD OF PREY","BIRD THAT CAN’T FLY","SEA SPIDER WITH TWO CLAWS",
                       "DOG WITH WHITE THICK FUR AND CURLED TAIL","DESERT RAT", "LITTLE SIZED DOBERMAN","FISH-EATING CROCODILE","ADULT COW",
                       "WHITE RABBIT WITH BLACK EARS","LONG-HAIRED BULL","AFRICAN COW","TREE DOCTOR","SKUNK BEAR","NOSE HORN","ORGAN GRINDER MONKEY", 
                       "SKINNY DOG","BEE-LIKE INSECT","SEAL WITH LARGE TEETH","THE UGLY DUCKLING","RED FACED MONKEY","JAPANESE BUSH WARBLER",
                       "SCAVENGING BIRD OF PRAY","SHORT TAILED WEASEL","VENOMOUS MARINE FISH","LITTLE LIZARD","RED BUG WITH DOTS", 
                       "NEW ZELAND’S OWL-PAROT","THE BIGGEST ANTILOPE","THE LARGEST LEMUR","MEDIUM-SIZED ANTELOPE","DOG-LIKE WOLF",
                       "THE LARGEST LEMUR","LONG-LEGGED WADING BIRD","CHICKEN-BUILT LIKE BIRD FROM TEXAS","BIG TEETHWILD MOUSE",
                       "RIVER HORSE", "LONG-LEGGED FRESHWATER BIRD","BISCHON TYPE DOG","GAR","FISH WITH LONG SLIM NOSE"];                                //defined field of hint hardAnimals	
var hintHardCities = ["CAPITAL CITY OF BELIZE", "BIŠKEK", "CAPITAL CITY OF BARBADOS","CAPITAL CITY OF BURUNDI",
                      "CAPITAL CITY OF VENEZUELA","THE LARGEST CITY OF BENIN","CAPITAL CITY OF STATE OF QATAR",
                      "CAPITAL CITY OF TANZANIA", "CAPITAL CIY OF SIERRA LEONE","CAPITAL CITY OF BOTSWANA",
                      "CAPITAL CITY OF SUDAN","CAPITAL CITY OF PAKISTAN","AMERICA’S FIRST PERMANENT ENGLISH COLONY",
                      "CAPITAL CITY OF ARMENIA","CAPITAL CITY OF UGANDA","CAPITAL CITY OF NEPAL","CAPITAL CITY OF RWANDA",
                      "CAPITAL CITY OF JAMAICA", "CAPITAL CITY OF GUINEA","MAIN COMMERCIAL CITY OF PALAU",
                      "CAPITAL CITY OF GABON","THE CAPITAL CITY OF TOGO","CAPITAL CITY OF ZAMBIA","CAPITAL CITY OF MAYOTTE",
                      "CAPITAL CITY OF NIKARAGUA","CAPITAL CITY OF OMAN","THE LARGEST CITY OF URUGUAY","CAPITAL CITY OF COMOROS",
                      "CAPITAL CITY OF KENYA", "CAPITAL CITY OF BAHAMAS","CAPITAL CITY OF NIGER","CAPITAL CITY OF GREENLAND",
                      "CAPITAL CITY OF BURKINA FASO","CAPITAL CITY OF MICRONESIA","CAPITAL CITY OF SURINAM",
                      "GHOST TOWN IN UTAH","CAPITAL CITY OF ECUADOR","CAPITAL CITY OF MAROCCO","CAPITAL CITY OF YEMEN",
                      "CAPITAL CITY OF MACEDONIA","CAPITAL CITY OF CHILE", "CAPITAL CITY OF THE FALKLAND ISLANDS",
                      "CAPITAL CITY OF FIJI","CAPITAL CITY OF BHUTAN"];                                 //defined field of hint hardCities
var gameDiff;                                                 //defined for chosen difficulty
var gameCat;                                                  //defined for chosen category
var alphabet = ['A', 'B', 'C', 'D', 'E',
                'F', 'G', 'H', 'I', 'J',
                'K', 'L', 'M', 'N', 'O', 
                'P', 'Q', 'R', 'S', 'T', 
                'U', 'V', 'W', 'X', 'Y', 'Z'];                                       //defined field of alphabet
var gWord;                                                    //defined for guessing word
var character = "_ ";                                         //defined for getting character _ instead of letter
var checkNewgame=0;                                           //define for chceking if is pressed btn Newgame
var answerArray=[];                                           //define array for underline and guessed letter
var lives=10;                                                 //define for lives
var score=0;                                                  //define for score
var checkWord=0;                                              //define for counting right guessed word
var checkScore;                                               //define for finish score
var imgMistake = document.getElementById('imgMistake');       //define for div mistake
/* ##### END OF VARS #### */

function funNewgame(){ //set visible/unvisible div in html
    document.getElementById('newgame').style.display = "none"; //BUTTON newgame
    document.getElementById('difficulty').style.display = "block"; //DIV difficility
    document.getElementById('alphabet').style.display = "none"; //DIV alphabet
    document.getElementById('divMistake').style.display = "none"; //DIV mistakes
    document.getElementById('logo').style.display = "visible"; //IMG logo
    document.getElementById('divLogo').style.display = "visible"; //IMG logo
    document.getElementById('header').style.display = "none";
    document.getElementById('footer').style.display = "none";
    document.getElementById('hint').style.display = "none";
    document.getElementById('mainmenu').style.display = "none";
    document.getElementById('reset').style.display = "none";
    checkNewgame++; //for finding if was pressed new game
} /* ### END OF FUNCTION funNewgame ### */ 

function fundifficulty(value){ //set visible/unvisible div in html
    document.getElementById('play').style.display = "none"; //BUTTON play
    document.getElementById('difficulty').style.display = "none"; //DIV difficility
    document.getElementById('category').style.display = "block"; //DIV category
    document.getElementById('alphabet').style.display = "none"; //DIV alphabet
    document.getElementById('divMistake').style.display = "none"; //DIV mistakes
    document.getElementById('logo').style.display = "visible"; //IMG logo
    document.getElementById('divLogo').style.display = "visible"; //IMG logo
    document.getElementById('mainimg').style.display = "visible"; //DIV mainimg
    gameDiff = value; //saveing choosen difficulty to var gameDiff
    console.log("difficulty: "+gameDiff+" (0-easy; 1-hard;)"); //print to console chosen difficulty
     document.getElementById('mainmenu').style.display = "none";
    document.getElementById('reset').style.display = "none";
} /* ### END OF FUNCTION fundifficulty ### */

function funCategory(value){ //set visible/unvisible div in html
    document.getElementById('play').style.display = "block"; //BUTTON play
    document.getElementById('difficulty').style.display = "none"; //DIV difficility
    document.getElementById('category').style.display = "none"; //DIV category 
    document.getElementById('alphabet').style.display = "none"; //DIV alphabet
    document.getElementById('divMistake').style.display = "none"; //DIV mistakes
    document.getElementById('logo').style.display = "visible"; //IMG logo
    document.getElementById('divLogo').style.display = "visible"; //IMG logo
    document.getElementById('mainimg').style.display = "visible"; //DIV mainimg
    gameCat = value; //saveing choosen category to var gameCat
    console.log("Category: "+gameCat+" (0-animals; 1-cities;)"); //print to console chosen category
     document.getElementById('mainmenu').style.display = "none";
    document.getElementById('reset').style.display = "none";
} /* ### END OF FUNCTION funCategory ### */

function checkLetter(value) { //function for chcecking pressed letter
    
    
    var letter = alphabet[value]; //save pressed letter to var letter
    
        for(var i=0;i<word.length;i++) //browse word length
        {
            if(word[i]==letter && (lives>0 && checkScore!=score) && checkWord!=word.length) //compare insert letter from user with guessed word
            {
                answerArray[i]=letter;  //if guessed letter is correct insert it to position
                checkWord=checkWord+1;  //if guessed letter is correct add 1 to checkWord
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
                        imgMistake.src="img/mistakes/win.gif";
                    }else{
                        document.getElementById("lives").innerHTML="Lives: "+lives; //print lives
                    }
                
            }else if(lives<=0) //if lives are 0 or less
                {
                    document.getElementById("lives").innerHTML="Game Over!"; //print Game Over!
                    imgMistake.src="img/mistakes/gameover.gif";

                   
                    var s=answerArray.join(" "); //insert between underlines space
                    document.getElementById("gWord").innerHTML= "<span style='color:#cd6a02;'>"+word+"</span>"; //write on screen underlines
                }

        for(var g=0;g<26;g++) 
        {
            if(letter==alphabet[g] && (lives>0 && checkScore!=score) && checkWord!=word.length)
            document.getElementById(alphabet[g]).style.visibility = "hidden"; //hide letter after click
        }     

        } /* ### END OF FUNCTION checkLetter ### */

function funHint () {
    var checkBtnHint = 1;
	document.getElementById('btnHint').style.display = "none";
	if(checkBtnHint==1)
		{
			if(gameDiff==0) //if was choosen difficulity easy
             { 				 
              	if(gameCat==0) //if was choosen category animals
                {
                document.getElementById('hintSentence').innerHTML = "Hint: "+hintEasyAnimals[random];
				}
				else if(gameCat==1) //if was choosen category cities
                {
                document.getElementById('hintSentence').innerHTML = "Hint: "+hintEasyCities[random];   
                }
              
          	}
			else if(gameDiff==1) //if was choosen difficulity hard
            {
				  
            	if(gameCat==0) //if was choosen category animals
                {
				document.getElementById('hintSentence').innerHTML = "Hint: "+hintHardAnimals[random];		
                }
				else if(gameCat==1) //if was choosen category cities
                {
				document.getElementById('hintSentence').innerHTML = "Hint: "+hintHardCities[random];		
                }
              }
             if(score>10)
                {
                    score-=10;
                }
		}
        else if (lives==0)
        {
            score=0;


        }
document.getElementById('hintSentence').style.display = "block"; //after click show hint 
}

function game() { //function for game
        
        document.getElementById('play').style.display = "none"; //BUTTON play
        document.getElementById('difficulty').style.display = "none"; //DIV difficility
        document.getElementById('category').style.display = "none"; //DIV category
        document.getElementById('header').style.display = "none"; //Header
        document.getElementById('footer').style.display = "none"; //Footer
        document.getElementById('hint').style.display = "none";
        document.getElementById('header_buttom_line').style.display = "none";
        document.getElementById('hangman_logo').style.display = "none";

        if(checkNewgame==0) //if WASN'T pressed button newgame
           {
            document.getElementById('alphabet').style.display = "none"; //DIV alphabet 
            document.getElementById('divMistake').style.display = "none"; //DIV mistakes
            document.getElementById("lives").style.display = "none"; //DIV lives
            document.getElementById('score').style.display = "none"; //DIV score
             document.getElementById('mainmenu').style.display = "none";
               document.getElementById('reset').style.display = "none";
           }else if(checkNewgame>0) //if WAS pressed button newgame
           {
            document.getElementById('logo').style.display = "none"; //IMG logo
            document.getElementById('divLogo').style.display = "none"; //IMG logo
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
            document.getElementById('mainmenu').style.display = "block";
            document.getElementById('reset').style.display = "block";
            document.getElementById('header_buttom_line').style.display = "block";
            document.getElementById('hangman_logo').style.display = "block";   
            }
        if(gameDiff==0) //if was choosen difficulty easy
             { document.getElementById("difshowdurgam").innerHTML="Difficulty: Easy"
              if(gameCat==0) //if was choosen category animals
                {
                    random = Math.floor(Math.random()*easyAnimals.length); //generate random  word from field easyAnimals
                    word = easyAnimals[random]; //save random word from field easyAnimals to var word
                    document.getElementById("catshowdurgam").innerHTML="Category: Animals";
                }else if(gameCat==1) //if was choosen category cities
                {
                    random = Math.floor(Math.random()*easyCities.length); //generate random  word from field easyCities 
                    word = easyCities[random]; //save random word from field easyCities to var word
                    document.getElementById("catshowdurgam").innerHTML="Category: Cities";
                }
              
          }else if(gameDiff==1) //if was choosen difficulty hard
              {document.getElementById("difshowdurgam").innerHTML="Difficulty: Hard"
                  if(gameCat==0) //if was choosen category animals
                    {document.getElementById("catshowdurgam").innerHTML="Category: Animals";
                        random = Math.floor(Math.random()*hardAnimals.length); //generate random  word from field hardAnimals 
                        word = hardAnimals[random]; //save random word from field hardAnimals to var word
                        document.getElementById('lives').innerHTML = "Lives: "+lives; //print lives
                    }else if(gameCat==1) //if was choosen category cities
                    {document.getElementById("catshowdurgam").innerHTML="Category: Cities";
                        random = Math.floor(Math.random()*hardCities.length);  //generate random  word from field hardCities  
                        word = hardCities[random]; //save random word from field easyCities to var word
                        document.getElementById('lives').innerHTML = "Lives: "+lives; //print lives
                    }
              }
        
            console.log(word); //get to console random generated word
            
            
           for(var i = 0; i<word.length;i++)  //browse word length
           {
           answerArray[i]="<span style='color:#cd6a02;'>_</span>";    //write underlines exact position
           }
           var s=answerArray.join(" "); //insert between underlines space
           document.getElementById("gWord").innerHTML= s; //write on screen underlines 
    
    
    
} /* ### END OF FUNCTION game ###*/





function reset () {
var checkReset = 1;
score=0;
lives=10;
checkWord=0;

for(var i = 0; i<word.length;i++)  //browse word length
           {
           answerArray[i]="";    //write underlines exact position
           }
for(var g=0;g<26;g++) 
        {
            document.getElementById(alphabet[g]).style.visibility = "visible"; //hide letter after click
        }
document.getElementById('lives').innerHTML = "Lives: "+lives;
 imgMistake.src="img/mistakes/mistake0.png";
 if(gameDiff==0) //if was choosen difficulty easy
             { document.getElementById("difshowdurgam").innerHTML="Difficulty: Easy"
              if(gameCat==0) //if was choosen category animals
                {
                    random = Math.floor(Math.random()*easyAnimals.length); //generate random  word from field easyAnimals
                    word = easyAnimals[random]; //save random word from field easyAnimals to var word
                    console.log(word);
                    document.getElementById("catshowdurgam").innerHTML="Category: Animals";
                }else if(gameCat==1) //if was choosen category cities
                {
                    random = Math.floor(Math.random()*easyCities.length); //generate random  word from field easyCities 
                    word = easyCities[random]; //save random word from field easyCities to var word
                    console.log(word);
                    document.getElementById("catshowdurgam").innerHTML="Category: Cities";
                }
              
          }else if(gameDiff==1) //if was choosen difficulty hard
              {document.getElementById("difshowdurgam").innerHTML="Difficulty: Hard"
                  if(gameCat==0) //if was choosen category animals
                    {document.getElementById("catshowdurgam").innerHTML="Category: Animals";
                        random = Math.floor(Math.random()*hardAnimals.length); //generate random  word from field hardAnimals 
                        word = hardAnimals[random]; //save random word from field hardAnimals to var word
                        console.log(word);
                        document.getElementById('lives').innerHTML = "Lives: "+lives; //print lives
                    }else if(gameCat==1) //if was choosen category cities
                    {document.getElementById("catshowdurgam").innerHTML="Category: Cities";
                        random = Math.floor(Math.random()*hardCities.length);  //generate random  word from field hardCities  
                        word = hardCities[random]; //save random word from field easyCities to var word
                        console.log(word);
                        document.getElementById('lives').innerHTML = "Lives: "+lives; //print lives
                    }
              } 
            document.getElementById('score').innerHTML = "Score: "+score; // print score
                      document.getElementById("lives").innerHTML="Lives: "+lives; //print lives
                      document.getElementById("gWord").innerHTML= s;
                      
           for(var i = 0; i<word.length;i++)  //browse word length
           {
           answerArray[i]="<span style='color:#cd6a02;'>_</span>";    //write underlines exact position
           }
           var s=answerArray.join(" "); //insert between underlines space
           document.getElementById("gWord").innerHTML= s; //write on screen underlines
             
              document.getElementById('btnHint').style.display = "block"; //show hint button
              
              document.getElementById('hintSentence').style.display = "none"; //hide previously hintSentence
              



          



          
        
}



