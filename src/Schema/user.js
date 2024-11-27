import mongoose from "mongoose" 
import bcrypt from  "bcrypt"

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        minLength: 5
    },
    email: {
        type: String,
        required: true,
        unique: true,
        validate:{
            validator: function(emailValue){
                return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(emailValue);
            },
            message: 'Invalid Email'
        }
    },
    password: {
        type: String,
        required: true,
        minLength: 5
    }
}, {timestamps: true})

userSchema.pre('save', function modifyPassword(next){
    const user = this;

    const SALT = bcrypt.genSaltSync(9);

    const hashedPassword = bcrypt.hashSync(user.password, SALT);

    user.password = hashedPassword;

    next();
})

const user = mongoose.model("User", userSchema);

export default user


