export const getAddress = async (cep) => {
  const urls = [`https://cep.awesomeapi.com.br/json/${cep}`, `https://brasilapi.com.br/api/cep/v2/${cep}`];
  try {
    const responses = await Promise.any(urls
      .map((url) => fetch(url).then((res) => res.json())));
    return responses;
  } catch (error) {
    return error.message;
  }
};

export const searchCep = async () => {
  const cepInput = document.querySelector('.cep-input');
  const cepText = document.querySelector('.cart__address');
  const { address, district, city, state } = await getAddress(cepInput.value);
  cepText.innerText = address
    ? `${address} - ${district} - ${city} - ${state}` : 'CEP não encontrado';
};
