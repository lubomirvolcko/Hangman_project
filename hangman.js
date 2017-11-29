var random=0;
var word="";
var animals=["macka","pes","prasa"];
var capicity=["slavo","daj","tu","co","chces"];



 
function animal(){
    random = Math.floor(Math.random()*animals.length);
    word = animals[random];
    }

 function capcity(){
    random = Math.floor(Math.random()*capicity.length);
    word = capicity[random];
    console.log(random);
    }