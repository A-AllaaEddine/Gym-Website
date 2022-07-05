import React from "react";
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51KUA4zITjDfvMiVCXw56Cyp2Z2zWREu2PKKMatIs0zQeTTJxKkvIDUnZN3pdKF5k62SAxdNpVrynrrDs6oAhLK3v00ZqSPNswE';

    const onToken = token => {
        console.log(token);
        alert('Payment Successful');
    }


    return(
        <StripeCheckout
            label = 'Pay Now'
            name = 'Gym'
            billingAddress
            shippingAddress
            description={`Your total is € ${price}`}
            amount={priceForStripe}
            panelLabel = "Pay Now"
            token={onToken}
            stripeKey={publishableKey}
        />
    )
};

export default StripeCheckoutButton;