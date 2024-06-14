async function fetchData() {
    setTimeout(() => {
        let promise = new Promise((resolve,reject) => { 
            resolve("Data fetched successfully!")
        })
    }, 1000);
}
