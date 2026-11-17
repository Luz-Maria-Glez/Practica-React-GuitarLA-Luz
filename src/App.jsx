
import { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Headers';
import Footer from './components/Footer';
import Guitar from './components/Guitar';
import { db } from './data/db';

function App() {

  const [data] = useState(db);
  const [cart, setCart] = useState(() => {
  const cartLocalStorage = localStorage.getItem('cart');

  return cartLocalStorage ? JSON.parse(cartLocalStorage) : [];
  });

  useEffect(() => {
  localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  function addToCart(item) {
     console.log("Guitarra seleccionada:", item);

    const existGuitar = cart.findIndex(
      guitar => guitar.id === item.id
    );

    if (existGuitar >= 0) {

      const updateCart = [...cart];
      updateCart[existGuitar].quantity++;

      setCart(updateCart);

    } else {

      const newItem = { ...item, quantity: 1 };

      setCart([...cart, newItem]);

    }

  }

  function removeFromCart(id) {
    setCart(prevCart =>
      prevCart.filter(guitar => guitar.id !== id)
    );
  }

  const MAX_QUANTITY = 5;

  function increaseQuantity(id) {

    const updateQuantity = cart.map(guitar => {

      if (guitar.id === id && guitar.quantity < MAX_QUANTITY) {
        return {
          ...guitar,
          quantity: guitar.quantity + 1
        };
      }

      return guitar;

    });

    setCart(updateQuantity);
  }

  function decreaseQuantity(id) {

    const updateQuantity = cart.map(guitar => {

      if (guitar.id === id && guitar.quantity > 1) {
        return {
          ...guitar,
          quantity: guitar.quantity - 1
        };
      }

      return guitar;

    });

    setCart(updateQuantity);
  }
  function removeFromCart(id) {
  setCart(prevCart =>
    prevCart.filter(guitar => guitar.id !== id)
  );
}

  function clearCart() {
    setCart([]);
  }

  return (
    <>
      <Header
        cart={cart}
        removeFromCart={removeFromCart}
        increaseQuantity={increaseQuantity}
        decreaseQuantity={decreaseQuantity}
        clearCart={clearCart}
        
      />

      <main className="container-xl mt-5">

        <h2 className="text-center">Nuestra Colección</h2>

        <div className="row mt-5">

          {data.map((guitar) => (
            <Guitar
              key={guitar.id}
              guitarra={guitar}
              addToCart={addToCart}
            />
          ))}

        </div>

      </main>

      <Footer />
    </>
  );
}

export default App;
