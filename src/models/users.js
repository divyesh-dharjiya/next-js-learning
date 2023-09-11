import mongoose, { Schema } from "mongoose";

const userSchema = new Schema(
  {
    firstName: String,
    lastName: String,
  }
);

const User = mongoose.models.users || mongoose.model("users", userSchema);

export default User;