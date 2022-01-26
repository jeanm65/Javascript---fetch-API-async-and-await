
// //CREATE PROMISE
const promiseGetUsers = new Promise(function(resolve, reject){
    setTimeout(function(){
        if(USERS !== 'undefined'){
            resolve(USERS);
        }else {reject('users access impossible')}
    }, 2000)
})

// // RECUPERER L'ETAT DE PROMESSE 

promiseGetUsers
.then(function(u){
    let list = '<ul>'
    for(let user of u){
        
        list+=`<li>${user.name}</li>`
        list+='</ul>'
        document.querySelector('#user').innerHTML = list; 
    }
    return u.length
   
    
}).then(function(nbUsers){
    console.log(`il y a: ${nbUsers} utilisateurs`);
})
.catch(function(e){
    console.log(e);
})