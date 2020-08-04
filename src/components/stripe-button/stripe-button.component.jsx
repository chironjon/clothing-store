import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_51HCTdTLfdm8VnYZET1mbqLe8RzgUWE2Mu7cza6nep7O0NvqGr0hr7U8YyiXM13sYq5eRjVop2UylDvhQqTxSc8L2000YRZptOy';

  const onToken = token => {
    console.log(token);
    alert('Payment Successful')
  }
  return (
    <StripeCheckout
      label='Pay Now'
      name='Crwn Clothing Ltd.'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}  
    />
  )
}

export default StripeCheckoutButton;