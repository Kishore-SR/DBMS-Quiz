# DBMS Quiz App

This project is a quiz application built using HTML, CSS, JavaScript for the frontend, and Node.js with SQLite for the backend and database management. The application allows students to take quizzes on different modules, view their scores, and provide feedback.

<!-- [![Project Link](https://img.shields.io/badge/Project%20Link-37a779?style=for-the-badge)](https://dbms.web.app/) -->

## Key Features

- **Quiz Functionality:** Allows students to take quizzes on different modules.
- **Score Management:** Stores and retrieves quiz scores from the database.
- **Feedback System:** Collects and stores feedback from students.
- **Responsive Design:** Ensures a good user experience on both desktop and mobile devices.

## Technologies Used
[![HTML5](https://img.shields.io/badge/html5%20-%23E34F26.svg?&style=for-the-badge&logo=html5&logoColor=white)](/)
[![CSS3](https://img.shields.io/badge/CSS3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)](/)
[![JavaScript](https://img.shields.io/badge/javascript%20-%23323330.svg?&style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)](/)
[![SQLite](https://img.shields.io/badge/SQLite-%2307405e.svg?style=for-the-badge&logo=sqlite&logoColor=white)](/)
[![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)](/)


## How to Run ⚙

1. **Clone the Repository:**  
   ```bash
   git clone https://github.com/Kishore-SR/DBMS-Quiz.git
2. **Install Dependencies:**  
Ensure you have Node.js and SQLite installed.
    ```bash
    $ pip install sqlite3
3. **Navigate to Project Directory:**  
    ```bash
   $ cd DBMS-Quiz
4. **Run the Application:**  
    ```bash
    $ node server.js
5. **Access the Website:**  
Open your web browser and go to [http://localhost:3000/](http://localhost:3000/).

## API Endpoints

### Save Student

- **POST** `/api/saveStudent`
  - **Request Body:**
    ```json
    {
      "name": "Student Name",
      "usn": "Student USN"
    }
    ```
  - **Response Body:**
    ```json
    {
      "studentId": 1
    }
    ```

### Fetch Questions

- **GET** `/api/questions/:module`
  - **Response Body Example:**
    ```json
    [
      {
        "id": 1,
        "question": "Sample question 1?",
        "options": ["Option A", "Option B", "Option C", "Option D"],
        "correctAnswer": 0
      },
      {
        "id": 2,
        "question": "Sample question 2?",
        "options": ["Option A", "Option B", "Option C", "Option D"],
        "correctAnswer": 1
      },
    ]
    ```

### Save Score

- **POST** `/api/saveScore`
  - **Request Body:**
    ```json
    {
      "studentId": 1,
      "module": 1,
      "score": 5
    }
    ```
  - **Response Body:**
    ```json
    {
      "message": "Score saved successfully"
    }
    ```

### Save Feedback

- **POST** `/api/saveFeedback`
  - **Request Body:**
    ```json
    {
      "studentId": 1,
      "module": 1,
      "rating": 5,
      "feedback": "Thank you!"
    }
    ```
  - **Response Body:**
    ```json
    {
      "message": "Feedback saved successfully"
    }
    ```


## Screenshots
##### **Student Registration:** Enter name and USN
![image](https://github.com/user-attachments/assets/64ad709f-5b1b-4eaa-9dfc-ef0565f83dec)

##### **Module Selection:** Choose from 5 modules
![image](https://github.com/user-attachments/assets/913b2819-6c14-474a-9d0c-0535a614990b)

##### **Questions Database:** Questions are fetched from database
![image](https://github.com/user-attachments/assets/bb89245c-7176-4633-a564-373d06593ef6)

##### **Quiz Interface:** Questions with options
![image](https://github.com/user-attachments/assets/d04cfa3a-489a-4df4-a1a7-bd4160eb56b3)

##### **Feedback Form:** 5-star rating and comments 
![image](https://github.com/user-attachments/assets/1450626f-db01-4f98-8b82-01832952bfc3)

##### **Students Database:** Student details gets updated automatically
![image](https://github.com/user-attachments/assets/ce5e2d6f-d755-41a4-bf9e-4a3fcf9b1db0)

##### **Feedback Database:** Feedback will be stored separately
![image](https://github.com/user-attachments/assets/3a2c2518-ef41-4b66-a39c-489cb8aa0b1f)

## Connect Here
[![LinkedIn](https://img.shields.io/badge/linkedin%20-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/Kishore-SR) &nbsp;
[![YouTube](https://img.shields.io/badge/Youtube-%23FF0000.svg?style=for-the-badge&logo=YouTube&logoColor=white)](https://www.youtube.com/@Kishore-SR) &nbsp;
[![Gmail](https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white&color=red)](mailto:kishoresr47@gmail.com)

