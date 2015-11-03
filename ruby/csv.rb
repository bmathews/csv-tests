require 'CSV'

all = CSV.read("../out.csv")

puts "#{all.length} rows"