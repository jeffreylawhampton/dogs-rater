import express from "express"
import getClientIndexPath from "../config/getClientIndexPath.js"

const router = new express.Router()

const clientRoutes = [
  "/",
  "/dogs",
  "/dogs/:id",
  "/dogs/new",
  "/user-sessions/new",
  "/users/new",
  "/user-profile",
  "/about",
]

router.get(clientRoutes, (req, res) => {
  res.sendFile(getClientIndexPath())
})

export default router
