import { Request, Response, NextFunction } from "express";
import * as jwt from "jsonwebtoken";
import config from "@config/config";

export const checkJwt = (req: Request, res: Response, next: NextFunction) => {
  const token = <string>req.headers["authorization"];

  if (!token) res.status(401).send({ response: "Token not found." });

  const bearerToken = token.split("Bearer ")[1];

  let jwtPayload;

  try {
    jwtPayload = <any>jwt.verify(bearerToken, config.jwtSecret);
    res.locals.jwtPayload = jwtPayload;
  } catch (error) {
    res.status(401).send();
    return;
  }

  const { userId } = jwtPayload;
  const newToken = jwt.sign({ userId }, config.jwtSecret, {
    expiresIn: "2h",
  });
  res.setHeader("token", newToken);

  next();
};
