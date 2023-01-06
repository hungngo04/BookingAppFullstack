import express from "express";
import { deleteUser, getUser, getUsers, updateUser } from "../controllers/User.js";
import User from "../models/User.js"
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";

const router = express.Router();

router.get("/checkauthentication", verifyToken, (req, res, next) => {
    res.send("You are logged in");
})

router.get("/checkuser/:id", verifyUser, (req, res, next) => {
    res.send("You are logged in and you can delete your account");
})

router.get("/checkadmin/:id", verifyAdmin, (req, res, next) => {
    res.send("Hello admin");
})

//update
router.put("/:id", verifyUser, updateUser)
//delete
router.delete("/:id", verifyUser, deleteUser)
//get
router.get("/:id", verifyUser, getUser)
//get all
router.get("/", verifyAdmin, getUsers)

export default router;