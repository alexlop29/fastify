import { DOMAIN, STRIPE_WEBHOOK_SECRET, stripe } from "../config";

/*
  NOTE: (alopez) To reduce the scope of the project, we are merely implementing a basic
  subscription workflow. Additional features will be included, such as improved error handling,
  before moving to production.
*/
export class Checkout {
  constructor() {}

  async create_checkout_session(lookup_key: string) {
    const prices = await this.read_prices(lookup_key);
    console.log(`alex look at the prices`, prices);
    const session = await stripe.checkout.sessions.create({
      billing_address_collection: "auto",
      line_items: [
        {
          price: prices.data[0].id,
          quantity: 1,
        },
      ],
      mode: "subscription",
      success_url: `${DOMAIN}/?success=true&session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${DOMAIN}?canceled=true`,
    });
    return session;
  };

  async create_portal_session(session_id: string) {
    const checkoutSession = await stripe.checkout.sessions.retrieve(session_id);
    const session = await stripe.billingPortal.sessions.create({
      customer: checkoutSession.customer,
      return_url: DOMAIN,
    });
    return session;
  };

  async create_webhook(body: any, event: any, signature: any) {
    if (STRIPE_WEBHOOK_SECRET) {
      try {
        event = stripe.webhooks.constructEvent(
          body,
          signature,
          STRIPE_WEBHOOK_SECRET
        );
      } catch (err: any) {
        console.log(`⚠️  Webhook signature verification failed.`, err.message);
        return `Webhook Error: ${err.message}`;
      }
      return event;
    }
    let subscription;
    let status;
    switch (event.type) {
      case 'customer.subscription.trial_will_end':
        subscription = event.data.object;
        status = subscription.status;
        console.log(`Subscription status is ${status}.`);
        // Then define and call a method to handle the subscription trial ending.
        // handleSubscriptionTrialEnding(subscription);
        break;
      case 'customer.subscription.deleted':
        subscription = event.data.object;
        status = subscription.status;
        console.log(`Subscription status is ${status}.`);
        // Then define and call a method to handle the subscription deleted.
        // handleSubscriptionDeleted(subscriptionDeleted);
        break;
      case 'customer.subscription.created':
        subscription = event.data.object;
        status = subscription.status;
        console.log(`Subscription status is ${status}.`);
        // Then define and call a method to handle the subscription created.
        // handleSubscriptionCreated(subscription);
        break;
      case 'customer.subscription.updated':
        subscription = event.data.object;
        status = subscription.status;
        console.log(`Subscription status is ${status}.`);
        // Then define and call a method to handle the subscription update.
        // handleSubscriptionUpdated(subscription);
        break;
      case 'entitlements.active_entitlement_summary.updated':
        subscription = event.data.object;
        console.log(`Active entitlement summary updated for ${subscription}.`);
        // Then define and call a method to handle active entitlement summary updated
        // handleEntitlementUpdated(subscription);
        break;
      default:
        // Unexpected event type
        console.log(`Unhandled event type ${event.type}.`);
    }
    return "success";
  }

  async read_prices(lookup_key: string) {
    return await stripe.prices.list({
      lookup_keys: [lookup_key],
      expand: ["data.product"],
    });
  };
}
