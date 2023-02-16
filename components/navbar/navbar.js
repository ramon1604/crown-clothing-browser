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

  return React.createElement(
    "nav",
    {
      className: "navbar navbar-expand-lg navbar-dark bg-dark fixed-top",
      "data-bs-theme": "dark",
    },
    React.createElement(
      "div",
      { className: "container-fluid" },
      React.createElement(
        Link,
        { className: "navbar-brand mb-2", to: "/" },
        React.createElement("img", {
          src: "../../assets/crown-logo.svg",
          alt: "logo",
        })
      ),
      userName
        ? React.createElement(
            "span",
            {
              className:
                "text-capitalize rounded-pill mt-1 me-2 pt-1 pb-1 ps-2 pe-2 bg-light text-black",
            },
            `Hello ${userName}`
          )
        : null,
      React.createElement(
        "button",
        {
          className: "navbar-toggler",
          type: "button",
          "data-bs-toggle": "collapse",
          "data-bs-target": "#navbarSupportedContent",
          "aria-controls": "navbarSupportedContent",
          "aria-expanded": "false",
          "aria-label": "Toggle navigation",
        },
        React.createElement("span", { className: "navbar-toggler-icon" })
      ),
      React.createElement(
        "div",
        { className: "collapse navbar-collapse", id: "navbarSupportedContent" },
        React.createElement(
          "ul",
          { className: "navbar-nav mb-2 mb-lg-0 me-auto" },
          React.createElement(
            "li",
            { className: "nav-item mt-2" },
            React.createElement(
              Link,
              {
                className: "nav-link",
                "aria-current": "page",
                to: "shop",
              },
              "Shop"
            )
          ),
          React.createElement(
            "li",
            { className: "nav-item" },
            React.createElement(
              "span",
              {
                className: "nav-link fs-4",
                "aria-current": "page",
                onClick: () => history.back(),
                title: "Previous Page",
              },
              "⇐"
            )
          ),
          React.createElement(
            "li",
            { className: "nav-item" },
            React.createElement(
              "span",
              {
                className: "nav-link fs-4",
                "aria-current": "page",
                onClick: () => history.forward(),
                title: "Next Page",
              },
              "⇒"
            )
          )
        ),
        React.createElement(
          "ul",
          { className: "navbar-nav me-right mb-2 mb-lg-0" },
          React.createElement(
            "li",
            { className: "nav-item" },
            currentUser
              ? React.createElement(
                  Link,
                  { className: "nav-link", to: "/", onClick: signOut },
                  "Sign Out"
                )
              : React.createElement(
                  Link,
                  { className: "nav-link", to: "sign-in" },
                  "Sign In"
                )
          ),
          React.createElement(
            "li",
            { className: "nav-item" },
            React.createElement(
              "span",
              { title: "Shopping Cart", onClick: handlerShow },
              React.createElement(CartIcon, null)
            )
          ),
          React.createElement(
            "li",
            { className: "nav-item dropdown dropstart" },
            React.createElement(
              "a",
              {
                className: "nav-link dropdown-toggle",
                href: "#",
                role: "button",
                "data-bs-toggle": "dropdown",
                "aria-expanded": "false",
              },
              "Options"
            ),
            React.createElement(
              "ul",
              { className: "dropdown-menu mt-3" },
              React.createElement(
                "li",
                null,
                React.createElement(
                  Link,
                  {
                    className: "dropdown-item",
                    to: "checkout",
                  },
                  "Checkout"
                )
              ),
              React.createElement(
                "li",
                null,
                React.createElement(
                  Link,
                  { className: "dropdown-item", href: "#" },
                  "Another option"
                )
              ),
              React.createElement(
                "li",
                null,
                React.createElement("hr", { className: "dropdown-divider" })
              ),
              React.createElement(
                "li",
                null,
                React.createElement(
                  "a",
                  { className: "dropdown-item", href: "#" },
                  "Something else here"
                )
              )
            )
          )
        ),
        show &&
          React.createElement(CartDropdown, { handlerDropdown: handlerShow })
      )
    )
  );
};
