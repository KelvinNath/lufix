import { Request, Response } from "express";
import prisma from "../config/db";
import { hashPassword, comparePassword } from "../utils/hash";
import { generateToken } from "../utils/jwt";
import { userSchema } from "../validator/authValidator";
import { z } from "zod"; // Import Zod

export const register = async (req: Request, res: Response): Promise<void> => {
    try {
        // Validate request body
        const validatedData = userSchema.parse(req.body);

        // Hash password
        const hashedPassword = await hashPassword(validatedData.password);

        // Save user to database
        const user = await prisma.user.create({
            data: { 
                name: validatedData.name, 
                email: validatedData.email, 
                password: hashedPassword 
            },
        });

        res.status(201).json({ message: "User registered successfully", user });
    } catch (error) {
        if (error instanceof z.ZodError) {
            res.status(400).json({ errors: error.errors });
        } else {
            res.status(500).json({ message: "Register Error", error });
        }
    }
};

export const login = async (req: Request, res: Response): Promise<void> => {
    try {
        // Validate request body
        const validatedData = userSchema.pick({ email: true, password: true }).parse(req.body);

        // Find user in database
        const user = await prisma.user.findUnique({ where: { email: validatedData.email } });
        if (!user || !(await comparePassword(validatedData.password, user.password))) {
            res.status(401).json({ message: "Invalid credentials" });
            return;
        }

        // Generate JWT token
        const token = generateToken(user.id);

        res.json({ user, token });
    } catch (error) {
        if (error instanceof z.ZodError) {
            res.status(400).json({ errors: error.errors });
        } else {
            res.status(500).json({ message: "Login Error", error });
        }
    }
};
