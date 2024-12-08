import { Router, Request, Response } from "express";
import { prismaClient } from "../db";
import { authMiddleware } from "../middleware";
import { LawyerFormSchema } from "../types";

const router = Router();

interface AuthenticatedRequest extends Request {
  user?: { id: number; email: string }; 
}

router.post(
  "/lawyerform",
  authMiddleware,
  async (req: AuthenticatedRequest, res: Response) => {
    const body = req.body;
    const userId = req.user?.id;
    if (!userId) {
      return res.status(400).json({
        message: "User ID is required to create a lawyer record.",
      });
    }

    // Validate input data
    const parsedData = LawyerFormSchema.safeParse(body);

    if (!parsedData.success) {
      return res.status(400).json({
        message: "Invalid form inputs. Please check again.",
        errors: parsedData.error.errors.map((err) => ({
          field: err.path.join("."),
          message: err.message,
        })),
      });
    }

    try {
      const lawyer = await prismaClient.lawyer.create({
        data: {
          // @ts-ignore
          name: parsedData.data.name,
          email: parsedData.data.email,
          dateOfBirth: parsedData.data.dateOfBirth,
          contacts: parsedData.data.contacts,
          barRegistrationNumber: parsedData.data.barRegistrationNumber,
          casesSolved: Number(parsedData.data.casesSolved),
          specializations:parsedData.data.specializations
          .split(",")
          .map((spec) => spec.trim()),
          licenseVerified: parsedData.data.licenseVerified === "true",
          availability: parsedData.data.availability,
          additionalInfo: parsedData.data.additionalInfo ?? "",
          userId: userId,
        },
      });

      return res.status(201).json({
        message: "Lawyer data submitted successfully.",
        lawyer,
      });
    } catch (error: any) {
      console.error(
        "Error submitting lawyer data:",
        error.message,
        error.stack
      );
      return res.status(500).json({
        message: "An error occurred while submitting lawyer data.",
      });
    }
  }
);

router.get(
  "/me",
  authMiddleware,
  async (req: AuthenticatedRequest, res: Response) => {
    const userId = req.user?.id;
    if (!userId) {
      return res.status(400).json({
        message: "User ID is required to fetch lawyer records.",
      });
    }

    try {
      const lawyer = await prismaClient.lawyer.findUnique({
        where: {
          userId,
        },
      });

      return res.status(200).json({
        message: "Lawyer data fetched successfully.",
        lawyer,
      });
    } catch (error: any) {
      console.error(
        "Error fetching lawyer data:",
        error.message,
        error.stack
      );
      return res.status(500).json({
        message: "An error occurred while fetching lawyer data.",
      });
    }
  }
);


export const lawyerRouter = router;
