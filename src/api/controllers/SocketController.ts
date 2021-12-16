import {  Request, Response } from 'express';
import SocketService from '../services/SocketService';

class Sockettroller{

    async get(req:Request,res:Response){
        let busca: any = req.query.busca;       
        
        let retorno = await SocketService.busca(busca);

        return res.status(retorno.code).json(retorno);
    }

    async tela1(req:Request,res:Response){
       res.render("tela1")
    }

}

export default new Sockettroller();