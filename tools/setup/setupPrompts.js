// Define prompts for use with npm 'prompt' module in setup script
module.exports = [
  {
    name: 'MovieTime',
    description: 'Best Movies',
    pattern: /^[^._][a-z0-9\.\-_~]+$/,
    message: 'Limited to: lowercase letters, numbers, period, hyphen, ' +
    'underscore, and tilde; cannot begin with period or underscore.'
  },
  {
    name: '0.0.1',
    description: 'Version (default: 0.1.0)'
  },
  {
    name: 'Carolyn Ulfe',
    description: ''
  },
  {
    name: 'license',
    description: 'License (default: MIT)'
  },
  {
    name: 'description',
    description: 'Project description'
  }
];
