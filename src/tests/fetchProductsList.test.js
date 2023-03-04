import './mocks/fetchSimulator';
import { fetchProductsList } from '../helpers/fetchFunctions';
import computadorSearch from './mocks/search';

// implemente seus testes aqui
describe('Teste a função fetchProductsList', () => {
  it('fetchProductsList é uma função', () => {
    expect(typeof fetchProductsList).toBe('function')
  });

  it('fetch é chamado ao executar fetchProductsList', async () => {
    await fetchProductsList('computador');
    expect(fetch).toHaveBeenCalled();
  });

  it('fetch é chamado com o endpoint correto ao executar fetchProductsList', async () => {
    await fetchProductsList('computador');
    expect(fetch).toHaveBeenCalledWith('https://api.mercadolibre.com/sites/MLB/search?q=computador');
  });

  it('Teste se o retorno de fetchProductList com o argumento computador é uma estrutura de dados igual ao objeto computadorSearch', async () => {
    const teste = await fetchProductsList('computador');
    expect(teste).toEqual(computadorSearch);
  });

  it('Teste se a função fetchProductList sem argumento retorna um erro com a mensagem: Termo de busca não informado', async () => {
    await expect(fetchProductsList('')).rejects.toThrow();
  });
});