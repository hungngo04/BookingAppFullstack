import express from "express";
import { createUser, deleteUser, getUser, getUsers, updateUser } from "../controllers/User.js";
import User from "../models/User.js"

const router = express.Router();

//update
router.put("/:id", updateUser)
//delete
router.delete("/:id", deleteUser)
//get
router.get("/:id", getUser)
//get all
router.get("/", getUsers)

export default router;