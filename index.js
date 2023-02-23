import("./store/store.js").then((mod) => {
  const { Provider } = ReactRedux;
  const { BrowserRouter } = ReactRouterDOM;
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(
    /*#__PURE__*/ React.createElement(
      Provider,
      {
        store: mod.store,
      },
      /*#__PURE__*/ React.createElement(
        BrowserRouter,
        null,
        /*#__PURE__*/ React.createElement(App, null)
      )
    )
  );
});
