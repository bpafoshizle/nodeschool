module.exports = filterFilesInDir;

function filterFilesInDir(dir, ext, cb) {
    var fs = require('fs');
    var p = require('path');
    fs.readdir(dir,(err, files) => {
       if(err) {
           return cb(err);
       }
       filteredFiles = files.filter((path) => {
           return path.endsWith("."+ext);
       });
       cb(null, filteredFiles);
   });
}