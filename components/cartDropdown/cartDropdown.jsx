const CartDropdown = ({ handlerDropdown }) => {
  const { cartItems } = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();

  const updNavigation = (path) => {
    dispatch({
      payload: `shop`,
      type: "navigation/updNavigation",
    });
  };

  const checkoutHandler = async () => {
    //updNavigation(`checkout`)
    handlerDropdown();
  };

  return (
    <div className="cartDropdownContainer">
      <div className="cartItems">
        {cartItems.map((item) => (
          <CartItem key={item.id} cartItem={item} />
        ))}
      </div>
      <Link to="checkout" className="link">
        <Button type={`button`} btnClass={``} onClick={checkoutHandler}>
          Checkout
        </Button>
      </Link>
    </div>
  );
};
