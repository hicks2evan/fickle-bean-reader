import mongoose from "mongoose";

export async function connect() {
  try {
    await mongoose.connect(process.env.DATABASE_URI || "");
    console.log('Successfully connected to database');
  } catch (error) {
    console.error(error);
  }
}