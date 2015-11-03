import pandas

df = pandas.read_csv('../out.csv')

print("{:d} rows").format(len(df.index))