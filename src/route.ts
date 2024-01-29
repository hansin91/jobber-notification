import express, { Router, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

const router: Router = express.Router();

export function healthRoutes(): Router {
  router.get('/notification-health', (_, res: Response) =>{
    res.status(StatusCodes.OK).send('Notification service is healthy and OK.');
  });
  return router;
}
