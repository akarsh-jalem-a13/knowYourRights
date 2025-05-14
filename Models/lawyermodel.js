const mongoose = require("mongoose");

const lawyerSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    phone: {
      type: String,
      unique: true,
      required: true
    },
    email: {
      type: String,
      unique: true,
    },
    barCouncilId: {
      type:String
    },
    // password: {
    //   type: String,
    // }, // hashed
    profileImage: {
      type: String,
    },
    gender: {
      type: String,
      enum: [Male, Female, Other],
    },
    qualifications: {
      type:String
    },
    specialization: {
      type: [String],
    }, // e.g., ["Civil Law", "Divorce"]
    experience: {
       type: Number 
      }, // in years
    isVerified: {
         type: Boolean,
          default: false 
        },
    rating: {
      type: Number,
      default: 0,
    },
    ratePerMinute: {
       type: Number 
      },
    availableSlots: {
      type: [Date],
    },
    reviews: [{ type: mongoose.Schema.Types.ObjectId, ref: "Review" }],
    walletBalance: { type: Number, default: 0 },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("lawyers", lawyerSchema)
