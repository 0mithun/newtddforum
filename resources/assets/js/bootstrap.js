window._ = require("lodash");

import moment from "moment";
window.moment = moment;

/**
 * We'll load jQuery and the Bootstrap jQuery plugin which provides support
 * for JavaScript based Bootstrap features such as modals and tabs. This
 * code may be modified to fit the specific needs of your application.
 */

window.$ = window.jQuery = require("jquery");

require("bootstrap-sass");

/**
 * Vue is a modern JavaScript library for building interactive web interfaces
 * using reactive data binding and reusable components. Vue's API is clean
 * and simple, leaving you to focus on building your next great project.
 */

window.Vue = require("vue");

// import InstantSearch from 'vue-instantsearch';
// Vue.use(InstantSearch);

let authorizations = require("./authorizations");

Vue.prototype.authorize = function(...params) {
  if (!window.App.signedIn) return false;

  if (typeof params[0] === "string") {
    return authorizations[params[0]](params[1]);
  }

  return params[0](window.App.user);
};

Vue.prototype.signedIn = window.App.signedIn;

/**
 * We'll load the axios HTTP library which allows us to easily issue requests
 * to our Laravel back-end. This library automatically handles sending the
 * CSRF token as a header based on the value of the "XSRF" token cookie.
 */

window.axios = require("axios");

window.axios.defaults.headers.common = {
  "X-CSRF-TOKEN": window.App.csrfToken,
  "X-Requested-With": "XMLHttpRequest",
};

window.events = new Vue();

window.flash = function(message, level = "success") {
  window.events.$emit("flash", { message, level });
};

window.abbreviate = require("number-abbreviate");

import Echo from "laravel-echo";

window.Pusher = require("pusher-js");

// window.Echo = new Echo({
//   broadcaster: "pusher",
//   key: process.env.MIX_PUSHER_APP_KEY,
//   wsHost: window.location.hostname,
//   wsPort: 80,
//   wssPort: 443,
//   // wssPort: 6001,
//   disableStats: true,
//   encrypted: true,
//   enabledTransports: ["ws", "wss"],
//   cluster: process.env.MIX_PUSHER_APP_CLUSTER,
// });

window.Echo = new Echo({
  broadcaster: "pusher",
  key: process.env.MIX_PUSHER_APP_KEY,
  cluster: process.env.MIX_PUSHER_APP_CLUSTER,
  wsHost: window.location.hostname,
  wsPort: 6001,
  wssPort: 6001,
  disableStats: true,
  enabledTransports: ["ws", "wss"],
});

// window.Echo = new Echo({
//   broadcaster: "pusher",
//   key: process.env.MIX_PUSHER_APP_KEY,
//   wsHost: window.location.host,
//   wsPort: 80,
//   wssPort: 443,
//   disableStats: true,
//   enabledTransports: ["ws", "wss"],
//   cluster: process.env.MIX_PUSHER_APP_CLUSTER,
// });
