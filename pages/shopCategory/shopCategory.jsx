const ShopCategory = (props) => {
  let category = JSON.stringify(window.location.pathname).replace("/", "");
  category = eval(category).capitalized();

  const products = globalObjects.useSelector(
    (state) => state.products.products
  );
  const isLoading = globalObjects.useSelector(
    (state) => state.products.loading
  );

  const dispatch = globalObjects.useDispatch();

  useEffect(() => {
    if (!products.length) {
      dispatch(globalObjects.fetchProducts());
      return window.scrollTo(0, 0);
    }
  }, [dispatch]);

  return (
    <div>
      {isLoading ? (
        <Spinner />
      ) : (
        products.map(
          ({ title, items }) =>
            title === category && (
              <div key={title} className={`shopCategoryContainer`}>
                <span className={`title`}>{title}</span>
                <div key={title} className={`shopCategoryItemsContainer`}>
                  {items.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              </div>
            )
        )
      )}
    </div>
  );
};
