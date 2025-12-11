// // // backend/config/db.js
// // const mongoose = require("mongoose");

// // const connectDB = async () => {
// //   try {
// //     const uri = process.env.MONGO_URI || "mongodb://localhost:27017/chatbot";
// //     await mongoose.connect(uri);
// //     console.log("✅ MongoDB Connected");
// //   } catch (err) {
// //     console.error("❌ MongoDB Error:", err.message || err);
// //     process.exit(1);
// //   }
// // };

// // module.exports = connectDB;


// // backend/config/db.js
// const mongoose = require("mongoose");

// const connectDB = async () => {
//   try {
//     const uri = process.env.MONGO_URI || "mongodb://localhost:27017/chatbot";
//     await mongoose.connect(uri);
//     console.log("✅ MongoDB Connected");
//   } catch (err) {
//     console.error("❌ MongoDB Error:", err.message || err);
//     process.exit(1);
//   }
// };

// module.exports = connectDB;



// backend/config/db.js
const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const uri = process.env.MONGO_URI || "mongodb://localhost:27017/chatbot";

    // NOTE: Mongoose v7+ no longer accepts useNewUrlParser/useUnifiedTopology options.
    // Simply call mongoose.connect(uri) and let Mongoose use the correct defaults.
    await mongoose.connect(uri);

    console.log("✅ MongoDB Connected");
  } catch (err) {
    console.error("❌ MongoDB Error:", err.message || err);
    // Do not exit immediately in production; hosting platform can restart.
    // If you want hard exit during dev uncomment next line:
    // process.exit(1);
  }
};

module.exports = connectDB;
