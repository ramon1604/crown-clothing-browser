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
    React.createElement("div", null, 
      isLoading ? (
        React.createElement(Spinner, null)
      ) : (
        products.map(({ title, items }) => (
          React.createElement("div", {key: title, className: `shopCategory`}, 
            React.createElement(Link, {
              to: `${title.toLowerCase()}`, 
              className: "link", 
              onClick: () => updNavigation(title)
            }, 
              React.createElement("span", {title: "Shop by Category", id: title}, 
                title
              )
            ), 
            React.createElement("span", {
              id: `${title}arrowLeft`, 
              onClick: (e) => scroll(e, title), 
              className: `arrowLeft`
            }, 
              "❮"
            ), 
            React.createElement("span", {
              id: `${title}arrowRight`, 
              onClick: (e) => scroll(e, title), 
              className: `arrowRight`
            }, 
              "❯"
            ), 
            React.createElement("div", {
              id: `${title}ShopContainer`, 
              key: title, 
              className: `shopContainer`
            }, 
              items.map((product) => (
                React.createElement(ProductCard, {key: product.id, product: product})
              ))
            )
          )
        ))
      )
    )
  );
};
