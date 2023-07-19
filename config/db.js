import mongoose, { mongo } from "mongoose";
import colors from "colors"
import { connect } from "http2";

const connectDB = async() =>{
    try {
        const conn = await mongoose.connect(process.env.URL)
        console.log(`Connected to MongoDB Database ${conn.connection.host}`.bgCyan.white)
    } catch (error) {
        console.log(`Error in MongoDB ${error}`.bgRed.white)
    }
}

export default connectDB