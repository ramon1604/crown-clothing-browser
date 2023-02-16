const ProductCard = ({ product }) => {
  const { cartItems } = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();

  const { name, imageUrl, price } = product;

  const addProductToCart = () => {
    dispatch({
      payload: globalObjects.addItemToCart(cartItems, product),
      type: "cart/updCart",
    });
  };

  return (
    <div className={`productCardContainer`}>
      <img src={imageUrl} alt={`${name}`} />
      <div className={`footer`}>
        <span className={`name`}>{name}</span>
        <span className={`price`}>{price}</span>
      </div>
      <Button type={`button`} btnClass={``} onClick={addProductToCart}>
        Add to Cart
      </Button>
    </div>
  );
};
