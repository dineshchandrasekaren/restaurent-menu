import mongoose from "mongoose";
import config from ".";

const connectDb = async () => {
  try {
    console.log(`Db connecting...`);
    const conn = await mongoose.connect(config.MONGO_URL);
    console.log(`Db connected at ${conn.connection.host}`);
  } catch (error) {
    console.log("Db failed.");
  }
};

export default connectDb;
