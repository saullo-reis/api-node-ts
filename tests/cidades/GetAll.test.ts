import { StatusCodes } from 'http-status-codes';
import { testServer } from '../jest.setup';

describe('Cidades - GetAll', () => {
  it('Buscando todas as cidades', async () => {
    const response = await testServer.get('/cidades').send({
      page: 1,
      limit: 10,
      filter: ''
    });

    expect(response.statusCode).toBe(StatusCodes.ACCEPTED);
  });
});