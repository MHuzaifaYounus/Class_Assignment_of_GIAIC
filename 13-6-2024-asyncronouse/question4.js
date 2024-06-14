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
function fetchWithError() {
    return __awaiter(this, void 0, void 0, function* () {
        setTimeout(() => {
            let promise = new Promise((resolve, reject) => {
                let random = Math.random();
                if (random <= 0.5) {
                    resolve("Data fetched successfully!");
                }
                else if (random >= 0.5) {
                    reject("Data fetch failed!");
                }
            });
            promise.then((response) => {
                console.log(response);
            }).catch((err) => {
                console.log(err);
            });
        }, 1000);
    });
}
fetchWithError();
