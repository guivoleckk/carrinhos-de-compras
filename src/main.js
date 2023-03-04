import { searchCep } from './helpers/cepFunctions';
import './style.css';
import { createCartProductElement,
  createCustomElement, createProductElement,
  showTotalPrice } from './helpers/shopFunctions';
import { fetchProductsList, fetchProduct } from './helpers/fetchFunctions';
import { getSavedCartIDs } from './helpers/cartFunctions';

const productsList = document.querySelector('.products');

document.querySelector('.cep-button').addEventListener('click', searchCep);

const functionShowProducts = async (param) => {
  try {
    const addLoading = createCustomElement('p', 'loading', 'carregando...');
    productsList.appendChild(addLoading);
    const teste = await fetchProductsList(param);
    addLoading.remove();
    teste.forEach((chave) => {
      const testeCreate = createProductElement(chave);
      productsList.appendChild(testeCreate);
      showTotalPrice();
    });
  } catch (error) {
    const errorReceived = document.createElement('p');
    errorReceived.className = 'error';
    errorReceived.innerHTML = 'Algum erro ocorreu, recarregue a página e tente novamente';
    productsList.appendChild(errorReceived);
  }
};

const getSavedItemsCart = async () => {
  const olCart = document.querySelector('.cart__products');
  const idArrayCart = await getSavedCartIDs();
  idArrayCart.forEach(async (item) => {
    const functionFetchProducts = await fetchProduct(item);
    const createCartElement = createCartProductElement(functionFetchProducts);
    olCart.appendChild(createCartElement);
  });
};

//  calling functions
functionShowProducts('computador');
getSavedItemsCart();
