import { Request, Response } from "express";

export function welcome(req: Request, res: Response): Response {
  console.log("Welcome to Tap-tests application.")
  return res.json({ message: "Welcome to Tap-tests application." });
}

export function login(req: Request, res: Response): Response {
  console.log("Login to Tap-tests application.")
  return res.json({ message: "Login to Tap-tests application." });
}

export function register(req: Request, res: Response): Response {
  return res.json({ message: "Register to Tap-tests application." });
}
