import express from "express";
import { createJournal, deleteJournal, getAllJournals, getSingleJournal, updateJournal } from "../controllers/journal";
const router = express.Router()

router.route("/").get(getAllJournals).post(createJournal)
router.route("/:id").get(getSingleJournal).put(updateJournal).delete(deleteJournal)

export default router