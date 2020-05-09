var asset="./asset/img/"
var assetDice=asset+"dice";

var redLine= new Array(12);
var yellowLine= new Array(12);
var greenLine= new Array(12);
var blueLine=new Array(12);
var grilles = new  Array(4);
var diceSet=null;

function initRedLine(){

  for (var i = 0; i < 12; i++) { 
    let cell=new Case();
    num=i+2;
    cell.ident="r"+num;
    cell.check=false;
    redLine[i]=cell;

    //alert(redLine[i].a())
  } 
}

function initYellowLine(){

  for (var i = 0; i < 12; i++) { 
    let cell=new Case();
    num=i+2;
    cell.ident="y"+num;
    cell.check=false;
    yellowLine[i]=cell;

    //alert(redLine[i].a())
  } 
}

function initDiceSet()
{
  diceSet=new DiceSet();
}

function roll()
{
  console.log("roll")
  diceSet.throwDices();
  console.log(diceSet.showDiceSet());
   for(var k=0;k<diceSet.dicesArrayValue.length;k++){
     let dice= diceSet.dicesArrayValue[k];
     let id=dice.color;
     let value=dice.value;
    $('#'+"dice_"+id).css("background-image", "url("+assetDice+"/"+id+"_"+value+".png");  


   }
}

function initGreenLine(){

  for (var i = 0; i < 12; i++) { 
    let cell=new Case();
    num=i+2;
    cell.ident="g"+num;
    cell.check=false;
    greenLine[i]=cell;

    //alert(redLine[i].a())
  } 
}

function initBlueLine()
{
  for (var i = 0; i < 12; i++) { 
    let cell=new Case();
    num=i+2;
    cell.ident="b"+num;
    cell.check=false;
    blueLine[i]=cell;

    //alert(redLine[i].a())
  } 
}

function initGrille() 
{

   initRedLine();
  initYellowLine();
  initGreenLine();
  initBlueLine();
 grilles[0]=redLine;
 grilles[1]=yellowLine;
 grilles[2]=greenLine;
 grilles[3]=blueLine;
}

function getLine(id){
  if(id !=undefined){
    var line;
    var firstCh=id.substr(0,1)
    switch(firstCh){

      case 'r':
        console.log("red line selected")
        line=grilles[0];
        break    
      
      case 'y':
        console.log("yellow line selected")
        line=grilles[1];
        break;
      case 'g':
        console.log("green line selected")
        line=grilles[2];
        break;
        case 'b':
          console.log("blue line selected")
          line=grilles[3];
          break;
    }
       return line;
  }
}

function dumpLine(line){

  if(line != undefined){
    for (var i = 0; i < line.length; i++) { 
      console.log(line[i].ident+";"+line[i].check);
    } 
  }
}

function getCaseChecked(line,id){
   cell =undefined
  for (var i = 0; i < line.length; i++) { 
     var cell = line[i];

     if(cell.ident === id  ){
       return cell;
     }

  } 

  return cell;
}


function checkCase(line,cell)
{
   cell.check=true;
   for(i=0;i<line.length;i++){
      if(cell.ident===line[i].ident){
         line[i]=cell;
         $('#'+id).css("background-image", "url("+asset+id+"_checked.png");  

      }
   }
}
 function uncheckCase(line,cell)
{
   cell.check=false;
   for(i=0;i<line.length;i++){
      if(cell.ident===line[i].ident){
         line[i]=cell;
         $('#'+id).css("background-image", "url("+asset+id+".png");  

      }
   }
}





$(document).ready(function(){
  initGrille();
  initDiceSet();
  // jQuery methods go here...
  $(".case").click(function(){
     id = event.target.id;
     if(id != undefined){
        let line = getLine(id)
         let cell = getCaseChecked(line,id)
         if(cell != undefined ){
             if(!cell.check)
             {
              checkCase(line,cell);
             }else{

               uncheckCase(line,cell)
             }
         }
     }
  });

  $("#roll").click(function(){
    roll();
 });

}); 




