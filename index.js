require('dotenv').config()
const cors = require('cors')
const express = require('express')
const app = express()


const router = require('./router')
const { default: mongoose } = require('mongoose')


mongoose.connect(process.env.DB).then(()=>console.log("connected")).catch((err)=>console.log(err))

app.use(cors())
app.use(express.json())
app.use('/',router)

app.listen(process.env.PORT)