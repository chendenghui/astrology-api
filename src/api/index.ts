import {Request, Response} from "express";
import Router from "express-promise-router";

const astrologer = require("./../astrologer");

const router = Router();

router.get("/", async (req: Request, res: Response) => res.status(200).json({ message: "Welcome to Astrology api!" }));

router.get("/horoscope", async (req, res) => {
  const date = new Date(req.query.time.toString());
  const { latitude, longitude } = req.query;

  const planets = astrologer.planets(date);
  const aspects = astrologer.aspects(planets);

  console.info(req.query);
  console.log(planets)

  console.log( {
    latitude: parseFloat(latitude as string),
    longitude: parseFloat(longitude as string),
  })

  const houses = astrologer.houses(date, {
    latitude: parseFloat(latitude as string),
    longitude: parseFloat(longitude as string),
  });

  res.status(200).json({
    data: {
      astros: {
        ...planets,
      },
      ...houses,
      aspects
    },
  });
});

export default router;
