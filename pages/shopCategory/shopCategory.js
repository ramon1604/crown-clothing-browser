const ShopCategory = (props) => {
  let category = JSON.stringify(window.location.pathname).replace("/", "");
  category = eval(category).capitalized();

  const products = useSelector((state) => state.products.products);
  const isLoading = useSelector((state) => state.products.loading);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!products.length) {
      dispatch(globalObjects.fetchProducts());
      return window.scrollTo(0, 0);
    }
  }, [dispatch]);

  return React.createElement(
    "div",
    null,
    isLoading
      ? React.createElement(Spinner, null)
      : products.map(
          ({ title, items }) =>
            title === category &&
            React.createElement(
              "div",
              { key: title, className: `shopCategoryContainer` },
              React.createElement("span", { className: `title` }, title),
              React.createElement(
                "div",
                { key: title, className: `shopCategoryItemsContainer` },
                items.map((product) =>
                  React.createElement(ProductCard, {
                    key: product.id,
                    product: product,
                  })
                )
              )
            )
        )
  );
};
