const App = () => {
  const currentUser = useSelector((state) => state.user.currentUser);

  return (
    React.createElement("div", null, 
      React.createElement(Navbar, null), 
      React.createElement("div", {style: { marginTop: "15vh"}}, 
        React.createElement(Route, {path: "/", exact: true, component: Home}), 
        currentUser ? (
          React.createElement("span", null, 
            React.createElement(Route, {path: "/shop", exact: true, component: Shop}), 
            React.createElement(Route, {path: "/checkout", exact: true, component: Checkout}), 
            React.createElement(Route, {path: "/sign-in", exact: true, component: Home}), 
            React.createElement(Route, {path: "/success", exact: true, component: Success}), 
            React.createElement(Route, {
              path: "/:category", 
              exact: true, 
              render: (props) => {
                return React.createElement(ShopCategory, {...props});
              }}
            )
          )
        ) : (
          React.createElement("span", null, 
            React.createElement(Route, {path: "/shop", exact: true, component: Home}), 
            React.createElement(Route, {path: "/checkout", exact: true, component: Home}), 
            React.createElement(Route, {path: "/sign-in", exact: true, component: SignPage}), 
            React.createElement(Route, {path: "/success", exact: true, component: Home})
          )
        )
      )
    )
  );
};
