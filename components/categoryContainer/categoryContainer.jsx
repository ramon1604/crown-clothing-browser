const CategoryContainer = ({ title, image }) => {
  const currentUser = useSelector((state) => state.user.currentUser);
  const dispatch = useDispatch();

  const updNavigation = () => {
    dispatch({
      payload: `${title}`,
      type: "navigation/updNavigation",
    });
  };

  return (
    <div className="categoryContainer">
      <div
        className="backgroundImage"
        style={{
          backgroundImage: `url(${image})`,
        }}
      />
      {currentUser ? (
        <div className="categoryBodyContainer">
          <Link
            className={`link`}
            to={`${title.toLowerCase()}`}
            onClick={updNavigation}
          >
            <Button type={`button`} btnClass={`inverted`}>
              Shop {title}
            </Button>
          </Link>
        </div>
      ) : null}
    </div>
  );
};
