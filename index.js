//Promises: ECMAScript 2015
//async/await: ECMAScript 2017

// async function hello (nome){
    //     return `Hello, ${nome}`
    // }
const hello = async (nome) => {
    return `Hello ${nome}`
}
const resultado = hello("Ana")
resultado.then (r => console.log(r))


// function hello (nome){
//     return new Promise (function(resolve, reject){
//         resolve(`Hello, ${nome}`)
//     })
// }
// const resultado = hello ("Pedro")
// resultado.then (res => console.log(res))

// function hello (nome){
//     return `Hello, ${nome}`
// }
// const resultado = hello ("João")
// console.log(resultado)

// // require('dotenv').config()
// // const axios = require ('axios')

// // const { axios } = require("axios")

// // const { APPID, PROTOCOL , BASE_URL, UNITS, LANGUAGE, CNT, Q } = process.env

// // const url = `${PROTOCOL}://${BASE_URL}?q=${Q}&appid=${APPID}&lang=${LANGUAGE}&units=${UNITS}&cnt=${CNT}`


// axios.get(url)
// .then(res => {
//     console.log(res.data)
//     return res.data
// })
// .then(res => {
//     console.log(res.cnt)
//     axios.get(url).then(r => {

//     })
//     return res
// })
// .then(res => {
//     //return x.list
//     return res['list']
// })
// .then(res => {
//     res.forEach(elemento => {
//         console.log (new Date(+elemento.dt * 1000).toLocaleString())
//         console.log(`Temp min: ${elemento.main.temp_min}`)
//         console.log(`Temp max: ${elemento.main.temp_max}`)
//         console.log(`Descrição: ${elemento.weather[0].description}`)
//     })
//     // for (let i = 0; i < res.length; i++){
//     //     console.log (new Date(+(res[i].dt) * 1000).toLocaleString())
//     //     console.log ("Temp min: " + res[i].main.temp_min)
//     //     console.log("Temp max: " + res[i]['main']['temp_max'])
//     //     console.log ("Descrição: " + res[i].weather[0].description)
//     // }
//     //para cada previsão na lista
//     //exibir a temperatura minima
//     //exibir a temperatura maxima
//     //exibir a descricao
// })