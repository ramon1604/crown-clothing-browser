const App = () => {
  const currentUser = useSelector((state) => state.user.currentUser);
  return /*#__PURE__*/ React.createElement(
    "div",
    null,
    /*#__PURE__*/ React.createElement(Navbar, null),
    /*#__PURE__*/ React.createElement(
      "div",
      {
        style: {
          marginTop: "15vh",
        },
      },
      /*#__PURE__*/ React.createElement(Route, {
        path: "/",
        exact: true,
        component: Home,
      }),
      currentUser
        ? /*#__PURE__*/ React.createElement(
            "span",
            null,
            /*#__PURE__*/ React.createElement(Route, {
              path: "/shop",
              exact: true,
              component: Shop,
            }),
            /*#__PURE__*/ React.createElement(Route, {
              path: "/checkout",
              exact: true,
              component: Checkout,
            }),
            /*#__PURE__*/ React.createElement(Route, {
              path: "/sign-in",
              exact: true,
              component: Home,
            }),
            /*#__PURE__*/ React.createElement(Route, {
              path: "/success",
              exact: true,
              component: Success,
            }),
            /*#__PURE__*/ React.createElement(Route, {
              path: "/:category",
              exact: true,
              render: (props) => {
                return /*#__PURE__*/ React.createElement(ShopCategory, props);
              },
            })
          )
        : /*#__PURE__*/ React.createElement(
            "span",
            null,
            /*#__PURE__*/ React.createElement(Route, {
              path: "/shop",
              exact: true,
              component: Home,
            }),
            /*#__PURE__*/ React.createElement(Route, {
              path: "/checkout",
              exact: true,
              component: Home,
            }),
            /*#__PURE__*/ React.createElement(Route, {
              path: "/sign-in",
              exact: true,
              component: SignPage,
            }),
            /*#__PURE__*/ React.createElement(Route, {
              path: "/success",
              exact: true,
              component: Home,
            })
          )
    )
  );
};
