import {z} from "zod";


export const SignupSchema = z.object({
    email: z.string().email(),
    password: z.string().min(4),
    fullname: z.string().min(4),
});
//{email: "hunainsiddiqui93@gmail.com", password: "12345678", fullname: "Mohammad Hunain Siddiqui"}


export const SigninSchema = z.object({
    email: z.string().email(),
    password:z.string()
});

