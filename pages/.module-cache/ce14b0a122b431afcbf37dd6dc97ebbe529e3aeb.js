const Home = () => {
  const currentUser = useSelector((state) => state.user.currentUser);
  const isLoading = useSelector((state) => state.directories.loading);
  const directories = useSelector((state) => state.directories.directories);
  let categories = directories.map((category) => category.title);
  let links = ["success", "checkout", "shop"];
  categories = [...categories, ...links];

  const dispatch = useDispatch();

  const result = globalObjects.searchResult();

  useEffect(() => {
    if (!directories.length) {
      dispatch(globalObjects.fetchDirectories());
    }
  }, [dispatch]);

  if (isLoading && categories.length < 4) {
    return React.createElement(Spinner, null);
  }
  if (result === "sign-in") {
    return currentUser ? React.createElement(Redirect, {to: "/"}) : React.createElement(Redirect, {to: "/sign-in"});
  }
  if (result === "Directory") {
    return React.createElement(Directory, null);
  } else {
    return categories.map((category) => {
      const cat = category.toLowerCase();
      if (result === cat) {
        return currentUser ? (
          React.createElement(Redirect, {
            to: {
              pathname: "/" + result,
              category: category,
            }}
          )
        ) : (
          React.createElement(Redirect, {to: "/"})
        );
      }
    });
  }
};
