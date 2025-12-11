// // // backend/server.js
// // require("dotenv").config();
// // const express = require("express");
// // const cors = require("cors");
// // const connectDB = require("./config/db");
// // const messageRoutes = require("./routes/messagesRoute.js");

// // const app = express();

// // // CORS
// // app.use(cors({
// //   origin: process.env.CLIENT_ORIGIN || "http://localhost:5173"
// // }));

// // app.use(express.json());

// // // Connect DB
// // connectDB();

// // // Routes
// // app.use("/api", messageRoutes);

// // // Start server
// // const PORT = process.env.PORT || 5000;
// // app.listen(PORT, () => console.log(`🚀 Backend running on port ${PORT}`));



// require("dotenv").config();
// const express = require("express");
// const cors = require("cors");
// const path = require("path");
// const connectDB = require("./config/db");
// const messageRoutes = require("./routes/messageRoute"); // <- ensure lowercase filename

// const app = express();

// app.use(cors({
//   origin: process.env.CLIENT_ORIGIN || "http://localhost:5173"
// }));

// app.use(express.json());

// // Connect DB (log but don't immediately exit the process in production)
// connectDB();

// // Serve a favicon safely (avoids sending request to crashing handler)
// app.get('/favicon.ico', (req, res) => {
//   const icoPath = path.join(__dirname, '../frontend/public/favicon.ico');
//   res.sendFile(icoPath, err => {
//     if (err) {
//       console.error('favicon send error', err);
//       res.sendStatus(404);
//     }
//   });
// });

// // Routes
// app.use("/api", messageRoutes);

// // Global error fallback
// app.use((err, req, res, next) => {
//   console.error('Unhandled error:', err);
//   res.status(500).json({ error: 'Internal server error' });
// });

// // Start server
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`🚀 Backend running on port ${PORT}`));

// // optional: catch unhandled rejections
// process.on('unhandledRejection', (err) => {
//   console.error('Unhandled Rejection:', err);
// });















// backend/server.js
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");
const connectDB = require("./config/db");
const messageRoutes = require("./routes/messageRoute"); // matches your filename

const app = express();

app.use(cors({
  origin: process.env.CLIENT_ORIGIN || "http://localhost:5173"
}));

app.use(express.json());

// Connect DB (call but don't block startup if it fails synchronously here)
connectDB().catch(err => {
  // connectDB might handle its own logging; this catches any unexpected rejection
  console.error("DB connect failed (caught in server.js):", err);
});

// Routes
app.use("/api", messageRoutes);

// Simple healthcheck (useful for platforms)
app.get("/healthz", (req, res) => {
  res.status(200).json({ ok: true, time: new Date().toISOString() });
});

// Global error fallback
app.use((err, req, res, next) => {
  console.error("Unhandled error:", err);
  res.status(500).json({ error: "Internal server error" });
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Backend running on port ${PORT}`));

// optional: catch unhandled rejections and uncaught exceptions
process.on('unhandledRejection', (err) => {
  console.error('Unhandled Rejection:', err);
});
process.on('uncaughtException', (err) => {
  console.error('Uncaught Exception:', err);
});
