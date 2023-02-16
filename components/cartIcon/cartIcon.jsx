const CartIcon = () => {
  const { itemsCount } = useSelector((state) => state.cart.cart);

  return (
    <div className="cartIconContainer">
      <img src="../../assets/shopping-bag.svg" alt="Cart Icon" className="shoppingIcon" />
      <span className="itemCount">{itemsCount}</span>
    </div>
  );
};
