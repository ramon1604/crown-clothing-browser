const Button = ({ children, btnClass, ...otherProps }) => {
  return (
    <button className={`buttonContainer ${btnClass}`} {...otherProps}>
      {children}
    </button>
  );
};
