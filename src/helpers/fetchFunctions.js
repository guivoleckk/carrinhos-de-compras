export const fetchProduct = async (param) => {
  if (!param) throw new Error('ID não informado');
  const endPOINTApi = await fetch(`https://api.mercadolibre.com/items/${param}`);
  const data = await endPOINTApi.json();
  return data;
};

export const fetchProductsList = async (computador) => {
  if (!computador) throw new Error('Termo de busca não informado');
  const endPOINTApi = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${computador}`);
  const data = await endPOINTApi.json();
  return data.results;
};
