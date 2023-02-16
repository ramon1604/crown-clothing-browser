const Checkout = () => {
  const { cartItems, itemsCount, total } = useSelector(
    (state) => state.cart.cart
  );

  return (
    <div className={`checkoutContainer`}>
      <div className={`checkoutHeader`}>
        <div className={`headerBlock`}>
          <span>Product</span>
        </div>
        <div className={`headerBlock`}>
          <span>Description</span>
        </div>
        <div className={`headerBlock`}>
          <span>Quantity</span>
        </div>
        <div className={`headerBlock`}>
          <span>Price</span>
        </div>
        <div className={`headerBlock`}>
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((cartItem) => {
        return (
          <CheckoutItem
            key={cartItem.id}
            className={`checkoutHeader`}
            cartItems={cartItems}
            cartItem={cartItem}
            addHandler={globalObjects.addItemToCart}
            removeHandler={globalObjects.removeItemFromCart}
            clearHandler={globalObjects.clearItemFromCart}
          />
        );
      })}
      <div className={`footer`}>
        <div className={`itemsCount`}>Items: {itemsCount}</div>
        <div className={`total`}>Total: ${total.toFixed(2)}</div>
      </div>
      <div style={{ padding: 20, width: 400 }}>
        <Payment />
      </div>
    </div>
  );
};
