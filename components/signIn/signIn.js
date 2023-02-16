let signInDefaultFormFields = {
  email: "",
  password: "",
};

const SignIn = () => {
  const dispatch = useDispatch();

  const [formFields, setFormFields] = useState(signInDefaultFormFields);
  const { email, password } = formFields;

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

  const logGoogleUser = async () => {
    try {
      if (globalObjects.msgConditionReturn("user already logged in", ""))
        return;
      const { user } = await globalObjects.signInWithGoogle();
      if (user) {
        updCurrentUser(user);
        checkoutHandler();
      }
    } catch (error) {
      alert(error.message);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (globalObjects.msgConditionReturn("user already logged in", "")) return;
    const { user } = await globalObjects.signInWithUserPassword(
      email,
      password
    );
    if (user) {
      setFormFields(signInDefaultFormFields);
      updCurrentUser(user);
      checkoutHandler();
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };

  if (redirect) {
    return React.createElement(Redirect, { to: `/` });
  } else {
    return React.createElement(
      "div",
      { className: `signInContainer` },
      React.createElement("h2", null, "I already have an account?"),
      React.createElement("span", null, "Sign in with your email and password"),
      React.createElement(
        "form",
        { onSubmit: handleSubmit },
        React.createElement(FormInput, {
          label: `Email`,
          type: `email`,
          required: true,
          onChange: handleChange,
          name: "email",
          value: email,
        }),
        React.createElement(FormInput, {
          label: `Password`,
          type: `password`,
          required: true,
          onChange: handleChange,
          name: "password",
          value: password,
        }),
        React.createElement(
          "div",
          { className: `buttonsContainer` },
          React.createElement(
            Button,
            { type: `submit`, btnClass: `` },
            "Sign In"
          ),
          React.createElement(
            Button,
            {
              type: `button`,
              btnClass: `googleSignIn`,
              onClick: logGoogleUser,
            },
            "Google Sign In"
          )
        )
      )
    );
  }
};
