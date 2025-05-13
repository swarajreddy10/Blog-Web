import mongoose from "mongoose";

export const ConnectDB = async () =>{
    await mongoose.connect('mongodb+srv://BlogMscr:BlogMscr10@blogapp.bkroqwy.mongodb.net/blog-app');
    console.log("DB Connected");
}