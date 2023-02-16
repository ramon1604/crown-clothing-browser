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
    React.createElement("div", {className: "cartDropdownContainer"}, 
      React.createElement("div", {className: "cartItems"}, 
        cartItems.map((item) => (
          React.createElement(CartItem, {key: item.id, cartItem: item})
        ))
      ), 
      React.createElement(Link, {to: "checkout", className: "link"}, 
        React.createElement(Button, {type: `button`, btnClass: ``, onClick: checkoutHandler}, 
          "Checkout"
        )
      )
    )
  );
};
