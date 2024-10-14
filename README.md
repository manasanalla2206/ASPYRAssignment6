Here's a **README.md** file for your project, which covers both the **frontend** (React) and **backend** (Flask) parts of the application. You can include this in your GitHub repository to provide clear instructions for anyone who wants to understand or run your project.

---

# **Client Management System**

This project is a **UI-based system** where users can view and manage client data. It is built with **React** for the frontend and **Flask** for the backend, with **MySQL** as the database to store the client details. The project allows users to interact with client data, which is displayed in a form-based interface.

## **Table of Contents**
- [Project Overview](#project-overview)
- [Technologies Used](#technologies-used)
- [Setup Instructions](#setup-instructions)
  - [Backend Setup](#backend-setup)
  - [Frontend Setup](#frontend-setup)
  - [Running the Application](#running-the-application)
- [Contributors](#contributors)

---

## **Project Overview**

The task was to build a system where users can view and manage client data using a form interface. The system fetches client data from a MySQL database and displays it in the frontend where users can view and potentially edit client details.

---

## **Technologies Used**

### **Frontend**:
- **React**: A JavaScript library for building user interfaces.
- **Axios**: A promise-based HTTP client used to make API requests to the backend.
- **Styled-components**: A library for styling React components using tagged template literals.

### **Backend**:
- **Flask**: A lightweight Python web framework used for building the backend API.
- **Flask-MySQLdb**: A Flask extension used to connect to the MySQL database.
- **Flask-CORS**: A Flask extension to allow cross-origin requests from the frontend.
- **MySQL**: The relational database used to store and manage client data.

---

## **Setup Instructions**

### **Backend Setup**

1. **Clone the repository** and navigate to the backend directory:
   ```bash
   git clone https://github.com/manasanalla2206/ASPYRAssignment.git
   cd project-repo/backend
   ```

2. **Create a virtual environment** and activate it:
   ```bash
   python3 -m venv venv
   source venv/bin/activate
   ```

3. **Install the required Python packages**:
   ```bash
   pip install Flask Flask-MySQLdb Flask-CORS
   ```

4. **Set up the MySQL database**:
   - Create a database called `ASPYR1` (or use the one provided in the code).
   - Create the necessary tables (`OPT_Party1`, `OPT_Address`, and `SYS_State`) as per the SQL schema provided in the project files.
   - Insert sample data for testing purposes.

5. **Configure the database settings** in `app.py`:
   ```python
   app.config['MYSQL_HOST'] = 'localhost'
   app.config['MYSQL_USER'] = 'root'
   app.config['MYSQL_PASSWORD'] = 'yourpassword'
   app.config['MYSQL_DB'] = 'ASPYR1'
   ```

6. **Run the Flask server**:
   ```bash
   python app.py
   ```

   The backend will start on `http://localhost:5000`.

---

### **Frontend Setup**

1. **Navigate to the frontend directory**:
   ```bash
   cd ../frontend
   ```

2. **Install the required dependencies**:
   ```bash
   npm install
   ```

3. **Start the React development server**:
   ```bash
   npm start
   ```

   The frontend will be available on `http://localhost:3000`.

---

## **Running the Application**

Once both the backend and frontend are set up and running:

1. Navigate to `http://localhost:3000` to view the React frontend.
2. The frontend will make a request to the Flask API on `http://localhost:5000/getClients` to fetch and display client data.



## **Contributors**

The project was developed collaboratively by:
- **Nalla Manasa**
- **Syed Tanzeel Adnan** 
- **Sree Udhaini** 

