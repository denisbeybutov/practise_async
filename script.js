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

// function addAsync(a, b, delay = 1000) {
//     return new Promise ((resolve,reject) => {
//         setTimeout(() => {
//             console.log('сумма через секунду');
//             const sum = a + b;
//             resolve(sum);
//         }, delay)
//     })
// }

// addAsync(2, 3).then(x => console.log(x)); // 5

//--------задача 4

// function wait(delay) {
//     return new Promise ((resolve,reject) => {
//         setTimeout(() => {            
//             resolve();
//         },delay)
        
//     })
    
// }

// async function code() {
// 	await wait(1000);
// 	console.log('success') // Выведется через 1000 мс
// }

// code();

//--------задача 5

// const delay = ms => new Promise(r => setTimeout(r, ms));

// const getUser = id => delay(20).then(() => ({ id, name: 'Alice' }));
// const getPosts = uid => delay(20).then(() => [{ id: 1, userId: uid }, { id: 2, userId: uid }]);
// const getFirstPostComments = pid => delay(20).then(() => [{ id: 11, postId: pid, text: 'Hello its great' }]);

// // Написать код, чтобы получить комментарий первого поста
// let userId = getUser(123)
// .then((user) => {
//     console.log(user.id)
//     return getPosts(user.id)
// })
// .then((arrOfPosts) => {
//     console.log(arrOfPosts[0].id)
//     return getFirstPostComments(arrOfPosts[0].id)
// })
// .then((post) => {
//     console.log(post[0].text)
// })

//---------------


// Promise.resolve("hello")
//   .then((result) => result + "world")
//   .then((result) => console.log(result))
//   .catch((err) => console.error(err));

//--

// Promise.reject("a")
//   .catch((p) => p + "b")
//   .catch((p) => p + "c")
//   .then((p) => p + "d")
//   .finally((p) => p + "e")
//   .then((p) => console.log(p));

// Promise.reject("a")
//   .then(
//     (p) => p + "1",
//     (p) => p + "2"
//   )
//   .catch((p) => p + "b")
//   .catch((p) => p + "c")
//   .then((p) => p + "d1")
//   .then(() => "d2")
//   .then((p) => p + "d3")
//   .finally((p) => p + "e")
//   .then((p) => console.log(p));

const promise1 = Promise.resolve("Пользователь");
const promise2 = Promise.reject(new Error("Ошибка загрузки"));
const promise3 = Promise.resolve("Настройки");

  function allSettled(prom1, prom2, prom3){
    let arr =[];
    
        prom1.then((res1)=>{
            console.log(res1)
            arr.push( {
                status: 'ful',
                value: res1
            })
        }).catch((res1)=> {
            console.log(res1)
            arr.push( {
                status: 'rej',
                value: res1
            })
        })
        

    
        prom2.then((res2)=> {
            console.log(res2)
            arr.push( {
                status: 'ful',
                value: res2
            })
        }).catch((res2)=> {
            console.log(res2)
            arr.push( {
                status: 'rej',
                value: res2
            })
        })

        prom3.then((res3)=> {
            console.log(res3)
            arr.push( {
                status: 'ful',
                value: res3
            })
        }).catch((res3)=> {
            console.log(res3)
            arr.push( {
                status: 'rej',
                value: res3
            })
        })
    
    
    return arr;
  }

console.log(allSettled(promise1, promise2, promise3))


// Promise.allSettled([promise1, promise2, promise3])
//   .then((results) => {
//     console.log(results);
//   });
