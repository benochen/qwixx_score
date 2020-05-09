class Line{
    constructor(){
      var whiteDice1=new Dice("w1",1);
      var whiteDice2=new Dice("w2",1);
      var redDice=new Dice("r",1);
      var yellowDice=new Dice("y",1);
      var greenDice= new Dice("g",1);
      var blueDice = new Dice("b",1);

      this.dicesArrayValue=new Array(6);

      this.dicesArrayValue[0]=whiteDice1;
      this.dicesArrayValue[1]=whiteDice2;
      this.dicesArrayValue[2]=redDice;
      this.dicesArrayValue[3]=yellowDice;
      this.dicesArrayValue[4]=greenDice;
      this.dicesArrayValue[5]=blueDice;

    }
  set dices(dicesArray){
      console.log("setting Dice array")
      this.dicesArrayValue = dicesArray;
    }
    
    get dices(){
       console.log("getting dice array");
       return this.dicesArrayValue;
    }
   showDiceSet(){

      let str="[";
      if(this.dicesArrayValue != undefined  ){
          for( var j=0;j<this.dicesArrayValue.length;j++)
          {
             str = str+this.dicesArrayValue[j].showDice();
          }
      }
      return str+"]";
    }

     throwDices(){
        
        for (var i=0;i<this.dicesArrayValue.length;i++){
           let dice=this.dicesArrayValue[i];
           dice.roll();
           this.dicesArrayValue[i]=dice;
        }
    }
  }
   