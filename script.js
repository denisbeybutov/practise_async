//--- задача 1

// function delayedAdd(a, b, delay, callback) {
//     setTimeout(() => {
         
//         callback('its error', a+b)
         
//     }, delay)
    
// }

// delayedAdd(7, 3, 50, (err, sum) => {
//   if (err) return console.error(err);
//   console.log('sum =', sum); // 5
// });


//--------- Задача 2

// function readConfig(path, callback) {
//     setTimeout(()=> {
//         if(typeof path !== 'string') callback('Error: path is not string')
//         else callback(null, {'path': path})
//     },1000)
// }

// readConfig('/etc/app.json', (err, cfg) =>{
//     console.log(err ? err.message : cfg)
//     // {path: '/etc/app.json }  
// }) 
// readConfig(42, (err) => console.log(err)); // Error

//--------задача 3

function addAsync(a, b, delay = 1000) {
    return new Promise ((resolve,reject) => {
        setTimeout(() => {
            console.log('сумма через секунду');
            const sum = a + b;
            resolve(sum);
        }, delay)
    })
}

addAsync(2, 3).then(x => console.log(x)); // 5