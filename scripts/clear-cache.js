const path = require('path');
const fs = require('fs');

const cacheDirectoryPath = path.resolve(__dirname, "..", 'node_modules', ".cache");

fs.rmdir(cacheDirectoryPath,
    { recursive: true, force: true }, (err) => {

        if (err) {
            return console.log("error occurred in deleting directory", err);
        }

        console.log("Directory deleted successfully");
    });
console.log('postInstallHooks');

