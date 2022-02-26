import psycopg2

conn = psycopg2.connect(database="stock_db", user="stock", password="stock@db", host="127.0.0.1", port="5432")
print("Connect to the database successfully!")


