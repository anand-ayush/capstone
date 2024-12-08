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
exports.lawyerRouter = void 0;
const express_1 = require("express");
const db_1 = require("../db");
const middleware_1 = require("../middleware");
const types_1 = require("../types");
const router = (0, express_1.Router)();
router.post("/lawyerform", middleware_1.authMiddleware, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b;
    const body = req.body;
    const userId = (_a = req.user) === null || _a === void 0 ? void 0 : _a.id;
    if (!userId) {
        return res.status(400).json({
            message: "User ID is required to create a lawyer record.",
        });
    }
    // Validate input data
    const parsedData = types_1.LawyerFormSchema.safeParse(body);
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
        const lawyer = yield db_1.prismaClient.lawyer.create({
            data: {
                // @ts-ignore
                name: parsedData.data.name,
                email: parsedData.data.email,
                dateOfBirth: parsedData.data.dateOfBirth,
                contacts: parsedData.data.contacts,
                barRegistrationNumber: parsedData.data.barRegistrationNumber,
                casesSolved: Number(parsedData.data.casesSolved),
                specializations: parsedData.data.specializations
                    .split(",")
                    .map((spec) => spec.trim()),
                licenseVerified: parsedData.data.licenseVerified === "true",
                availability: parsedData.data.availability,
                additionalInfo: (_b = parsedData.data.additionalInfo) !== null && _b !== void 0 ? _b : "",
                userId: userId,
            },
        });
        try {
            yield db_1.prismaClient.user.update({
                where: {
                    id: userId,
                },
                data: {
                    // @ts-ignore
                    isformfilled: true,
                },
            });
        }
        catch (error) {
            console.error("Error updating user role to lawyer:", error.message, error.stack);
            return res.status(500).json({
                message: "An error occurred while updating user role to lawyer.",
            });
        }
        return res.status(201).json({
            message: "Lawyer data submitted successfully.",
            lawyer,
        });
    }
    catch (error) {
        console.error("Error submitting lawyer data:", error.message, error.stack);
        return res.status(500).json({
            message: "An error occurred while submitting lawyer data.",
        });
    }
}));
router.get("/me", middleware_1.authMiddleware, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const userId = (_a = req.user) === null || _a === void 0 ? void 0 : _a.id;
    if (!userId) {
        return res.status(400).json({
            message: "User ID is required to fetch lawyer records.",
        });
    }
    try {
        const lawyer = yield db_1.prismaClient.lawyer.findUnique({
            where: {
                userId,
            },
        });
        return res.status(200).json({
            message: "Lawyer data fetched successfully.",
            lawyer,
        });
    }
    catch (error) {
        console.error("Error fetching lawyer data:", error.message, error.stack);
        return res.status(500).json({
            message: "An error occurred while fetching lawyer data.",
        });
    }
}));
exports.lawyerRouter = router;
