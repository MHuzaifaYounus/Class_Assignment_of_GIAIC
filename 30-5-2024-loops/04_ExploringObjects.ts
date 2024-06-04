type MYOBJ= {
    item1:string,
    item2:string,
    item3:string,
}
let myObj:MYOBJ = {
    item1: "value1",
    item2: "value2",
    item3: "value3",
}
for (const key in myObj) {
   console.log(key ,"=>" , myObj[key]);
   
}