"use strict";
let myObj = {
    item1: "value1",
    item2: "value2",
    item3: "value3",
};
for (const key in myObj) {
    console.log(key, "=>", myObj[key]);
}
