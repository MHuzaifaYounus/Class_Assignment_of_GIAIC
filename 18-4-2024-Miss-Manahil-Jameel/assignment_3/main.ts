// write a function to find first not repeated charc.
function getNonRepeated(str:string) {
   for (let index = 0; index < str.length; index++) {
        if(!str.replace(str[index],"").includes(str[index])){
            return str[index]  
        }
   }   
  
   
}
console.log(getNonRepeated("typscript"));
