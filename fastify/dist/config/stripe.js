"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stripe = void 0;
const environment_1 = require("../config/environment");
exports.stripe = require('stripe')(environment_1.STRIPE_API_KEY ?? "");
//# sourceMappingURL=stripe.js.map