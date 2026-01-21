const dotenv = require("dotenv");
dotenv.config();

module.exports = {
  port: process.env.PORT || 4000,
  mongoUri: process.env.MONGODB_URI || null,
  jwtSecret: process.env.JWT_SECRET || "change_this_secret",
  corsOrigin: process.env.CORS_ORIGIN || "http://localhost:5173",
};
