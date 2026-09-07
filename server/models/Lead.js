const mongoose = require("mongoose");

const leadSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },

    phone: {
      type: String,
      trim: true,
    },

    message: {
      type: String,
      required: true,
      trim: true,
    },

    selectedPlan: {
      type: String,
      default: "",
      trim: true,
    },

    status: {
      type: String,
      enum: [
        "New",
        "Contacted",
        "Interested",
        "Follow Up",
        "Converted",
        "Not Interested",
      ],
      default: "New",
    },

    notes: {
      type: String,
      default: "",
    },

    followUpDate: {
      type: Date,
      default: null,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Lead", leadSchema);