# Delhi MCD Complaint Portal

## Description
The demo link of a project https://priyanshi-ops.github.io/Delhi-MCD-Complaint-portal/. The objective of this project is to provide an online platform for citizens of Delhi to register, track, and manage complaints related to Municipal Corporation of Delhi (MCD) services such as:
-Garbage collection
-Street light issue
-Waterlogging
-Road damage
-Stray Animals
-Sewage/Drainage

## Tech Stack
- Java
- JavaScript
- Springboot
- Intellij IDE
- React js
- Rest API
- Mysql
- GitHub

##  Screenshots

---

###  Signup Page
<img src="myproject/src/assets/images/Signupss.png" width="700" alt="Signup Page"/>

---

###  Login Page
<img src="myproject/src/assets/images/loginss.png" width="700" alt="Login Page"/>

---

###  Data Persistence
Login information is securely captured and stored in the **`user`** table within the **`auth_db`** MySQL database, maintaining data integrity and accessibility for authentication purposes.

<img src="myproject/src/assets/images/Loginsave sql.png" width="700" alt="Login Data Saved in Database"/>

---

###  Smart Form Pre-filling
Upon successful authentication, the user's credentials — including username and email address — are automatically retrieved from the session and dynamically populated into the Complaint Form, ensuring a flawless and efficient user experience.

<img src="myproject/src/assets/images/Complaint form.png" width="700" alt="Complaint Form with Pre-filled Data"/>

---

###  Complaint Submission & Persistence
Complaint form submissions are securely persisted to the **`complaints`** table within the **`auth_db`** MySQL database, ensuring reliable data storage and traceability.

<img src="myproject/src/assets/images/complaint save sql.png" width="700" alt="Complaint Data Saved in Database"/>

##  Getting Started

Follow the steps below to set up and run the project locally.

##  Backend Setup (Spring Boot)

1. **Clone the repository** and open it in IntelliJ IDEA or any IDE of your choice.

2. **Navigate to the main application file** located at:
```
   src/main/java/
```
Run the file named **`LoginSignupComplaintBackendApplication.java`** — this is the entry point of the Spring Boot application, annotated with `@SpringBootApplication`.

3. **Set up the MySQL database** by opening MySQL Workbench and creating a new database:
```sql
   CREATE DATABASE auth_db;
```

4. **Create the required tables** inside `auth_db`:
    - **`users`** — stores registered user information.
    - **`complaints`** — stores submitted complaint records.


