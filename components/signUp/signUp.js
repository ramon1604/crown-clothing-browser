let signUpDefaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUp = () => {
  const dispatch = useDispatch();

  const [formFields, setFormFields] = useState(signUpDefaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const [redirect, setRedirect] = useState(false);

  const checkoutHandler = async () => {
    if (!redirect) {
      await setRedirect(true);
    }
  };

  const updCurrentUser = (value) => {
    dispatch({
      payload: value,
      type: "user/updUser",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (globalObjects.msgConditionReturn("user already logged in", "")) return;
    if (password !== confirmPassword) {
      alert("password and confirmPassword do not match");
      return;
    }
    const { user } = await globalObjects.signUpUserWithEmailAndPassword(email, password);
    if (user) {
      await globalObjects.createUserDocumentFromAuth(user, displayName);
      setFormFields(signUpDefaultFormFields);
      updCurrentUser(user);
      checkoutHandler();
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };

  if (redirect) {
    return React.createElement(Redirect, {to: `/`});
  } else {
    return (
      React.createElement("div", {className: `signUpContainer`}, 
        React.createElement("h2", null, "Don't have an account?"), 
        React.createElement("span", null, "Sign up with your email and password"), 
        React.createElement("form", {onSubmit: handleSubmit}, 
          React.createElement(FormInput, {
            label: `Display Name`, 
            type: `text`, 
            required: true, 
            onChange: handleChange, 
            name: "displayName", 
            value: displayName}
          ), 
          React.createElement(FormInput, {
            label: `Email`, 
            type: `email`, 
            required: true, 
            onChange: handleChange, 
            name: "email", 
            value: email}
          ), 
          React.createElement(FormInput, {
            label: `Password`, 
            type: `password`, 
            required: true, 
            onChange: handleChange, 
            name: "password", 
            value: password}
          ), 
          React.createElement(FormInput, {
            label: `Confirm Password`, 
            type: `password`, 
            required: true, 
            onChange: handleChange, 
            name: "confirmPassword", 
            value: confirmPassword}
          ), 
          React.createElement(Button, {type: `submit`, btnClass: ``}, 
            "Sign Up"
          )
        )
      )
    );
  }
};
