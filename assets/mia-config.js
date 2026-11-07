/* Public-only configuration. Replace the empty URL after backend deployment.
   NEVER add database credentials, CRM tokens or administrator secrets here. */
window.MIA_CONFIG = Object.assign({}, window.MIA_CONFIG || {}, {
  waitlistApiBase: ''
});
