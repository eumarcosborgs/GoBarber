import { Router } from 'express';

import SessionsController from '../controllers/SessionsController';

const passwordRouter = Router();
const sessionsController = new SessionsController();

passwordRouter.post('/', sessionsController.create);

export default passwordRouter;
