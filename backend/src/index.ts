import express from 'express';
import cors from 'cors';
const cookieParser = require('cookie-parser');
import {userRouter} from './router/user';
import { bailRouter } from './router/bail';
import { prisonRouter } from './router/prisoner';
import { lawyerRouter } from './router/lawyer';
// import { caseRouter } from './router/case';
import { resetPasswordRouter } from './router/reset-password';
import { createServer } from 'http';
import { Server } from 'socket.io';


const app = express();
app.use(express.json());
app.use(cookieParser()); 
app.use(cors());

app.use("/api/v1/user", userRouter);
app.use("/api/v1/bail", bailRouter);
app.use("/api/v1/forms", prisonRouter);
app.use("/api/v1/forms", lawyerRouter);
// app.use("/api/v1/cases", caseRouter);
app.use("/api/v1", resetPasswordRouter);


const httpServer = createServer(app);
const io = new Server(httpServer, {
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
