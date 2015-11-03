import csv

r = csv.reader(open("../out.csv"))


rows = [] 
for row in r:
  rows.append(str(row))

print("{:d} rows").format(len(rows))
