console.log('Hola Mundo')

setTimeout(() => {
    console.log('Mi nombre es: Miguel')
}, 5000);

console.log('como estan?')

/* Promesa */

let dollar = 1

setTimeout(() => {
    const newPromise = new Promise((resolve, reject) => {
        if (dollar > 0){
            resolve('Gracias por esos dolares 🤑');
        } else{
            reject('No tengo dinero 😭');
    }
})

    newPromise
    .then((respuesta) => {
        console.log(respuesta)
    })
    .catch(err => console.log(err));
}, 3000);

let galleta = 'chocolate'
setTimeout(() => {
    const galletas = new Promise((resolve, reject) => {
        if (galleta === 'Canela') {
            resolve('Si tiene sabor a canela')
        } else{
            reject('No tiene sabor a canela')
        }
    })
    galletas
    .then((respuestaDeGalleta) => {
        console.log(respuestaDeGalleta)
    })
    .catch(error => console.log(error));
}, 4000);