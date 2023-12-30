import os

HOSTNAME = 'unifinder-data.mysql.database.azure.com'
PORT = 3306
DB_NAME = 'unifinder'
USERNAME = "user1"
PASSWROD = os.environ.get("UF_DATA_MYSQL_PASS")
