const express = require('express');

const userRouter = require('./routers/userRouter');
const authRouter= require('./routers/authRouter');
const app = express();

app.use(express.json());

if(process.env.NODE_ENV ==='development'){
    console.log("Development server")

    
}

app.use('/api/user', userRouter);
app.use('/api/auth',authRouter);


module.exports= app;