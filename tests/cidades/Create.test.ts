import { StatusCodes } from 'http-status-codes';
import { testServer } from '../jest.setup';

describe('Cidades - Create', () => {
  it('Cria registro', async () => {
    const response = await testServer.post('/cidades/')
      .send({nome: 'Caxias do Sul'});


    expect(response.statusCode).toEqual(StatusCodes.CREATED);
    expect(typeof response.body).toEqual('object');
  });

  it('Testando as requisições', async () => {
    const response = await testServer.post('/cidades')
      .send({nome: 'Ca'});


    expect(response.body).toHaveProperty('errors.body.nome');
  });

});