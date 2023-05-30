import mysql.connector

db = mysql.connector.connect(
    host = "127.0.0.1",
    user = "root",
    password = "288498",
    database = "sma_uisu"
)
cursor = db.cursor()
cursor.execute("SELECT * FROM guru")
data = cursor.fetchall()
for x in data:
    print(x)

