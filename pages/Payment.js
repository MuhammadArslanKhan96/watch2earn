import React from "react";
import StripeCheckout from "react-stripe-checkout";

const Payment = () => {
  const onToken = (token) => {
    console.log(token);
  };
  return (
    <div className="flex justify-center mt-[200px]">
      <StripeCheckout
        token={onToken}
        currency="Pkr"
        amount="500000"
        stripeKey="pk_test_51N828rLsZyuDOMfyhIgvmgheszEHznYd0dKyvMEF0PhsaX7xASAJHsyBLTzkXnysJevDmzTtg2u2GEaZQD7NobOe00oOgx9ZWO"
      />
    </div>
  );
};

export default Payment;
