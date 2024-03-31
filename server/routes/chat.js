// const express = require("express")
import express from "express";

// const { login, signup } = require("../controllers/chatController")
import { login, signup } from "../controllers/chatController.js";
const router = express.Router()

router.post("/login", login)

router.post("/signup", signup)

export default router;