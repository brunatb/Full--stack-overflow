import { Router } from 'express';
import * as userController from '../controllers/user.controller';

const userRouter = new (Router as any)();

userRouter.post('/users', userController.storeUser);

export default userRouter;
