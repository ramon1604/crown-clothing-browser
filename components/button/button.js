const Button = ({ children, btnClass, ...otherProps }) => {
  return React.createElement(
    "button",
    {
      className: `buttonContainer ${btnClass}`,
      ...otherProps,
    },
    children
  );
};
