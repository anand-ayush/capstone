import { Router, Request, Response, NextFunction } from "express";
import nodemailer from "nodemailer";
import asyncHandler from "express-async-handler";
import { prismaClient } from "../db"; 

const router = Router();

router.post(
  "/forgotPassword",
  // @ts-ignore
  asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({
        success: false,
        message: "Email field is required",
      });
    }

    try {
      // Find user by email
      const userAvailable = await prismaClient.user.findUnique({
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
        <a href="https://courtLink.vercel.app/reset-password/${
          userAvailable.id
        }">
          Reset password here
        </a>
        <p>Best regards,<br />CourtLink Team</p>
      `;

      // Configure Nodemailer transporter
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.GOOGLE_ACCOUNT_USER,
          pass: process.env.GOOGLE_ACCOUNT_PASS,
        },
      });

      // Send the email
      const info = await transporter.sendMail({
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
    } catch (error) {
      return next(error); // Pass error to the global error handler
    }
  })
);

export const resetPasswordRouter = router;
