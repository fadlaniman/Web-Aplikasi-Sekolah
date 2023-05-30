import mysql.connector

db = mysql.connector.connect(
    host = "127.0.0.1",
    user = "root",
    password = "288498",
    database = "sma_uisu"
)

cursor = db.cursor()
delete = "DELETE FROM guru WHERE id_guru= 1"
cursor.execute(delete)
db.commit()