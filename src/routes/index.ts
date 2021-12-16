import { Router } from 'express';
import SocketRoutes from './Socket.routes';


const routes = Router();

routes.use(SocketRoutes);

export default routes;

