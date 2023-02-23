const { Provider } = ReactRedux;
const { BrowserRouter } = ReactRouterDOM;
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  React.createElement(
    Provider,
    {
      store: globalObjects.store,
    },
    React.createElement(BrowserRouter, null, React.createE