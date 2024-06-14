async function fetchWithError() {
    setTimeout(() => {
        let promise = new Promise((resolve,reject) => { 
            let random = Math.random()
            if(random <= 0.5){
                resolve("Data fetched successfully!")
            }
            else if(random >= 0.5){
                reject("Data fetch failed!")
            }
         })
         promise.then((response) => { 
            console.log(response);
            
          }).catch((err) => { 
            console.log(err);
            
          })
    }, 1000);
}
fetchWithError()