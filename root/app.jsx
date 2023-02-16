const App = () => {
  const currentUser = useSelector((state) => state.user.currentUser);

  return (
    <div>
      <Navbar />
      <div style={{ marginTop: "15vh" }}>
        <Route path="/" exact component={Home} />
        {currentUser ? (
          <span>
            <Route path="/shop" exact component={Shop} />
            <Route path="/checkout" exact component={Checkout} />
            <Route path="/sign-in" exact component={Home} />
            <Route path="/success" exact component={Success} />
            <Route
              path="/:category"
              exact
              render={(props) => {
                return <ShopCategory {...props} />;
              }}
            />
          </span>
        ) : (
          <span>
            <Route path="/shop" exact component={Home} />
            <Route path="/checkout" exact component={Home} />
            <Route path="/sign-in" exact component={SignPage} />
            <Route path="/success" exact component={Home} />
          </span>
        )}
      </div>
    </div>
  );
};
