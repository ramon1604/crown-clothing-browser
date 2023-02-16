const FormInput = ({ label, ...otherProps }) => {
  return React.createElement(
    "div",
    { className: `group` },
    React.createElement("input", {
      className: `formInput`,
      ...otherProps,
    }),
    label &&
      React.createElement(
        "label",
        {
          className: `${
            otherProps.value.length ? "shrink" : ""
          } formInputLabel`,
        },
        label
      )
  );
};
