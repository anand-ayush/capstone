"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.resetPasswordRouter = void 0;
const express_1 = require("express");
const nodemailer_1 = __importDefault(require("nodemailer"));
const express_async_handler_1 = __importDefault(require("express-async-handler"));
const db_1 = require("../db");
const router = (0, express_1.Router)();
router.post("/forgotPassword", 
// @ts-ignore
(0, express_async_handler_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { email } = req.body;
    if (!email) {
        return res.status(400).json({
            success: false,
            message: "Email field is required",
        });
    }
    try {
        // Find user by email
        const userAvailable = yield db_1.prismaClient.user.findUnique({
            where: { email },
        });
        if (!userAvailable) {
            return res.status(404).json({
                success: false,
                message: "User not found",
            });
        }
        // Create email HTML content
        const html = `
        <p>Hi, ${userAvailable.fullname || "User"},</p>
        <p>Here's your password recovery link:</p>
        <a href="https://courtLink.vercel.app/reset-password/${userAvailable.id}">
          Reset password here
        </a>
        <p>Best regards,<br />CourtLink Team</p>
      `;
        // Configure Nodemailer transporter
        const transporter = nodemailer_1.default.createTransport({
            service: "gmail",
            auth: {
                user: process.env.GOOGLE_ACCOUNT_USER,
                pass: process.env.GOOGLE_ACCOUNT_PASS,
            },
        });
        // Send the email
        const info = yield transporter.sendMail({
            from: '"CourtLink" <courtLink.discussion@gmail.com>', // Sender address
            to: userAvailable.email,
            subject: "Reset your password", // Email subject
            html, // Email content in HTML format
        });
        return res.status(200).json({
            success: true,
            message: "Password recovery email has been sent successfully",
            id: userAvailable.id,
            email: userAvailable.email,
            info,
        });
    }
    catch (error) {
        return next(error); // Pass error to the global error handler
    }
})));
exports.resetPasswordRouter = router;
