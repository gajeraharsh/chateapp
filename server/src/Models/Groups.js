import mongoose from "mongoose";

//Create Schema

const Groups_schema = new mongoose.Schema(
  {
    groupName: {
      type: String,
      requried: true,
    },
    Members: {
      type: Array,
    },
  },
  { timestamps: true }
);

//Create Model

const Group_Model = new mongoose.model("Group", Groups_schema);

// Export converstion

module.exports = Group_Model;
