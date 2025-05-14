const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema({
  senderId: { 
    type: mongoose.Schema.Types.ObjectId,
     ref: "User"
     },
  receiverId: {
     type: mongoose.Schema.Types.ObjectId,
      ref: "Lawyer" 
    },
  bookingId: {
     type: mongoose.Schema.Types.ObjectId,
      ref: "Booking" 
    },
  message: {
    type:String
  },
  attachments: {
    type:[String]
  }, 
  endedAt: {
    type:Date
}
},{
    timestamps:true
});

module.exports = mongoose.model("messages", messageSchema)
