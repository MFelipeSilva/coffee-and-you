import { useState, useEffect, createContext, useContext } from "react";

const CartContext = createContext({
  products: [],
  addProductToCart: () => {},
  removeProductFromCart: () => {},
  decreaseProductQuantity: () => {},
  increaseProductQuantity: () => {},
  total: {
    items: 0,
    value: 0,
  },
});

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [total, setTotal] = useState({ items: 0, value: 0 });

  useEffect(() => {
    const storedCart = JSON.parse(
      localStorage.getItem("@coffeeandyou/cart") || "[]"
    );

    if (storedCart && storedCart.length > 0) {
      setProducts(storedCart);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("@coffeeandyou/cart", JSON.stringify(products));
    updateTotal();
  }, [products]);

  const updateTotal = () => {
    const newTotal = products.reduce(
      (total, product) => {
        return {
          items: total.items + product.quantity,
          value: total.value + product.price * product.quantity,
        };
      },
      { items: 0, value: 0 }
    );
    setTotal(newTotal);
  };

  const addProductToCart = (product) => {
    const ProductExistsInCart = products.some(
      (cartProduct) => cartProduct.id === product.id
    );

    if (ProductExistsInCart) {
      setProducts((prevProducts) =>
        prevProducts.map((cartProduct) => {
          if (cartProduct.id === product.id) {
            return {
              ...cartProduct,
              quantity: cartProduct.quantity ? cartProduct.quantity + 1 : 1,
            };
          }
          return cartProduct;
        })
      );
      return;
    }
    setProducts((prevProducts) => [
      ...prevProducts,
      { ...product, quantity: 1 },
    ]);
  };

  const removeProductFromCart = (productId) => {
    setProducts((prevProducts) =>
      prevProducts.filter((cartProduct) => cartProduct.id !== productId)
    );
  };

  const decreaseProductQuantity = (productId) => {
    setProducts((prevProducts) =>
      prevProducts
        .map((cartProduct) => {
          if (cartProduct.id === productId) {
            return {
              ...cartProduct,
              quantity: cartProduct.quantity ? cartProduct.quantity - 1 : 1,
            };
          }
          return cartProduct;
        })
        .filter((cartProduct) =>
          cartProduct.quantity ? cartProduct.quantity > 0 : cartProduct.quantity
        )
    );
  };

  const increaseProductQuantity = (productId) => {
    setProducts((prevProducts) =>
      prevProducts.map((cartProduct) => {
        if (cartProduct.id === productId) {
          return {
            ...cartProduct,
            quantity: cartProduct.quantity ? cartProduct.quantity + 1 : 1,
          };
        }
        return cartProduct;
      })
    );
  };

  return (
    <CartContext.Provider
      value={{
        products,
        addProductToCart,
        removeProductFromCart,
        decreaseProductQuantity,
        increaseProductQuantity,
        total,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
