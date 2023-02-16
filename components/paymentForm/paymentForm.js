const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const [message, setMessage] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    setIsProcessing(true);
    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: `${window.location.origin}`,
      },
    });
    if (error.type === "card_error" || error.type === "validation_error") {
      setMessage(error.message);
    } else {
      setMessage("An unexpected error occured.");
    }
    setIsProcessing(false);
  };

  return (
    React.createElement("form", {id: "payment-form", onSubmit: handleSubmit}, 
      React.createElement(PaymentElement, {id: "payment-element"}), 
      React.createElement(Button, {type: `submit`, btnClass: ``, disabled: isProcessing || !stripe || !elements, id: "submit"}, 
        React.createElement("span", {id: "button-text"}, 
          isProcessing ? "Processing ... " : "Pay now"
        )
      ), 
      message && React.createElement("div", {id: "payment-message"}, message)
    )
  );
};
