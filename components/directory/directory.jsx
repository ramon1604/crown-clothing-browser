const Directory = () => {
  const directories = useSelector((state) => state.directories.directories);
  const isLoading = useSelector((state) => state.directories.loading);

  return (
    <div className="directories-container">
      {isLoading ? (
        <Spinner />
      ) : (
        directories.map(({ id, title, imageUrl }) => (
          <CategoryContainer key={id} title={title} image={imageUrl} />
        ))
      )}
    </div>
  );
};
