import { Request, Response } from 'express';
import * as yup from 'yup';
import { validation } from '../../shared/middlewares';
import { StatusCodes } from 'http-status-codes';

interface IParamProps {
  id?: number;
}//interface 

//Nesse código está fazendo as validações para que não de erro. primeiro passando o tipo, depois se ele é obrigatório e por último a quantidade de char.
export const getByIdValidation = validation((getSchema) => ({
  params: getSchema<IParamProps>(yup.object().shape({
    id: yup.number().integer().required().moreThan(0),
  })),
}));

export const getById = async (req: Request<IParamProps>, res: Response) => {
  console.log(req.params);


  return res.status(StatusCodes.CREATED).send('Not Implemented');
};//Controller do create