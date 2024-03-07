import { Request, Response } from "express";
import axios, { AxiosResponse } from "axios";

export function welcome(req: Request, res: Response): Response {
  console.log("Welcome to Tap-tests application.");
  return res.json({ message: "Welcome to Tap-tests application." });
}

export function login(req: Request, res: Response): Response {
  console.log("Login to Tap-tests application.");
  return res.json({ message: "Login to Tap-tests application." });
}

export function register(req: Request, res: Response): Response {
  return res.json({ message: "Register to Tap-tests application." });
}

export function symbols(req: Request, res: Response) {
  return axios
    .get("https://futures-api.poloniex.com/api/v2/tickers")
    .then((response) => {
      const {data} = response.data
      return res.status(200).json(data);
    })
    .catch(function (error) {
      console.log(error);
    });
}
