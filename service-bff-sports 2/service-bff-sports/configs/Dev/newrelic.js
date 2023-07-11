/**
 * New Relic agent configuration.
 *
 * See lib/config.defaults.js in the agent distribution for a more complete
 * description of configuration variables and their potential values.
 */
exports.config = {
  /**
   * Array of application names.
   */
  app_name: ['Dev - Service BFF Sports'],

  license_key: '',

  agent_enabled: false,
  distributed_tsports: { enabled: false },
  logging: {
    /**
     * Level at which to log. 'trace' is most useful to New Relic when diagnosing
     * issues with the agent, 'info' and higher will impose the least overhead on
     * production applications.
     */
    level: 'info',
  },
  error_collector: {
    ignore_status_codes: [404, 412, 400, 422, 409],
  },
  labels: 'Application:service-bff-sports;Environment:Dev',
};
