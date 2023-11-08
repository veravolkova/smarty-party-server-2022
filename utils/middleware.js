const morgan = require("morgan");
const User = require("../models/user");
const jwt = require("jsonwebtoken");

// logging request data
morgan.token("data", (req) => {
  const { body } = req;
  return JSON.stringify(body);
});

const morganLogger = () => {
  if (process.env.NODE_ENV === "test") {
    return (_req, _res, next) => next();
  }

  return morgan(
    ":method :url :status :res[content-length] - :response-time ms :data"
  );
};

const tokenExtractor = async (req, _res, next) => {
  const authorization = req.get("authorization");

  if (authorization && authorization.toLowerCase().startsWith("bearer ")) {
    const decodedToken = jwt.verify(
      authorization.substring(7),
      process.env.SECRET_KEY
    );
    if (decodedToken) {
      req.user = await User.findById(decodedToken.id);
    }
  }

  next();
};

const errorHandler = (err, _req, res, next) => {
  // to do: think of other variants
  if (err.name === "CastError") {
    return res.status(400).send({
      error: "Malformatted Id",
    });
  } else if (err.name === "ValidationError") {
    return res.status(422).json({
      error: err.message,
    });
  } else if (err.name === "JsonWebTokenError") {
    return res.status(401).json({
      error: "Invalid Token",
    });
  }

  next(err);
};

const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: "unknown endpoint" });
};

module.exports = {
  morganLogger,
  tokenExtractor,
  errorHandler,
  unknownEndpoint,
};
