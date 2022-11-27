const dotenv = require('dotenv');
const mongoose = require('mongoose');
dotenv.config({path:'./config.env'}); //always call before app
const app = require('./app');



// console.log(process.env);


mongoose.connect('mongodb://localhost:27017/my-student-2')
.then(()=>{
    console.log('mongodb connected successfully');
})
.catch(err=> console.log('connection failed'))

const port = process.env.PORT;
app.listen(port, ()=>{
    console.log(`listening on port ${port}`);
});