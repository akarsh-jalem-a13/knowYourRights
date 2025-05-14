const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema({
    userId: { 
        type: mongoose.Schema.Types.ObjectId,
         ref: 'User' 
        },
    lawyerId: {
         type: mongoose.Schema.Types.ObjectId,
          ref: 'Lawyer' 
        },
    rating: {
         type: Number,
          min: 1, max: 5 
        },
    comment: {
        type:String
    },
  },{
    timestamps:true
  });

  module.exports = mongoose.model("reviews", reviewSchema)
  