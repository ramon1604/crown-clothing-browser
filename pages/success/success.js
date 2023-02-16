const Success = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const clearCart = () => {
      dispatch({
        payload: {
          cartItems: [],
          itemsCount: 0,
          total: 0,
        },
        type: "cart/updCart",
      });
    };
    clearCart();
  }, [dispatch]);

  return (
    React.createElement("div", {className: `successContainer`}, 
      React.createElement("h1", null, "Payment Successful !!!!")
    )
  );
};
