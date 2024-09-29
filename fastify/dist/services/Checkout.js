"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Checkout = void 0;
const config_1 = require("../config");
const DOMAIN = "http://localhost:3000";
class Checkout {
    constructor() { }
    async create_checkout_session(lookup_key) {
        const prices = await this.read_prices(lookup_key);
        const session = await config_1.stripe.checkout.sessions.create({
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
    }
    ;
    async create_portal_session(session_id) {
        const checkoutSession = await config_1.stripe.checkout.sessions.retrieve(session_id);
        const session = await config_1.stripe.billingPortal.sessions.create({
            customer: checkoutSession.customer,
            return_url: DOMAIN,
        });
        return session;
    }
    ;
    async create_webhook(body, event, signature) {
        if (config_1.STRIPE_WEBHOOK_SECRET) {
            try {
                event = config_1.stripe.webhooks.constructEvent(body, signature, config_1.STRIPE_WEBHOOK_SECRET);
            }
            catch (err) {
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
                break;
            case 'customer.subscription.deleted':
                subscription = event.data.object;
                status = subscription.status;
                console.log(`Subscription status is ${status}.`);
                break;
            case 'customer.subscription.created':
                subscription = event.data.object;
                status = subscription.status;
                console.log(`Subscription status is ${status}.`);
                break;
            case 'customer.subscription.updated':
                subscription = event.data.object;
                status = subscription.status;
                console.log(`Subscription status is ${status}.`);
                break;
            case 'entitlements.active_entitlement_summary.updated':
                subscription = event.data.object;
                console.log(`Active entitlement summary updated for ${subscription}.`);
                break;
            default:
                console.log(`Unhandled event type ${event.type}.`);
        }
        return "success";
    }
    async read_prices(lookup_key) {
        return await config_1.stripe.prices.list({
            lookup_keys: [lookup_key],
            expand: ["data.product"],
        });
    }
    ;
}
exports.Checkout = Checkout;
//# sourceMappingURL=Checkout.js.map