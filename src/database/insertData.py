import mysql.connector

db = mysql.connector.connect(
    host = "127.0.0.1",
    user = "root",
    password = "288498",
    database = "sma_uisu"
)

cursor = db.cursor()
insert = "INSERT INTO guru(id_guru,nip,nama,jabatan) VALUES (1,22751,'Mauluddin Siregar','Guru')"
cursor.execute("SELECT * FROM guru")
data = cursor.fetchall()

for x in data:
    if x != x:
        print("Tidak Valid")
    else:
        cursor.execute(insert)
        db.commit()
