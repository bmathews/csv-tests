var fs = require('fs');
var csv = require('fast-csv');
var stream = fs.createReadStream("../out.csv");

var all = [];

var csvStream = csv()
  .on("data", function(data){
    all.push(data);
  })
  .on("end", function(){
    console.log(all.length + " rows");
  });

stream.pipe(csvStream);