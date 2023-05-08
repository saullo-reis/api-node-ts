import { Request, Response } from 'express';
import * as yup from 'yup';
import { validation } from '../../shared/middlewares';
import {StatusCodes} from 'http-status-codes';
import { ICidade } from '../../db/models';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface IBodyProps extends Omit<ICidade, 'id'>{
}//interface 

//Nesse código está fazendo as validações para que não de erro. primeiro passando o tipo, depois se ele é obrigatório e por último a quantidade de char.
export const createValidation = validation((getSchema) => ({
  body: getSchema<IBodyProps>(yup.object().shape({
    nome: yup.string().required().min(3),
  })),
}));

export const create = async (req: Request<{}, {}, ICidade>, res: Response) => {
  console.log(req.body);


  return res.status(StatusCodes.CREATED).send('Not Implemented');
};//Controller do create