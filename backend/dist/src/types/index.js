"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SigninSchema = exports.SignupSchema = void 0;
const zod_1 = require("zod");
exports.SignupSchema = zod_1.z.object({
    email: zod_1.z.string().email(),
    password: zod_1.z.string().min(4),
    fullname: zod_1.z.string().min(4),
});
//{email: "hunainsiddiqui93@gmail.com", password: "12345678", fullname: "Mohammad Hunain Siddiqui"}
exports.SigninSchema = zod_1.z.object({
    email: zod_1.z.string().email(),
    password: zod_1.z.string()
});
