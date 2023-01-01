let names=["Yaakov","John","Jen","jason","paul","frank","larray","paula","laura","jim"];

for(let i=0; i<names.length; i++){
    let firstLetter = names[i].charAt(0);
   if(firstLetter=="J" || firstLetter=="j" ){
    console.log("Good Bye " + names[i]);
   } else{
    console.log("Hello " + names[i]);
   }
}