let initHash;
let scrollPos = 0;
let prevTitle = "";

const Shop = () => {
  const products = useSelector((state) => state.products.products);
  const isLoading = useSelector((state) => state.products.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!products.length) {
      dispatch(globalObjects.fetchProducts());
    }
  }, [dispatch]);

  const scroll = (e, title) => {
    const obj = document.querySelector(`#${title}ShopContainer`);
    let signOp = 0;
    if (e.target.className === "arrowLeft") {
      signOp = 1;
    } else {
      signOp = -1;
    }
    obj.scrollBy(signOp * (obj.children[0].offsetWidth + 8), 0);
    hideShowArrows(title, obj);
  };

  const hideShowArrows = (title, obj) => {
    if (prevTitle !== title) {
      scrollPos = 0;
    }
    prevTitle = title;
    const rArrow = document.querySelector(`#${title}arrowRight`);
    const lArrow = document.querySelector(`#${title}arrowLeft`);
    if (obj.scrollLeft) {
      rArrow.style.visibility = "visible";
    } else {
      rArrow.style.visibility = "hidden";
    }
    if (scrollPos) {
      if (scrollPos === obj.scrollLeft) {
        lArrow.style.visibility = "hidden";
      } else {
        lArrow.style.visibility = "visible";
      }
    } else {
      lArrow.style.visibility = "visible";
    }
    scrollPos = obj.scrollLeft;
  };

  const updNavigation = (title) => {
    dispatch({
      payload: `${title}`,
      type: "navigation/updNavigation",
    });
  };

  return (
    <div>
      {isLoading ? (
        <Spinner />
      ) : (
        products.map(({ title, items }) => (
          <div key={title} className={`shopCategory`}>
            <Link
              to={`${title.toLowerCase()}`}
              className="link"
              onClick={() => updNavigation(title)}
            >
              <span title="Shop by Category" id={title}>
                {title}
              </span>
            </Link>
            <span
              id={`${title}arrowLeft`}
              onClick={(e) => scroll(e, title)}
              className={`arrowLeft`}
            >
              &#10094;
            </span>
            <span
              id={`${title}arrowRight`}
              onClick={(e) => scroll(e, title)}
              className={`arrowRight`}
            >
              &#10095;
            </span>
            <div
              id={`${title}ShopContainer`}
              key={title}
              className={`shopContainer`}
            >
              {items.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        ))
      )}
    </div>
  );
};
