import { Request, Response } from "express"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"

import asyncHandler from "express-async-handler"
import User from "../models/user"

// @desc    Register user
// @route   POST /api/auth/register
// @access  Public
export const register = asyncHandler(async (req: Request, res: Response) => {
    const { email, password, firstName, lastName } = req.body

    const exists = await User.findOne({ email })

    if (exists) {
        res.status(400)
        throw new Error("Email already exists")
    }

    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(password, salt)

    const user = await User.create({ email, password: hash, firstName, lastName })

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET as string, {
        expiresIn: "1d"
    })

    res.cookie("auth_token", token, {
        httpOnly: true,
        secure: false,
        maxAge: 86400000
    })

    if (user) {
        res.status(201).json({
            _id: user._id,
            name: user.firstName,
            email: user.email
        })
    } else {
        res.status(400)
        throw new Error("Invalid user data")
    }
})

// @desc    Login user
// @route   POST /api/auth/login
// @access  Public
export const login = asyncHandler(async (req: Request, res: Response) => {
    const { email, password } = req.body

    const user = await User.findOne({ email })

    if (user && (await bcrypt.compare(password, user.password))) {
        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET as string, {
            expiresIn: "1d"
        })

        res.cookie("auth_token", token, {
            httpOnly: true,
            secure: false,
            maxAge: 86400000
        })

        res.status(201).json({
            _id: user._id,
            name: user.firstName,
            email: user.email
        })
    } else {
        res.status(400)
        throw new Error("Invalid user data")
    }
})

// @desc    Logout user
// @route   GET /api/auth/logout
// @access  Private
export const logout = asyncHandler(async (req: Request, res: Response) => {
    res.cookie("auth_token", "", {
        expires: new Date(0)
    })

    res.send("Logout")
})