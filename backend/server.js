const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const userRoutes = require('./routes/userRoutes');
const User = require('./models/User');


const app=express();
app.use(cors());
app.use(express.json());
app.use('/api', userRoutes);

mongoose.connect(process.env.MONGO_URI).then(
    ()=> console.log('mongodb connected')
).catch((err)=> console.log(err));

app.post("/Users", async(req, res) => {
    const { name, age } = req.body;

    console.log(name);
    console.log(age);
     const user = new User({
        name: name,
        age: age
    });

     await user.save();

    res.json({
        message: "Data received successfully",
        name,
        age
    });
});

app.get('/',(req,res)=>{
    res.send('app is running');
})



const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=>{
    console.log('server is running');
})