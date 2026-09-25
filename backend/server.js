const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app=express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI).then(
    ()=> console.log('mongodb connected')
).catch((err)=> console.log(err));

app.get('/',(req,res)=>{
    res.send('app is running');
})

app.get('/about',(req,res)=>{
    res.send('this is about page');
})

const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=>{
    console.log('server is running');
})