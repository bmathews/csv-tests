require 'rcsv'

file = File.open('../out.csv')

all = Array.new

Rcsv.parse(file) { |row|
  all.push row
}

puts "#{all.length} rows"

file.close