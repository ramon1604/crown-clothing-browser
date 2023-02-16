const Directory = () => {
  const directories = useSelector((state) => state.directories.directories);
  const isLoading = useSelector((state) => state.directories.loading);

  return (
    React.createElement("div", {className: "directories-container"}, 
      isLoading ? (
        React.createElement(Spinner, null)
      ) : (
        directories.map(({ id, title, imageUrl }) => (
          React.createElement(CategoryContainer, {key: id, title: title, image: imageUrl})
        ))
      )
    )
  );
};
