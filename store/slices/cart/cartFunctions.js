const updateCartItems = (newCartItems) => {
  const newCartCount = newCartItems.reduce(
    (count, cartItem) => count + cartItem.quantity,
    0
  );
  const newCartTotal = newCartItems.reduce(
    (total, cartItem) => total + cartItem.quantity * cartItem.price,
    0
  );
  return {
    cartItems: newCartItems,
    itemsCount: newCartCount,
    total: newCartTotal,
  };
};

const addCartItem = (cartItems, productToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );
  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }
  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const removeCartItem = (cartItems, productToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id && cartItem.quantity > 1
  );
  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem
    );
  }
  return cartItems.filter((cartItem) => cartItem.id !== productToAdd.id);
};

export const clearCartItem = (cartItems, productToAdd) =>
  cartItems.filter((cartItem) => cartItem.id !== productToAdd.id);
globalObjects.clearCartItem = clearCartItem;

export const addItemToCart = (cartItems, productToAdd) =>
  updateCartItems(addCartItem(cartItems, productToAdd));
globalObjects.addItemToCart = addItemToCart;

export const removeItemFromCart = (cartItems, productToAdd) =>
  updateCartItems(removeCartItem(cartItems, productToAdd));
globalObjects.removeItemFromCart = removeItemFromCart;

export const clearItemFromCart = (cartItems, productToAdd) =>
  updateCartItems(clearCartItem(cartItems, productToAdd));
globalObjects.clearItemFromCart = clearItemFromCart;
