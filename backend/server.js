const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const userRoutes = require('./routes/userRoutes');

const app=express();
app.use(cors());
app.use(express.json());
app.use('/api', userRoutes);

mongoose.connect(process.env.MONGO_URI).then(
    ()=> console.log('mongodb connected')
).catch((err)=> console.log(err));

app.get('/',(req,res)=>{
    res.send('app is running');
})



const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=>{
    console.log('server is running');
})