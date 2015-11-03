var faker = require('faker');
var fs = require('fs');

var wstream = fs.createWriteStream('./out.csv');

for (var i = 0; i < parseInt(process.argv[2]); i++) {
  wstream.write(faker.name.findName());
  wstream.write(',');
  wstream.write(faker.internet.email());
  wstream.write('\n')
}

wstream.end();