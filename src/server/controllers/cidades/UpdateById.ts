import { Request, Response } from 'express';
import * as yup from 'yup';
import { validation } from '../../shared/middlewares';
import { StatusCodes } from 'http-status-codes';

interface IParamProps {
  id?: number;
}
interface IBodyProps {
  nome?: string;
}//interface 

//Nesse código está fazendo as validações para que não de erro. primeiro passando o tipo, depois se ele é obrigatório e por último a quantidade de char.
export const updateByIdValidation = validation((getSchema) => ({
  body: getSchema<IBodyProps>(yup.object().shape({
    nome: yup.string().required().min(3),
  })),
  params: getSchema<IParamProps>(yup.object().shape({
    id: yup.number().integer().required().moreThan(0),
  })),
}));

export const updateById = async (req: Request<{}, {}, {}, IBodyProps>, res: Response) => {
  console.log(req.params);
  console.log(req.body);


  return res.status(StatusCodes.CREATED).send('Not Implemented');
};//Controller do create