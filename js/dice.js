class Dice{
     
   constructor(color,value)
   {
       this.colorValue=color;
       this.value=value;
   }
    set color(color){
      console.log("setting color")
      this.colorValue = color;
    }
    
    get color(){
       console.log("getting color");
       return this.colorValue;
    }
  
    set val(val){
      console.log("setting value")
      this.value = val;
    }
    
    get check(){
       console.log("getting value");
       return this.value;
    }

     roll(){
          this.value=(Math.floor(Math.random() * Math.floor(6)))+1;
    }

     showDice(){

        return "{color:"+this.colorValue+",value:"+this.value+"}"
    }

     
  }
   