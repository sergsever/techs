import psycopg2
from models import tech
from models.tech import Tech

def getTechs():
	techs = []
	connection = psycopg2.connect(database="postgres", user="postgres", password="ssl-2000", host="localhost")
	cursor = connection.cursor()
	cursor.execute("select id, title,rate from techs.techs;")
	for row in cursor:
		#print( "row: ", row[0]) 
		tch = Tech(id=row[0], title=row[1], rate=row[2])
		techs.append(tch)

	return techs

def getTech(id):
	connection = psycopg2.connect(database="postgres", user="postgres", password="ssl-2000", host="localhost")
	cursor = connection.cursor()
	cursor.execute("select id, title,rate from techs.techs where id = %s;", (id,))
	row = cursor.fetchone()
	print('dao getTech row:', row)
	atech = Tech(id=row[0], title=row[1], rate=row[2])
	
	print('dao getTech atech: ', atech); 
	#tech.id = row[0]
	#tech.title = row[1]
	#tech.rate = row[2]
	return atech


def saveTech(id: int, title: str, rate: float):
		try:
			print('saveTech: ', id, ',', rate)
			connection = psycopg2.connect(database="postgres", user="postgres", password="ssl-2000", host="localhost")
			with connection, connection.cursor() as cursor:
				cursor.execute("update techs.techs set title=%s, rate=%s  where id = %s;", 
				  (title, rate, id))
				connection.commit()
				cursor.close()
			return True
		except Exception as e:
			print('exception in saveTech: ', e )
			return False

	


