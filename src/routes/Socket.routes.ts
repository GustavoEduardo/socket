
import { Router } from 'express';
import Controller from '../api/controllers/SocketController';

const routes = Router();
routes.route('/tela1').get(Controller.tela1);
// routes.route('/banner/:id').get(Controller.getById);
// routes.route('/banner').post(Controller.set);
// routes.route('/banner/:id').put(Controller.update);
// routes.route('/banner/:id').delete(Controller.delete);

export default routes;