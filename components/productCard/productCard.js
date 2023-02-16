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
    React.createElement("div", {className: `productCardContainer`}, 
      React.createElement("img", {src: imageUrl, alt: `${name}`}), 
      React.createElement("div", {className: `footer`}, 
        React.createElement("span", {className: `name`}, name), 
        React.createElement("span", {className: `price`}, price)
      ), 
      React.createElement(Button, {type: `button`, btnClass: ``, onClick: addProductToCart}, 
        "Add to Cart"
      )
    )
  );
};
