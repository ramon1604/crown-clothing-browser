const CartItem = ({ cartItem }) => {
  const { name, quantity, imageUrl, price } = cartItem;
  return (
    <div className={`cartItemContainer`}>
      <img src={imageUrl} alt={`${name}`} />
      <div className={`itemDetails`}>
        <span className={`name`}>{name}</span>
        <span className={`price`}>
          {quantity} x ${price.toFixed(2)}
        </span>
      </div>
    </div>
  );
};
