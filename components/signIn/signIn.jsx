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
    return <Redirect to={`/`} />;
  } else {
    return (
      <div className={`signInContainer`}>
        <h2>I already have an account?</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={handleSubmit}>
          <FormInput
            label={`Email`}
            type={`email`}
            required={true}
            onChange={handleChange}
            name="email"
            value={email}
          />
          <FormInput
            label={`Password`}
            type={`password`}
            required={true}
            onChange={handleChange}
            name="password"
            value={password}
          />
          <div className={`buttonsContainer`}>
            <Button type={`submit`} btnClass={``}>
              Sign In
            </Button>
            <Button
              type={`button`}
              btnClass={`googleSignIn`}
              onClick={logGoogleUser}
            >
              Google Sign In
            </Button>
          </div>
        </form>
      </div>
    );
  }
};
