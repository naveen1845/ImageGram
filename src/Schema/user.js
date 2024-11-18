import mongoose from "mongoose";

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


const user = mongoose.model("Users", userSchema);

export default user


