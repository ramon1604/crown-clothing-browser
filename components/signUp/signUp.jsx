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
    return <Redirect to={`/`} />;
  } else {
    return (
      <div className={`signUpContainer`}>
        <h2>Don't have an account?</h2>
        <span>Sign up with your email and password</span>
        <form onSubmit={handleSubmit}>
          <FormInput
            label={`Display Name`}
            type={`text`}
            required={true}
            onChange={handleChange}
            name="displayName"
            value={displayName}
          />
          <FormInput
            label={`Email`}
            type={`email`}
            required
            onChange={handleChange}
            name="email"
            value={email}
          />
          <FormInput
            label={`Password`}
            type={`password`}
            required
            onChange={handleChange}
            name="password"
            value={password}
          />
          <FormInput
            label={`Confirm Password`}
            type={`password`}
            required
            onChange={handleChange}
            name="confirmPassword"
            value={confirmPassword}
          />
          <Button type={`submit`} btnClass={``}>
            Sign Up
          </Button>
        </form>
      </div>
    );
  }
};
