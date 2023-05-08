import {ICidade} from '../../models';

declare module 'knes/types/tables' {
  interface Tables {
    cidade: ICidade
    pessoa: IPessoa
    usuario: IUsuario
  }
}