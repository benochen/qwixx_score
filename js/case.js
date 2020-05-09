class Case{
  set ident(val){
    console.log("setting ident")
    this.identValue = val;
  }
  
  get ident(){
     console.log("getting ident");
     return this.identValue;
  }

  set check(val){
    console.log("setting check")
    this.checkValue = val;
  }
  
  get check(){
     console.log("getting check");
     return this.checkValue;
  }
}
 
    
  
  