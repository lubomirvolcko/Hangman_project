/* var random=0;
var word="";
var animals=["cat","mouse","horse","dog","lion"];
var cities=["Bratislava","Paris","Dubai","Prague"];
var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
        'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
        't', 'u', 'v', 'w', 'x', 'y', 'z'];
*/
var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
        'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
        't', 'u', 'v', 'w', 'x', 'y', 'z'];

 function play(){
  document.getElementById('entryPage').style.display = "none";
  document.getElementById('singlePage').style.display = "block";
}

 function easy(){
  document.getElementById('entryPage').style.display = "none";
  document.getElementById('singlePage').style.display = "none";
  document.getElementById('catPage').style.display = "block";
}

function hard(){
  document.getElementById('entryPage').style.display = "none";
  document.getElementById('singlePage').style.display = "none";
  document.getElementById('catPage').style.display = "block";
}


function time () { 
  document.getElementById('entryPage').style.display = "block";     
  document.getElementById('singlePage').style.display = "none";
  document.getElementById('catPage').style.display = "none";        //nezobrazuje sa "single page"
} 

function animals(){
  var random=0; 
  var word="";
  var animals=["cat","mouse","horse","dog","lion"];
    random = Math.floor(Math.random()*animals.length); 
    word = animals[random];
    console.log(word);
       var x=0;
    var wInstead='';
    var underline='_ ';   
        while(x<word.length)
        {
        wInstead=wInstead+underline;

      x++;
      }
 document.getElementById('gWord').innerHTML=wInstead
    }

function cities(){
  var random=0;
  var word="";
  var cities=["Bratislava","Paris","Dubai","Prague"];
    random = Math.floor(Math.random()*cities.length);  
    word = cities[random];
    var letter;
    console.log(word);
    var x=0;
    var wInstead='';
    var underline='_ ';   
        while(x<word.length)
        {
        wInstead=wInstead+underline;

      x++;
      }
 document.getElementById('gWord').innerHTML=wInstead;
      console.log(x);
}