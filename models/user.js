const{Schema, model} = require('mongoose');
const jwt = require('jsonwebtoken');


userSchema= Schema({
    name:{
        type: String,
        required: true,
        minlength:5,
        maxlength:100
    },
    email:{
        type: String,
        required: true,
        minlength:8,
        maxlength:255,
        unique: true
    },
    
        password:{
            type: String,
            required: true,
            minlength:5,
            maxlength:1024
        }
    

})

userSchema.methods.generateJWT = function(){
    const token = jwt.sign({id:this.id, email:this.email}, process.env.mySecretKey);
    return token;
}

const User = model('User', userSchema);



module.exports.User = User;