import { Request, Response } from "express"
import asyncHandler from "express-async-handler"
import Journal from "../models/journal"

// @desc    Fetch all journals
// @route   GET /api/journals
// @access  Private
export const getAllJournals = asyncHandler(async (req: Request, res: Response) => {
    const journals = await Journal.find()
    res.status(200).json({ journals })
})

// @desc    Create a journal
// @route   POST /api/journals
// @access  Private
export const createJournal = asyncHandler(async (req: Request, res: Response) => {
    const { title, journalType, entry } = req.body
    if (!title || !journalType || !entry) {
        res.status(400)
        throw new Error("All field are mandatory")
    }

    const journal = await Journal.create(req.body)

    res.status(200).json({ journal })
})

// @desc    Update a journal
// @route   PUT /api/journals/:id
// @access  Private
export const updateJournal = async (req: Request, res: Response) => {
    const journal = await Journal.findById(req.params.id)
    if (!journal) {
        res.status(404)
        throw new Error("Journal not found")
    }


    // res.status(200).json({ journal: updatedJournal })
}

// @desc    Fetch a journal
// @route   GET /api/journals/:id
// @access  Private
export const getSingleJournal = asyncHandler(async (req: Request, res: Response) => {
    const journal = await Journal.findById(req.params.id)
    if (!journal) {
        res.status(404)
        throw new Error("Journal not found")
    }

    res.status(200).json({ journal })
})

// @desc    Delete a journal
// @route   DELETE /api/journals/:id
// @access  Private
export const deleteJournal = asyncHandler(async (req: Request, res: Response) => {
    const journal = await Journal.findById(req.params.id)
    if (!journal) {
        res.status(404)
        throw new Error("Journal not found")
    }

    await Journal.findByIdAndDelete(req.params.id);

    res.status(200).json({ message: "Journal deleted" })
})