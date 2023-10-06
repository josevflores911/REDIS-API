import { Router } from 'express';
import { celebrate, Joi, Segments } from 'celebrate';

import ForgotPasswordController from '../controllers/ForgotPassword.Controller';

const passwordRouter = Router();
const forgotPasswordController = new ForgotPasswordController();
//http://localhost:3333/password/forgot

passwordRouter.post(
  '/forgot',
  celebrate({
    [Segments.BODY]: {
      email: Joi.string().required(),
      password: Joi.string().required(),
    },
  }),
  forgotPasswordController.create,
);

export default passwordRouter;
