const fs = require('node:fs');

fs.readFile('biodata.txt', 'utf8', function(error, data) { // memiliki 2 parameter ( data & error )
    if(error) {
        console.error(error); // utf8 = enskripsi
    } else {
        console.log( data);
    }
});
