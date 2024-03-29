import mongoose from "mongoose";

export async function connect() {
  try {
    await mongoose.connect(process.env.NODE_ENV === 'production' ? (process.env.DATABASE_CONNECTION_URI_PROD || "") : (process.env.DATABASE_URI || ""));
    console.log('Successfully connected to database');
  } catch (error) {
    console.error(error);
  }
}