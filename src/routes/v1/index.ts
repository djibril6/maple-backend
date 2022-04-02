import express from 'express';
import authRoute from './auth.route';
import userRoute from './user.route';
import docRoute from './doc.route';

const routes = express.Router();

routes.use('/auth', authRoute);
routes.use('/users', userRoute);

routes.use('/docs', docRoute);

export default routes;
