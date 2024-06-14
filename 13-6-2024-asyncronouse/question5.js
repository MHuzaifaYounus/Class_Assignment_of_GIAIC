"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
let fetchdata = new Promise((resolve, reject) => {
    resolve("Fetch Data Successfully!");
});
let processData = new Promise((resolve, reject) => {
    resolve("Proccessed Data Successfully!");
});
function executeSequentially() {
    return __awaiter(this, void 0, void 0, function* () {
        let fetch = yield fetchdata;
        let process = yield processData;
        console.log(fetch);
        console.log(process);
    });
}
executeSequentially();
