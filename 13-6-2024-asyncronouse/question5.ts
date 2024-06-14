
let fetchdata = new Promise((resolve, reject) => {
    resolve("Fetch Data Successfully!")

})


let processData = new Promise((resolve, reject) => {
    resolve("Proccessed Data Successfully!")

})


async function executeSequentially() {
    let fetch = await fetchdata
    let process =await processData
    console.log(fetch);
    console.log(process);
    


}
executeSequentially()