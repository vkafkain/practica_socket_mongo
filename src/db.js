import { connect } from "mongoose";

export const connectDB = async () => {
  try {
    await connect("mongodb://localhost/websocketsdb");
    console.log("connect to db");
  } catch (error) {
    console.error(error);
  }
};
