const config = require("./utils/config");
const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");

require("express-async-errors");

const usersRouter = require("./controllers/users");
const loginRouter = require("./controllers/login");
const giftsRouter = require("./controllers/gifts");
const middleware = require("./utils/middleware");
const logger = require("./utils/logger");

mongoose
  .connect(config.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    logger.info("connected to MongoDB");
  })
  .catch((error) => {
    logger.error("error connecting to MongoDB:", error.message);
  });

mongoose.set("useCreateIndex", true);
mongoose.set("useNewUrlParser", true);
mongoose.set("useFindAndModify", false);

// middleware

app.use(cors());
app.use(express.static("build"));
app.use(express.json());
app.use(middleware.morganLogger());

// routes

app.use("/api/login", loginRouter);
app.use("/api/gifts", middleware.tokenExtractor, giftsRouter);
app.use("/api/users", usersRouter);

if (process.env.NODE_ENV === "test") {
  const testingRouter = require("./controllers/testing");
  app.use("/api/testing", testingRouter);
}

// middleware
app.use(middleware.unknownEndpoint);
app.use(middleware.errorHandler);

module.exports = app;
