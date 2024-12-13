import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    username:{
        type :String,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    image:{
        type:String,
        default:""
    },
    searchHistory:{
        type:Array,
        default:[]
    }
});

export const User = mongoose.model('User', userSchema);//while execting the User would turn to users and if there is any other name it would have the similar effect
