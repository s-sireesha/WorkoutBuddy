import mongoose from "mongoose";
const url="mongodb://localhost:27017/javascript_react";
mongoose.set('strictQuery', true);

const DBconnection = async () => {
    try {
      const {client }= await mongoose.connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
    // client.close();
    console.log("connection is established")
    // console.log(`DB Connected : ${client}`) 
    } catch (error) {
      console.log(`Error is : ${error.message}`);
      process.exit(1);
    }
  };
  export { DBconnection };
