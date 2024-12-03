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
Object.defineProperty(exports, "__esModule", { value: true });
exports.caseRouter = void 0;
const express_1 = require("express");
const db_1 = require("../db"); // Prisma client for database access
const middleware_1 = require("../middleware"); // For authentication middleware
const types_1 = require("../types"); // Import schema for form validation
const router = (0, express_1.Router)();
// Route to push lawyer data to the database
router.post("/submit", middleware_1.authMiddleware, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const body = req.body;
    // Validate input data using the LawyerFormSchema
    const parsedData = types_1.LawyerFormSchema.safeParse(body);
    if (!parsedData.success) {
        return res.status(411).json({
            message: "Invalid form inputs. Please check again.",
            details: parsedData.error.errors,
        });
    }
    try {
        // Push lawyer data to the database
        const lawyer = yield db_1.prismaClient.lawyer.create({
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
                professionalAffiliations: parsedData.data.professionalAffiliations || [],
                userId: parsedData.data.userId,
            },
        });
        return res.status(201).json({
            message: "Lawyer data submitted successfully.",
            lawyer,
        });
    }
    catch (error) {
        console.error("Error submitting lawyer data:", error);
        return res.status(500).json({
            message: "An error occurred while submitting lawyer data.",
        });
    }
}));
exports.caseRouter = router;
