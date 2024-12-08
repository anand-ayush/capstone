import { Router, Request, Response } from "express";
import { prismaClient } from "../db"; 
import { authMiddleware } from "../middleware"; 
import { PrisonerFormSchema } from "../types"; 

const router = Router();

interface AuthenticatedRequest extends Request {
  user?: { id: number; email: string }; // Should match the payload structure in your JWT
}

// Route to push prisoner data to the database  
router.post(
  "/prisonerform",
  authMiddleware,
  async (req: AuthenticatedRequest, res: Response) => {
    const body = req.body;
    const userId = req.user?.id;

    // Validate input data
    const parsedData = PrisonerFormSchema.safeParse(body);

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
      // Push prisoner data to the database

      const prisoner = await prismaClient.prisoner.create({
        // @ts-ignore
        data: {
          name: parsedData.data.name,
          email: parsedData.data.email,
          prisonerId: parsedData.data.prisonerId,
          dateOfBirth: parsedData.data.dateOfBirth,
          prisonLocation: parsedData.data.prisonLocation,
          crime: parsedData.data.crime,
          securityQuestion: parsedData.data.securityQuestion,
          emergencyContact: parsedData.data.emergencyContact,
          inmateStatus: parsedData.data.inmateStatus,
          caseId: parsedData.data.caseId,
          languagePreference: parsedData.data.languagePreference,
          medicalInfo: parsedData.data.medicalInfo,
          additionalInfo: parsedData.data.additionalInfo ?? "",
          userId: userId,
        },
      });
      try {
        await prismaClient.user.update({
          where: {
            id: userId,
          },
          data: {
            // @ts-ignore
            isformfilled: true,
          },
        });
      }
      catch (error: any) {
        console.error(
          "Error updating user role to lawyer:",
          error.message,
          error.stack
        );
        return res.status(500).json({
          message: "An error occurred while updating user role to lawyer.",
        });
      }

      return res.status(201).json({
        message: "Prisoner data submitted successfully.",
        prisoner,
      });
    } catch (error: any) {
      console.error(
        "Error submitting prisoner data:",
        error.message,
        error.stack
      );

      if (error.code === "P2002") {
        return res.status(409).json({
          message: "Duplicate entry for prisoner ID.",
        });
      }

      return res.status(500).json({
        message: "An error occurred while submitting prisoner data.",
      });
    }
  }
);


// Route to fetch prisoner data from the database

router.get(
  "/me",
  authMiddleware,
  async (req: AuthenticatedRequest, res: Response) => {
    const userId = req.user?.id;
    if (!userId) {
      return res.status(400).json({
        message: "User ID is required to fetch prisoner records.",
      });
    }

    try {
      const prisoner = await prismaClient.prisoner.findUnique({
        where: {
          userId,
        },
      });

      return res.json({
        prisoner,
      });
    } catch (error: any) {
      console.error(
        "Error fetching prisoner data:",
        error.message,
        error.stack
      );
      return res.status(500).json({
        message: "An error occurred while fetching prisoner data.",
      });
    }
  }
);
export const prisonRouter = router;
