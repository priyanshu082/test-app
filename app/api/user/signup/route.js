import connectDB from "@/dbConfig/dbConfig";
import User from "@/models/user";

await connectDB();

export const POST=async (request)=>{
    try {
        const response =request.json();
        const {username,name,email,imageURL}=response
        console.log(response)

        const user= await User.findOne({email})

        if(user){
            return response.status(400).json({error:"User Already exist"})
        }

        const newUser= new User({
            username,
            name,
            email,
            imageURL,
        })

        const saveUsers=await newUser.save()
        console.log(saveUsers)

    } catch (error) {
        return response.status(400).json({error:error.message})
    }
}