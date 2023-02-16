const CartIcon = () => {
  const { itemsCount } = useSelector((state) => state.cart.cart);

  return (
    React.createElement("div", {className: "cartIconContainer"}, 
      React.createElement("img", {src: "../../assets/shopping-bag.svg", alt: "Cart Icon", className: "shoppingIcon"}), 
      React.createElement("span", {className: "itemCount"}, itemsCount)
    )
  );
};
