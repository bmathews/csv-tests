var csv = require('csv');
var fs = require('fs');
var stream = fs.createReadStream("../out.csv");

var all = [];

stream
  .pipe(csv.parse())
  .on("data", function(data){
    all.push(data);
  })
  .on("end", function(){
    console.log(all.length + " rows");
  });