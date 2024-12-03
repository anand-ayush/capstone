"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LawyerFormSchema = exports.PrisonerFormSchema = exports.SigninSchema = exports.SignupSchema = void 0;
const zod_1 = require("zod");
exports.SignupSchema = zod_1.z.object({
    email: zod_1.z.string().email(),
    password: zod_1.z.string().min(4),
    fullname: zod_1.z.string().min(4),
});
exports.SigninSchema = zod_1.z.object({
    email: zod_1.z.string().email(),
    password: zod_1.z.string(),
});
// Validating the schema for the prisoner form
exports.PrisonerFormSchema = zod_1.z.object({
    name: zod_1.z.string().min(1, "Name is required."),
    email: zod_1.z.string().email("Invalid email address."),
    prisonerId: zod_1.z.string().min(1, "Prisoner ID is required."),
    dateOfBirth: zod_1.z
        .string(),
    prisonLocation: zod_1.z.string().min(1, "Prison location is required."),
    crime: zod_1.z.string().min(1, "Crime description is required."),
    securityQuestion: zod_1.z.string().min(1, "Security question is required."),
    emergencyContact: zod_1.z
        .string()
        .min(10, "Emergency contact must be at least 10 digits."),
    inmateStatus: zod_1.z.enum(["In Custody", "Released"]),
    caseId: zod_1.z.string().min(1, "Case ID is required."),
    languagePreference: zod_1.z.string().min(1, "Language preference is required."),
    medicalInfo: zod_1.z.string(),
    additionalInfo: zod_1.z.string().optional(),
});
//  lawyer validation schema 
exports.LawyerFormSchema = zod_1.z.object({
    barRegistrationNumber: zod_1.z
        .string()
        .min(1, "Bar Registration Number is required")
        .max(255, "Bar Registration Number is too long")
        .regex(/^[A-Za-z0-9]+$/, "Bar Registration Number should only contain alphanumeric characters"),
    firmName: zod_1.z
        .string()
        .min(1, "Firm Name is required")
        .max(255, "Firm Name is too long"),
    clientAccessAuth: zod_1.z.boolean().optional(), // Optional boolean field
    accessLevel: zod_1.z
        .string()
        .min(1, "Access Level is required")
        .max(100, "Access Level is too long"),
    casesSolved: zod_1.z
        .number()
        .min(0, "Cases Solved must be a non-negative integer")
        .optional(), // Optional integer field, defaulting to 0 if not provided
    specializations: zod_1.z
        .array(zod_1.z.string())
        .min(1, "At least one specialization is required")
        .max(10, "You can have up to 10 specializations")
        .optional(), // Optional array of strings
    licenseVerified: zod_1.z.boolean().optional(), // Optional boolean field
    clientList: zod_1.z.array(zod_1.z.string()).optional(), // Optional array of strings
    availability: zod_1.z
        .string()
        .min(1, "Availability is required")
        .max(255, "Availability is too long"),
    professionalAffiliations: zod_1.z.array(zod_1.z.string()).optional(), // Optional array of strings
    userId: zod_1.z
        .number()
        .int("User ID must be an integer")
        .positive("User ID must be positive")
        .min(1, "User ID is required"),
});
