import mongoose from "mongoose";

const connectMongoDB = async (): Promise<void> => {
  try {
    await mongoose.connect(process.env.DBconnect as string);
    console.log("Connected to MongoDB.");
  } catch (error) {
    console.log(error);
  }
};

export default connectMongoDB;
