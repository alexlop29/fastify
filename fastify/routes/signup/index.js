'use strict'

const Mixpanel = require('mixpanel');
const mixpanel = Mixpanel.init(process.env.MIXPANEL_TOKEN, { geolocate: false });

module.exports = async function (fastify, opts) {
  fastify.post('/', async function (request, reply) {
    const { firstName, lastName, email, id} = request.body;

    // Create a user
    mixpanel.people.set(id, {
      $first_name: firstName,
      $last_name: lastName,
      $created: (new Date()).toISOString(),
    });

    // Track the sign-up event
    mixpanel.track('Sign Up', {
      distinct_id: id,
      firstName: firstName,
      lastName: lastName,
      email: email,
    });

    return 'Successfully signed up!';
  })
}
