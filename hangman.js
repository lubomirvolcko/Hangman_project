var random=0;
var word="";
var animals=["macka","pes","prasa"];
var capicity=["slavo","daj","tu","co","chces"];




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
  document.getElementById('catPage').style.display = "none"; 				//nezobrazuje sa "single page"
} 

/* function animals(){
    random = Math.floor(Math.random()*animals.length);		//Poprepájať a tak vymazať komentár inak to nepôjdeeee
    word = animals[random];
    }


function cities(){
    random = Math.floor(Math.random()*cities.length);		//To isté
    word = cities[random];
    console.log(random);
    } */



