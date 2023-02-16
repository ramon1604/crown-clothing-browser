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
    React.createElement("div", {className: "categoryContainer"}, 
      React.createElement("div", {
        className: "backgroundImage", 
        style: {
          backgroundImage: `url(${image})`,
        }}
      ), 
      currentUser ? (
        React.createElement("div", {className: "categoryBodyContainer"}, 
          React.createElement(Link, {
            className: `link`, 
            to: `${title.toLowerCase()}`, 
            onClick: updNavigation
          }, 
            React.createElement(Button, {type: `button`, btnClass: `inverted`}, 
              "Shop ", title
            )
          )
        )
      ) : null
    )
  );
};
