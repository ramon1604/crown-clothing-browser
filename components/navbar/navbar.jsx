const Navbar = () => {
  const [show, setShow] = useState(false);
  const currentUser = useSelector((state) => state.user.currentUser);
  const dispatch = useDispatch();

  const handlerShow = () => setShow((prevShow) => !prevShow);

  const setUser = () => {
    dispatch({
      payload: null,
      type: "user/updUser",
    });
  };

  const setCart = () => {
    dispatch({
      payload: {
        cartItems: [],
        itemsCount: 0,
        total: 0,
      },
      type: "cart/updCart",
    });
  };

  const signOut = async () => {
    await globalObjects.userSignOut();
    setUser();
    setCart();
  };

  const userName = currentUser ? currentUser.email.split("@")[0] : "";

  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top"
      data-bs-theme="dark"
    >
      <div className="container-fluid">
        <Link className="navbar-brand mb-2" to="/">
          <img src="../../assets/crown-logo.svg" alt="logo" />
        </Link>
        {userName ? (
          <span className="text-capitalize rounded-pill mt-1 me-2 pt-1 pb-1 ps-2 pe-2 bg-light text-black">
            `Hello ${userName}`
          </span>
        ) : null}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mb-2 mb-lg-0 me-auto">
            <li className="nav-item mt-2">
              <Link className="nav-link" aria-current="page" to="shop">
                Shop
              </Link>
            </li>
            <li className="nav-item">
              <span
                className="nav-link fs-4"
                aria-current="page"
                onClick={() => history.back()}
                title="Previous Page"
              >
                &#8656;
              </span>
            </li>
            <li className="nav-item">
              <span
                className="nav-link fs-4"
                aria-current="page"
                onClick={() => history.forward()}
                title="Next Page"
              >
                &#8658;
              </span>
            </li>
          </ul>
          <ul className="navbar-nav me-right mb-2 mb-lg-0">
            <li className="nav-item">
              {currentUser ? (
                <Link className="nav-link" to="/" onClick={signOut}>
                  Sign Out
                </Link>
              ) : (
                <Link className="nav-link" to="sign-in">
                  Sign In
                </Link>
              )}
            </li>
            <li className="nav-item">
              <span title="Shopping Cart" onClick={handlerShow}>
                <CartIcon />
              </span>
            </li>
            <li className="nav-item dropdown dropstart">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Options
              </a>
              <ul className="dropdown-menu mt-3">
                <li>
                  <Link className="dropdown-item" to="checkout">
                    Checkout
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="#">
                    Another option
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </li>
          </ul>
          {show && <CartDropdown handlerDropdown={handlerShow} />}
        </div>
      </div>
    </nav>
  );
};
