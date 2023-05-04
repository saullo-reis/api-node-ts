import { StatusCodes } from 'http-status-codes';
import { testServer } from '../jest.setup';

describe('Cidades - GetById', () => {
  it('Buscando a cidade pelo id', async () => {
    const response = await testServer.get('/cidades/1');

    expect(response.statusCode).toBe(StatusCodes.ACCEPTED);
  });
});