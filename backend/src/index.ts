import express from 'express';
import cors from 'cors';
const cookieParser = require('cookie-parser');
import {userRouter} from './router/user';
import { bailRouter } from './router/bail';
import { prisonRouter } from './router/prisoner';
import { lawyerRouter } from './router/lawyer';
import { caseRouter } from './router/case';
import { resetPasswordRouter } from './router/reset-password';


const app = express();
app.use(express.json());
app.use(cookieParser()); 
app.use(cors());

app.use("/api/v1/user", userRouter);
app.use("/api/v1/bail", bailRouter);
app.use("/api/v1/forms", prisonRouter);
app.use("/api/v1/forms", lawyerRouter);
app.use("/api/v1/cases", caseRouter);
app.use("/api/v1/forgotPassword", resetPasswordRouter);
 
app.listen(3000);