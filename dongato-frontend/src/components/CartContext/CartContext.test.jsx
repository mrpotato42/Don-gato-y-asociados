import React from 'react';
import '@testing-library/jest-dom';
import { BrowserRouter} from 'react-router-dom'
import { render, screen } from '@testing-library/react';
import { CartContext } from './CartContext';
import CartContextProvider from './CartContext';
import { fireEvent } from '@testing-library/react';

// Prueba que añade un artículo al carrito
test('adds item to cart', () => {
  const wrapper = render(
    <CartContextProvider>
      <CartContext.Consumer>
        {({ addToCart }) => (
          <button onClick={() => addToCart({ id: 1, quantity: 1 })}>
            Add to Cart
          </button>
        )}
      </CartContext.Consumer>
    </CartContextProvider>
  );

  // Simulamos un clic en el botón "Add to Cart".
  fireEvent.click(wrapper.getByText('Add to Cart'));
});

// Prueba que añade un artículo al carrito y verifica que el artículo se agregó correctamente.
test('adds item to cart', () => {
  const wrapper = render(
    <CartContextProvider>
      <BrowserRouter>
        <CartContext.Consumer>
          {({ addToCart }) => (
            <button onClick={() => addToCart({ id: 1, quantity: 1 })}>
              Add to Cart
            </button>
          )}
        </CartContext.Consumer>
      </BrowserRouter>
    </CartContextProvider>
  );

  // Simulamos un clic en el botón "Add to Cart".
  fireEvent.click(wrapper.getByText('Add to Cart'));

  // Luego, comprobamos que el elemento "1" (que podría representar la cantidad de artículos en el carrito) esté presente en el DOM.
  console.log(screen.queryByText('1'));
  expect(screen.queryByText('1')).toBeInTheDocument();
});

// Prueba que elimina un artículo del carrito y verifica que el artículo se eliminó correctamente.
test('removes item from cart', () => {
  const wrapper = render(
    <CartContextProvider>
      <CartContext.Consumer>
        {({ addToCart, removeItem }) => (
          <>
            <button onClick={() => addToCart({ id: 1, quantity: 1 })}>
              Add to Cart
            </button>
            <button onClick={() => removeItem(1)}>Remove from Cart</button>
          </>
        )}
      </CartContext.Consumer>
    </CartContextProvider>
  );

  // Simulamos un clic en el botón "Add to Cart" y luego en el botón "Remove from Cart".
  fireEvent.click(wrapper.getByText('Add to Cart'));
  fireEvent.click(wrapper.getByText('Remove from Cart'));

  // Comprobamos que el elemento "1" ya no esté presente en el DOM.
  expect(wrapper.queryByText('1')).not.toBeInTheDocument();

});

// Prueba que vacía el carrito y verifica que el carrito esté vacío.
test('empties cart', () => {
  const wrapper = render(
    <CartContextProvider>
      <CartContext.Consumer>
        {({ addToCart, emptyCart }) => (
          <>
            <button onClick={() => addToCart({ id: 1, quantity: 1 })}>
              Add to Cart
            </button>
            <button onClick={() => emptyCart()}>Empty Cart</button>
          </>
        )}
      </CartContext.Consumer>
    </CartContextProvider>
  );

  // Simulamos un clic en el botón "Add to Cart" y luego en el botón "Empty Cart".
  fireEvent.click(wrapper.getByText('Add to Cart'));
  fireEvent.click(wrapper.getByText('Empty Cart'));

  // Comprobamos que el elemento "1" ya no esté presente en el DOM.
  expect(wrapper.queryByText('1')).not.toBeInTheDocument();
});

// Prueba que cuenta los artículos en el carrito y verifica que el recuento sea correcto.
test('counts items in cart', () => {
  const wrapper = render(
    <CartContextProvider>
      <CartContext.Consumer>
        {({ addToCart, cartCounter }) => (
          <>
            <button onClick={() => addToCart({ id: 1, quantity: 1 })}>
              Add to Cart
            </button>
            <div>{cartCounter()}</div>
          </>
        )}
      </CartContext.Consumer>
    </CartContextProvider>
  );

  // Simulamos un clic en el botón "Add to Cart".
  fireEvent.click(wrapper.getByText('Add to Cart'));

  // Comprobamos que el elemento "1" esté presente en el DOM, lo que podría representar el recuento de artículos en el carrito.
  expect(wrapper.getByText('1')).toBeInTheDocument();
});

// Prueba que calcula el precio total de los artículos en el carrito y verifica que el cálculo sea correcto.
test('calculates total price of items in cart', () => {
  const wrapper = render(
    <CartContextProvider>
      <CartContext.Consumer>
        {({ addToCart, totalBuy }) => (
          <>
            <button onClick={() => addToCart({ id: 1, quantity: 2, price: 10 })}>
              Add to Cart
            </button>
            <div>{totalBuy()}</div>
          </>
        )}
      </CartContext.Consumer>
    </CartContextProvider>
  );

  // Simulamos un clic en el botón "Add to Cart".
  fireEvent.click(wrapper.getByText('Add to Cart'));

  // Comprobamos que el elemento "20" esté presente en el DOM, lo que podría representar el precio total de los artículos en el carrito.
  expect(wrapper.getByText('20')).toBeInTheDocument();
});
