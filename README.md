1.5 million parsed and counted

```
λ node » time node fast-csv.js                                                                      
4.29s
```

```
λ go » time go run encoding-csv.go                                                                  
3.58s
```

```
λ ruby » time ruby builtin-csv.rb                                                                           
8.18s
```

```
λ ruby » time ruby rcsv.rb                                                                          
1.24s
```

```
λ python » time python builtin-csv.py
2.46s
```

```
λ python » time python panda-csv.py
1.82s
```
