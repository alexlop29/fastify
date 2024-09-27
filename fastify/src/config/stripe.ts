import { STRIPE_API_KEY } from "../config/environment";

export const stripe = require('stripe')(STRIPE_API_KEY ?? "");


