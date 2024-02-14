import mongoose from "mongoose";

export async function connect() {
  try {
    console.log(process.env.DATABASE_URI);
    await mongoose.connect(process.env.DATABASE_URI || "");
    console.log('Successfully connected to database');
  } catch (error) {
    console.error(error);
  }
}