require 'fastest_csv'

rows = FastestCSV.read("../out.csv")

puts "#{rows.length} rows"