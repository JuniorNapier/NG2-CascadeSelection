var path = require('path');
var glob = require('glob');

/*
 * initializes all models and sources them as .model-name
 */
glob(path.join(__dirname, '**/*.js'), function(err, files) {
    if (err) {
        console.log("Error: while loading models.")
    } else {
        files.forEach(function(filename) {
            var file = path.basename(filename);
            if (file !== 'index.js') {
                exports[filename] = require(filename);
            }
        });
    }
});