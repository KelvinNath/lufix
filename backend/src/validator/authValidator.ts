import { z } from "zod";

export const userSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string()
    .email("Invalid email format")
    .regex(/^[a-zA-Z0-9._%+-]+@gmail\.com$/, "Only Gmail accounts are allowed"),
  password: z.string()
    .min(5, "Password must be at least 5 characters long")
    .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
    .regex(/[a-z]/, "Password must contain at least one lowercase letter")
    .regex(/\d/, "Password must contain at least one number")
    .regex(/[!@#$%^&*(),.?":{}|<>]/, "Password must contain at least one special character"),
});
