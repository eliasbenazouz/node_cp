var fs = require('fs')

file = fs.readdir(process.argv[2], function(err, files) {
  for (i = 0; i < files.length; i++) {
    if ((RegExp('\\.' + process.argv[3] + '$')).test(files[i])) {
      console.log(files[i]);
    }
  }
})