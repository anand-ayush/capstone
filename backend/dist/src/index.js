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
// import { caseRouter } from './router/case';
const reset_password_1 = require("./router/reset-password");
const http_1 = require("http");
const socket_io_1 = require("socket.io");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(cookieParser());
app.use((0, cors_1.default)());
app.use("/api/v1/user", user_1.userRouter);
app.use("/api/v1/bail", bail_1.bailRouter);
app.use("/api/v1/forms", prisoner_1.prisonRouter);
app.use("/api/v1/forms", lawyer_1.lawyerRouter);
// app.use("/api/v1/cases", caseRouter);
app.use("/api/v1", reset_password_1.resetPasswordRouter);
app.use("/api/v1/lawyer", lawyer_1.lawyerRouter);
const httpServer = (0, http_1.createServer)(app);
const io = new socket_io_1.Server(httpServer, {
    cors: {
        origin: '*',
    }
});
io.on('connection', (socket) => {
    console.log('A user connected:', socket.id);
    socket.on('join room', (roomId) => {
        socket.join(roomId);
        console.log(`${socket.id} joined room: ${roomId}`);
    });
    socket.on('message', (data) => {
        const { roomId, content } = data;
        io.to(roomId).emit('message', {
            content,
            from: socket.id,
        }); // Broadcast message to the room
    });
    socket.on('disconnect', () => {
        console.log('User disconnected:', socket.id);
    });
});
httpServer.listen(3000, () => {
    console.log('Server is running on port 3000');
});
