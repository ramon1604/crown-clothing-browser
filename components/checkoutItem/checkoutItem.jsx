const CheckoutItem = ({
  cartItems,
  cartItem,
  addHandler,
  removeHandler,
  clearHandler,
}) => {
  const { name, quantity, price, imageUrl } = cartItem;
  const dispatch = useDispatch();

  const addItemHandler = () => {
    dispatch({
      payload: addHandler(cartItems, cartItem),
      type: "cart/updCart",
    });
  };
  const removeItemHandler = () => {
    dispatch({
      payload: removeHandler(cartItems, cartItem),
      type: "cart/updCart",
    });
  };
  const clearItemHandler = () => {
    dispatch({
      payload: clearHandler(cartItems, cartItem),
      type: "cart/updCart",
    });
  };

  return (
    <div className={`checkoutItemContainer`}>
      <div className={`imageContainer`}>
        <img src={imageUrl} alt={`${name}`} />
      </div>
      <span className={`name`}> {name} </span>
      <span className={`quantity`}>
        <div className={`arrow`} onClick={removeItemHandler}>
          &#10094;
        </div>
        <span className={`value`}>{quantity}</span>
        <div className={`arrow`} onClick={addItemHandler}>
          &#10095;
        </div>
      </span>
      <span className={`price`}>${price.toFixed(2)}</span>
      <div className={`removeButton`} onClick={clearItemHandler}>
        &#10005;
      </div>
    </div>
  );
};
