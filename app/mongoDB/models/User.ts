import mongoose from "mongoose";
const { Schema, model } = mongoose;

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        minLenght: 3,
    },
    email: {
        type: String,
        minLenght: 7,
        required: true,
        lowercase: true,
    },
    password: {
        type: String,
        required: true,
    },
    mainInstrument: {
        type: String,
        required: true,
    },
    transposition: {
        type: String,
        required: true,
    },
    secondaryInstrument: [String],
    role: String,
    karma: Number,
    progress: String,
});

const User = model("User", userSchema);
export default User;
