require('dotenv').config()
const axios = require ('axios')

const { APPID, PROTOCOL , BASE_URL, UNITS, LANGUAGE } = process.env

const url = `${PROTOCOL}://${BASE_URL}?q=Itu&appid=${APPID}&lang=${LANGUAGE}&units=${UNITS}`


axios.get(url)
.then(res => console.log(res.data))