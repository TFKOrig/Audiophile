const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors"); // Import the cors middleware

const app = express();

app.use(
  cors({
    origin: "https://audiophileapi-tfkorigs-projects.vercel.app/",
    methods: ["POST", "GET", "UPDATE", "DELETE"],
    credentials: true,
  })
);

const PORT = process.env.PORT || 5000;

// MongoDB connection
mongoose.connect(
  "mongodb+srv://talha:8pZBLrnrJjJt2emT@cluster0.gmsyp0l.mongodb.net/Audiophile?retryWrites=true&w=majority"
);
mongoose.connection.on("connected", () => {
  console.log("Connected to MongoDB");
});

// Body parser middleware
app.use(bodyParser.json());
app.use(cors()); // Use the cors middleware

// API routes
app.use("/api/billing", require("./routes/billings"));

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
