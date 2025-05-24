// get cart items:

const getStoredCart = () => {
  const storedCartString = localStorage.getItem("cart");
  if (storedCartString) {
    return JSON.stringify(storedCartString);
  }
  return [];
};

// saved cart items:
const savedCartToLs = (cart) => {
  const cartStringified = JSON.stringify(cart);
  localStorage.setItem("cart", cartStringified);
};

// add cart items:

const addCartToLs = (id) => {
  const cart = getStoredCart();
  cart.push(id);
  //   saved cart items:
  savedCartToLs(cart);
};

export { addCartToLs };
