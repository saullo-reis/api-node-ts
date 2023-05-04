import { Request, Response } from 'express';
import * as yup from 'yup';
import { validation } from '../../shared/middlewares';
import { StatusCodes } from 'http-status-codes';

interface IParamProps {
  id?: number;
}//interface 

//Nesse código está fazendo as validações para que não de erro. primeiro passando o tipo, depois se ele é obrigatório e por último a quantidade de char.
export const deleteByIdValidation = validation((getSchema) => ({
  params: getSchema<IParamProps>(yup.object().shape({
    id: yup.number().integer().required().moreThan(0),
  })),
}));

export const deleteById = async (req: Request<IParamProps>, res: Response) => {
  console.log(req.params);

  if(Number(req.params.id) === 99999) return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
    errors: {
      default: 'Registro não encontrado'
    }
  });

  return res.status(StatusCodes.NO_CONTENT).send('Not Implemented');
};//Controller do create