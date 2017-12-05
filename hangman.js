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
//var canvas = document.getElementById('canvas');             //defined of canvas
var gWord;                                                  //defined for guessing word
var character = "_ ";                                       //defined for getting character _ instead of letter
var checkNewgame=0;                                         //define for chceking if is pressed btn Newgame
var answerArray=[];                                         //define array for underline and guessed letter
var lives=10;                                        //define maximum guesses

function funNewgame(){ //set visible/unvisible div in html
    document.getElementById('newgame').style.display = "none";
    document.getElementById('difficulity').style.display = "block";
    document.getElementById('alphabet').style.display = "none";
    checkNewgame++; //for finding if was pressed new game
} 

function funDifficulity(value){ //set visible/unvisible div in html
    document.getElementById('play').style.display = "none";
    document.getElementById('difficulity').style.display = "none";
    document.getElementById('category').style.display = "block"; 
    document.getElementById('alphabet').style.display = "none";
    gameDiff = value; //saveing choosen difficulity to var gameDiff
    console.log("Difficulity: "+gameDiff);
}

function funCategory(value){ //set visible/unvisible div in html
    document.getElementById('play').style.display = "block";
    document.getElementById('difficulity').style.display = "none";
    document.getElementById('category').style.display = "none"; 
    document.getElementById('alphabet').style.display = "none";
    gameCat = value; //saveing choosen category to var gameCat
    console.log("Category: "+gameCat);
}

function checkLetter(value) { //function for chcecking pressed letter
        var letter = alphabet[value]; //save pressed letter to var letter
        for(var i=0;i<word.length;i++)    //browse word length
        {
            if(word[i]==letter)          //compare insert letter from user with guessed word
            {
                answerArray[i]=letter;         //if guessed letter is correct insert it to position
            }
        }
        var j = (word.indexOf(letter));
      if (j === -1) {
        lives -= 1;
      }
        document.getElementById("gWord").innerHTML=answerArray.join(" ");  // print letter instead underline
        
        document.getElementById("guesses").innerHTML="Lives: "+lives;
    
        console.log(value);
        console.log(letter);


        if(value==0)
        document.getElementById("A").style.visibility = "hidden";//Hide letter after click
        else if(value==1) 
         document.getElementById("B").style.visibility = "hidden";
         else if(value==2) 
         document.getElementById("C").style.visibility = "hidden";
         else if(value==3) 
         document.getElementById("D").style.visibility = "hidden";
         else if(value==4) 
         document.getElementById("E").style.visibility = "hidden";
         else if(value==5) 
         document.getElementById("F").style.visibility = "hidden";
         else if(value==6) 
         document.getElementById("G").style.visibility = "hidden";
         else if(value==7) 
         document.getElementById("H").style.visibility = "hidden";
         else if(value==8) 
         document.getElementById("I").style.visibility = "hidden";
         else if(value==9) 
         document.getElementById("J").style.visibility = "hidden";
         else if(value==10) 
         document.getElementById("K").style.visibility = "hidden";  
         else if(value==11) 
         document.getElementById("L").style.visibility = "hidden";
         else if(value==12) 
         document.getElementById("M").style.visibility = "hidden";
         else if(value==13) 
         document.getElementById("N").style.visibility = "hidden";
         else if(value==14) 
         document.getElementById("O").style.visibility = "hidden";
         else if(value==15) 
         document.getElementById("P").style.visibility = "hidden";
         else if(value==16) 
         document.getElementById("Q").style.visibility = "hidden";
         else if(value==17) 
         document.getElementById("R").style.visibility = "hidden";
         else if(value==18) 
         document.getElementById("S").style.visibility = "hidden";
         else if(value==19) 
         document.getElementById("T").style.visibility = "hidden";
         else if(value==20) 
         document.getElementById("U").style.visibility = "hidden";
         else if(value==21) 
         document.getElementById("V").style.visibility = "hidden";
         else if(value==22) 
         document.getElementById("W").style.visibility = "hidden";
         else if(value==23) 
         document.getElementById("X").style.visibility = "hidden";
         else if(value==24) 
         document.getElementById("Y").style.visibility = "hidden";
         else if(value==25) 
         document.getElementById("Z").style.visibility = "hidden";


        }

function game () { //function for game
        
        document.getElementById('play').style.display = "none";  //set visible/unvisible div in html 
        document.getElementById('difficulity').style.display = "none"; //set visible/unvisible div in html
        document.getElementById('category').style.display = "none"; //set category btn to unvisible
        if(checkNewgame==0) //set aplhabet keyboard to unvisible
           {
            document.getElementById('alphabet').style.display = "none";
           }else if(checkNewgame>0) //set aplhabet keyboard to visible
           {
            document.getElementById('alphabet').style.display = "block"; 
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







            //CANVAS
            /*
            c = document.getElementById('canvas');                      //define for canvas
            var ctx = c.getContext("2d");                               //define for canvas
            
            var img1 = document.createElement("IMG");
            img1.setAttribute("src", "img1.png");
            img1.setAttribute("id", "img1");
            document.body.appendChild(img1);
            ctx.drawImage(img1,10,10);
            
            var img2 = document.createElement("IMG");
            img2.setAttribute("src", "img2.png");
            img2.setAttribute("id", "img2");
            document.body.appendChild(img2);
            ctx.drawImage(img2,10,10);*/
              
}