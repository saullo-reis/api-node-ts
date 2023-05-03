import { Request, Response } from 'express';
import * as yup from 'yup';
import { validation } from '../../shared/middlewares';
import { StatusCodes } from 'http-status-codes';

interface IQueryProps {
  page?: number;
  limit?: number;
  filter?: string;
}//interface 

//Nesse código está fazendo as validações para que não de erro. primeiro passando o tipo, depois se ele é obrigatório e por último a quantidade de char.
export const getAllValidations = validation((getSchema) => ({
  query: getSchema<IQueryProps>(yup.object().shape({
    page: yup.number().notRequired().moreThan(0),
    limit: yup.number().notRequired().moreThan(0),
    filter: yup.string().notRequired(),
  })),
}));

export const getAll = async (req: Request<{}, {}, {}, IQueryProps>, res: Response) => {
  console.log(req.query);


  return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send('Not Implemented');
};//Controller do create