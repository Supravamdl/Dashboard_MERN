import mongoose from "mongoose";

const connectionString =
  "mongodb+srv://Dashboard:pMXF8ii5KgPu179z@cluster0.d38kwcb.mongodb.net/?retryWrites=true&w=majority";

const connectDB = (url) => {
  return mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

export default connectDB;
