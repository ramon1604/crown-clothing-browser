const loadStripe = function (publishableKey) {
  return Stripe(publishableKey);
};

const Payment = () => {
  const { total } = useSelector((state) => state.cart.cart);
  const [stripePromise, setStripePromise] = useState(null);
  const [clientSecret, setClientSecret] = useState("");

  const paymentHandler = async (e) => {
    e.target.style.display = "none";
    await fetch(
      "https://shopping-cart-stripe-sample.ramoncott.com/php/config.php",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then(async (r) => {
      const { publishableKey } = await r.json();
      setStripePromise(loadStripe(publishableKey));
    });
    await fetch(
      "https://shopping-cart-stripe-sample.ramoncott.com/php/create-payment-intent.php",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        //body: JSON.stringify({ total: total * 100 }), //Use for NODEJS server
        body: JSON.stringify(total * 100), //Use for PHP server
      }
    ).then(async (response) => {
      const clientSecretKey = await response.json();
      var { clientSecret } = clientSecretKey;
      setClientSecret(clientSecret);
    });
  };

  return React.createElement(
    "div",
    null,
    total
      ? React.createElement(
          Button,
          { type: `button`, btnClass: ``, onClick: paymentHandler, style: {margin: "0, 2vw"} },
          "Enable Payment Form"
        )
      : null,
    clientSecret &&
      stripePromise &&
      React.createElement(
        Elements,
        { stripe: stripePromise, options: { clientSecret } },
        React.createElement(PaymentForm, null)
      )
  );
};
