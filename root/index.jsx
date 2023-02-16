const { Provider } = ReactRedux;
const { BrowserRouter } = ReactRouterDOM;

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={globalObjects.store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
