import mongoose from "mongoose";

const connectDB = async() => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log("Connected to db")
    } catch (error) {
        console.log(`Connection with db is failed ${error}`)
    }
}

export default connectDB;