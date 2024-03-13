import mongoose from "mongoose";

const connectDB =async ()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI)
        const connection=mongoose.connection

        connection.on('error',(err)=>{
            console.log('connection error'+err)
            process.exit();
        })
    } catch (error) {
        console.log("something went wrong"+error)
    }
}

export default connectDB