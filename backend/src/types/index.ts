import {z} from "zod";


export const SignupSchema = z.object({
    email: z.string().email(),
    password: z.string().min(4),
    fullname: z.string().min(4),
});


export const SigninSchema = z.object({
    email: z.string().email(),
    password: z.string(),
});

// Validating the schema for the prisoner form
export const PrisonerFormSchema = z.object({
  name: z.string().min(1, "Name is required."),
  email: z.string().email("Invalid email address."),
  prisonerId: z.string().min(1, "Prisoner ID is required."),
  dateOfBirth: z
    .string(),
  prisonLocation: z.string().min(1, "Prison location is required."),
  crime: z.string().min(1, "Crime description is required."),
  securityQuestion: z.string().min(1, "Security question is required."),
  emergencyContact: z
    .string()
    .min(10, "Emergency contact must be at least 10 digits."),
  inmateStatus: z.enum(["In Custody", "Released"]),
  caseId: z.string().min(1, "Case ID is required."),
  languagePreference: z.string().min(1, "Language preference is required."),
  medicalInfo: z.string(),
  additionalInfo: z.string().optional(),
});


//  lawyer validation schema 
export const LawyerFormSchema = z.object({
  barRegistrationNumber: z
    .string()
    .min(1, "Bar Registration Number is required")
    .max(255, "Bar Registration Number is too long")
    .regex(
      /^[A-Za-z0-9]+$/,
      "Bar Registration Number should only contain alphanumeric characters"
    ),

  firmName: z
    .string()
    .min(1, "Firm Name is required")
    .max(255, "Firm Name is too long"),

  clientAccessAuth: z.boolean().optional(), // Optional boolean field

  accessLevel: z
    .string()
    .min(1, "Access Level is required")
    .max(100, "Access Level is too long"),

  casesSolved: z
    .number()
    .min(0, "Cases Solved must be a non-negative integer")
    .optional(), // Optional integer field, defaulting to 0 if not provided

  specializations: z
    .array(z.string())
    .min(1, "At least one specialization is required")
    .max(10, "You can have up to 10 specializations")
    .optional(), // Optional array of strings

  licenseVerified: z.boolean().optional(), // Optional boolean field

  clientList: z.array(z.string()).optional(), // Optional array of strings

  availability: z
    .string()
    .min(1, "Availability is required")
    .max(255, "Availability is too long"),

  professionalAffiliations: z.array(z.string()).optional(), // Optional array of strings

  userId: z
    .number()
    .int("User ID must be an integer")
    .positive("User ID must be positive")
    .min(1, "User ID is required"),
});
