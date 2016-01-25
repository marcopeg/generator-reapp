/**
 * Environment Variables
 * this files contains development settings that are shared across the team
 *
 * if you need to create local settings that will not be pushed in github
 * create an `env.local.js` and exports your custom settings as it follows:
 */

// module.exports = {
//     ENV_PROP: JSON.stringify('custom-settings'),
// };


module.exports = {
    ENV_PROP: JSON.stringify('team-settings'),
};


var fs = require('fs');
var path = require('path');

if (fs.existsSync(path.join(__dirname, 'env.local.js'))) {
    module.exports = require('./env.local');
}
