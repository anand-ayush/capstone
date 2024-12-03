"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const cookieParser = require('cookie-parser');
const user_1 = require("./router/user");
const bail_1 = require("./router/bail");
const prisoner_1 = require("./router/prisoner");
const lawyer_1 = require("./router/lawyer");
const case_1 = require("./router/case");
const reset_password_1 = require("./router/reset-password");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(cookieParser());
app.use((0, cors_1.default)());
app.use("/api/v1/user", user_1.userRouter);
app.use("/api/v1/bail", bail_1.bailRouter);
app.use("/api/v1/forms", prisoner_1.prisonRouter);
app.use("/api/v1/forms", lawyer_1.lawyerRouter);
app.use("/api/v1/cases", case_1.caseRouter);
app.use("/api/v1", reset_password_1.resetPasswordRouter);
app.listen(3000);