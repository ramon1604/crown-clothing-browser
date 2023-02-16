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
    return <Spinner />;
  }
  if (result === "sign-in") {
    return currentUser ? <Redirect to="/" /> : <Redirect to="/sign-in" />;
  }
  if (result === "Directory") {
    return <Directory />;
  } else {
    return categories.map((category) => {
      const cat = category.toLowerCase();
      if (result === cat) {
        return currentUser ? (
          <Redirect
            to={{
              pathname: "/" + result,
              category: category,
            }}
          />
        ) : (
          <Redirect to="/" />
        );
      }
    });
  }
};
