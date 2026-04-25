//---

// function delayedAdd(a, b, delay, callback) {
//     setTimeout(() => {
         
//         callback('its error', a+b)
         
//     }, delay)
    
// }

// delayedAdd(7, 3, 50, (err, sum) => {
//   if (err) return console.error(err);
//   console.log('sum =', sum); // 5
// });


//---------

function readConfig(path, callback) {
    setTimeout(()=> {
        if(typeof path !== 'string') callback('Error: path is not string')
        else callback(null, {'path': path})
    },1000)
}

readConfig('/etc/app.json', (err, cfg) =>{
    console.log(err ? err.message : cfg)
    // {path: '/etc/app.json }  
}) 
readConfig(42, (err) => console.log(err)); // Error

//--------