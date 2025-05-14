const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    lawyerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Lawyer",
    },
    mode: {
      type: String,
      enum: ["chat", "call"],
      required: true,
    },
    scheduledAt: {
      type: Date,
    },
    durationMinutes: {
      type: Number,
    },
    totalFee: {
      type: Number,
    },
    status: {
      type: String,
      enum: ["pending", "completed", "cancelled"],
      default: "pending",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("bookings", bookingSchema);
