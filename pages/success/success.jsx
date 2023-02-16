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
    <div className={`successContainer`}>
      <h1>Payment Successful !!!!</h1>
    </div>
  );
};
