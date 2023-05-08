import { ICidade } from '../../models';

export const create = async (cidade: Omit<ICidade, 'id'>): Promise<number | Error> => {
  try{
    return 1;
  }catch(error){
    console.log(error);
    return Error('');
  }
};