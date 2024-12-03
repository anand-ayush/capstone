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
        // @ts-ignore
        data: {
          name: parsedData.data.name,
          email: parsedData.data.email,
          dateOfBirth: parsedData.data.dateOfBirth,
          contacts: parsedData.data.contacts,
          barRegistrationNumber: parsedData.data.barRegistrationNumber,
          casesSolved: parsedData.data.casesSolved,
          specializations: parsedData.data.specializations,
          licenseVerified: parsedData.data.licenseVerified,
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

export const lawyerRouter = router;
