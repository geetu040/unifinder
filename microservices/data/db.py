from db_config import *
import mysql.connector

# Create the MySQL connection
connection = mysql.connector.connect(
	host=HOSTNAME,
	port=PORT,
	user=USERNAME,
	password=PASSWROD,
	database=DB_NAME
)
cursor = connection.cursor()

def search(user_query):
	limit = 30
	cols = ['program', 'specialization', 'discipline', 'degree', 'level', 'description', 'institute', 'address', 'country', 'logo', 'url']
	cols_in_query = ", ".join(cols)
	user_query = user_query.lower()

	sql_query = f"""

	SELECT {cols_in_query}
	FROM unified
	WHERE
		LOWER(
			CONCAT(
				{cols_in_query}
			)
		) LIKE "%{user_query}%"
	ORDER BY RAND()
	LIMIT {limit}
	;

	"""

	cursor.execute(sql_query)
	results = cursor.fetchall()
	results = [dict(zip(cols, result)) for result in results]
	return results

def get_distinct_col(col):
	limit = 20
	query = f"SELECT DISTINCT {col} FROM unified LIMIT {limit}"
	cursor.execute(query)
	result = cursor.fetchall()
	result = [i[0] for i in result]
	return result
