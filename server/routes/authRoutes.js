import express from "express";
import { login } from "../controllers/authController.js";

login;

const router = express.Router();

router.post("/login", login);

export default router;
