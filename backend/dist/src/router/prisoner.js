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
exports.prisonRouter = void 0;
const express_1 = require("express");
const db_1 = require("../db"); // Prisma client for database access
const middleware_1 = require("../middleware"); // For authentication middleware
const types_1 = require("../types"); // Schema for form validation
const router = (0, express_1.Router)();
// Route to push prisoner data to the database
router.post("/prisonerform", middleware_1.authMiddleware, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b;
    const body = req.body;
    const userId = (_a = req.user) === null || _a === void 0 ? void 0 : _a.id;
    // Validate input data
    const parsedData = types_1.PrisonerFormSchema.safeParse(body);
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
        const prisoner = yield db_1.prismaClient.prisoner.create({
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
                additionalInfo: (_b = parsedData.data.additionalInfo) !== null && _b !== void 0 ? _b : "",
                userId: userId,
            },
        });
        return res.status(201).json({
            message: "Prisoner data submitted successfully.",
            prisoner,
        });
    }
    catch (error) {
        console.error("Error submitting prisoner data:", error.message, error.stack);
        if (error.code === "P2002") {
            return res.status(409).json({
                message: "Duplicate entry for prisoner ID.",
            });
        }
        return res.status(500).json({
            message: "An error occurred while submitting prisoner data.",
        });
    }
}));
exports.prisonRouter = router;
