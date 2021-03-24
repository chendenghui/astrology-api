import express from 'express'
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import api from "./api";

const app: express.Application = express();

app.set("trust proxy", "loopback");

// cors
app.use(cors());

if (process.env.ENVIRONMENT !== "test") {
  // logger
  app.use(
    morgan(
      '[:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length]'
    )
  );
}

// helmet configurations
app.use(helmet());

app.use(helmet.referrerPolicy());

app.use(
  helmet.contentSecurityPolicy({
    directives: {
      defaultSrc: ["'self'"],
    },
  })
);

app.use(
  helmet.featurePolicy({
    features: {
      fullscreen: ["'self'"],
      vibrate: ["'none'"],
      syncXhr: ["'none'"],
    },
  })
);

app.use(express.json());

app.use(api);

export = app;
