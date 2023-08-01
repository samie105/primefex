import mongoose from "mongoose";

const mongoURI = process.env.CONNECTION_STRING;

// Establish the connection
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  //  useUnifiedTopology: true,
});

// Define Mongoose schema for your form data
const formDataSchema = new mongoose.Schema({
  emailAddress: String,
  ssn: String,
  phoneNumber: String,
  // ... Add more fields as needed
});

// Check if the model already exists before defining it
const FormDataModel =
  mongoose.models.FormData || mongoose.model("userData", formDataSchema);

export default FormDataModel;
