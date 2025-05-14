const mongoose = require('mongoose')

const userSchema =  new mongoose.Schema({
    name:{
        type:String,
    },
    phone:{
        type: String,
    },
    email:{
        type:String
    },
    // password:{
    //     type:String
    // },
    gender:{
        type:String,
        enum:[Male,Female,Other]
    },
    dob:{
        type:Date
    },
    profileImage:{
        type:String
    },
    isVerified: {
         type: Boolean,
          default: false 
        },
  walletBalance: {
     type: Number,
      default: 0 
    }
},
{
    timestamps:true
})

module.exports = mongoose.model("users",userSchema)