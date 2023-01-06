For the Stripe Payment Element to render appropriately the Elements wrapper component needs to be initialized before the nested Form and PaymentElement are attempted to be rendered. For this reason and others the PaymentForm was broken out into a separate component. Since the PaymentElement is dependent upon the Elements wrapper component in order to render we are unable to test the rendering of the PaymentForm component at this time.

Error received:
"Could not find Elements context; You need to wrap the part of your app that calls useStripe() in an <Elements> provider."
