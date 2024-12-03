import { Router, Request, Response } from "express";
import { prismaClient } from "../db"; // Prisma client for database access
import { authMiddleware } from "../middleware"; // For authentication middleware
import { LawyerFormSchema } from "../types"; // Import schema for form validation

const router = Router();

// Route to push lawyer data to the database
router.post("/submit", authMiddleware, async (req: Request, res: Response) => {
  const body = req.body;

  // Validate input data using the LawyerFormSchema
  const parsedData = LawyerFormSchema.safeParse(body);

  if (!parsedData.success) {
    return res.status(411).json({
      message: "Invalid form inputs. Please check again.",
      details: parsedData.error.errors,
    });
  }

  try {
    // Push lawyer data to the database
    const lawyer = await prismaClient.lawyer.create({
      data: {
        barRegistrationNumber: parsedData.data.barRegistrationNumber,
        firmName: parsedData.data.firmName,
        clientAccessAuth: parsedData.data.clientAccessAuth || false,
        accessLevel: parsedData.data.accessLevel,
        casesSolved: parsedData.data.casesSolved || 0,
        specializations: parsedData.data.specializations || [],
        licenseVerified: parsedData.data.licenseVerified || false,
        clientList: parsedData.data.clientList || [],
        availability: parsedData.data.availability,
        professionalAffiliations:
          parsedData.data.professionalAffiliations || [],
        userId: parsedData.data.userId,
      },
    });

    return res.status(201).json({
      message: "Lawyer data submitted successfully.",
      lawyer,
    });
  } catch (error) {
    console.error("Error submitting lawyer data:", error);
    return res.status(500).json({
      message: "An error occurred while submitting lawyer data.",
    });
  }
});

export const caseRouter = router;
