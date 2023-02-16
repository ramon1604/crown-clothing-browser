const CartItem = ({ cartItem }) => {
  const { name, quantity, imageUrl, price } = cartItem;
  return (
    React.createElement("div", {className: `cartItemContainer`}, 
      React.createElement("img", {src: imageUrl, alt: `${name}`}), 
      React.createElement("div", {className: `itemDetails`}, 
        React.createElement("span", {className: `name`}, name), 
        React.createElement("span", {className: `price`}, 
          quantity, " x $", price.toFixed(2)
        )
      )
    )
  );
};
