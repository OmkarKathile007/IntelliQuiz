import mongoose,{Schema} from "mongoose"
import bcrypt from "bcrypt"


const userSchema=new Schema({
    username:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        lowecase:true,
        trim:true,

    },
    password:{
        type:String,
        required:[true,"Password is required"]
    }
    
},{timestamps:true})

userSchema.pre("save",async function(next){
    if(!this.isModified("password")){
        next()
    }
    this.password=bcrypt.hash(this.password,10);
    next();
})

// userSchema.pre("save",aysnc function(next){
//     if(!this.isModified("password")){
//         next()
//     }
//     this.password=bcrypt.hash(this.password,10);
//     next();
// })

userSchema.methods.isPasswordCorrect=async function(next){
    return await bcrypt.compare(password,this.password);
}


export const User =new mongoose.model("User",userSchema);