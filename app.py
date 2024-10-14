from flask import Flask, jsonify
from flask_cors import CORS
import mysql.connector

app = Flask(__name__)
CORS(app)

# MySQL Configuration
app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = 'nalla@2206'
app.config['MYSQL_DB'] = 'ASPYR1'

# Connect to MySQL
def get_db_connection():
    connection = mysql.connector.connect(
        host=app.config['MYSQL_HOST'],
        user=app.config['MYSQL_USER'],
        password=app.config['MYSQL_PASSWORD'],
        database=app.config['MYSQL_DB']
    )
    return connection

@app.route('/getClients', methods=['GET'])
def get_clients():
    connection = get_db_connection()
    cursor = connection.cursor()
    query = """
    SELECT 
        p.PTY_ID AS PartyID, 
        p.PTY_FirstName AS FirstName, 
        p.PTY_LastName AS LastName, 
        p.PTY_Phone AS Phone, 
        p.PTY_SSN AS SSN, 
        a.Add_Line1 AS AddressLine1, 
        a.Add_Line2 AS AddressLine2, 
        a.Add_City AS City, 
        a.Add_Zip AS ZipCode, 
        s.Stt_Name AS StateName
    FROM OPT_Party1 p
    JOIN OPT_Address a ON p.PTY_ID = a.Add_PartyID
    JOIN SYS_State s ON a.Add_State = s.Stt_ID
    """
    cursor.execute(query)
    clients = cursor.fetchall()
    json_result = [
        {
            'id': row[0], 
            'firstName': row[1], 
            'lastName': row[2],
            'phone': row[3],
            'ssn': row[4],
            'addressLine1': row[5],
            'addressLine2': row[6],
            'city': row[7],
            'zipCode': row[8],
            'stateName': row[9]
        } for row in clients
    ]
    cursor.close()
    connection.close()
    return jsonify(json_result)

if __name__ == '__main__':
    app.run(debug=True)
