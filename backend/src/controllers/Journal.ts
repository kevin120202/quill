import { Request, Response } from "express"

// @desc    Fetch all journals
// @route   GET /api/journals
// @access  Private
export const getAllJournals = async (req: Request, res: Response) => {
    res.status(200).json("Fetch journals")
}

// @desc    Create a journal
// @route   POST /api/journals
// @access  Private
export const createJournal = async (req: Request, res: Response) => {
    res.status(200).json("Create a journal")
}

// @desc    Update a journal
// @route   PUT /api/journals/:id
// @access  Private
export const updateJournal = async (req: Request, res: Response) => {
    res.status(200).json("Update a journal")
}

// @desc    Fetch a journal
// @route   GET /api/journals/:id
// @access  Private
export const getSingleJournal = async (req: Request, res: Response) => {
    res.status(200).json("Fetch a journal")
}

// @desc    Delete a journal
// @route   DELETE /api/journals/:id
// @access  Private
export const deleteJournal = async (req: Request, res: Response) => {
    res.status(200).json("Delete a journal")
}