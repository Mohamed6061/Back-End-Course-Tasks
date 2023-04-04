-- // create database school with the following tables using command line (
CCREATE DATABASE IF NOT EXISTS School;

USE School;
        -- // teacher table contAain fields (id, name, email, age, subject), 
TABLE if NOT EXISTS Teacher(
        id INT NOT NULL AUTO_INCREMENT,
        name VARCHAR(120) NOT NULL,
        Email VARCHAR(50) NOT NULL,
        Age INT NOT NULL,
        Subject VARCHAR(100) NOT NULL,
        PRIMARY KEY (id)
);
        -- // student table (id, name, email, age, grade), 
TABLE if NOT EXISTS student(
        id INT NOT NULL AUTO_INCREMENT,
        name VARCHAR(120) NOT NULL,
        Email VARCHAR(50) NOT NULL,
        Age INT NOT NULL,
        Subject VARCHAR(100) NOT NULL,
        PRIMARY KEY (id)
);
        -- // grades table (id, grade_name), 
CREATE TABLE IF NOT EXISTS grades (
        id INT NOT NULL AUTO_INCREMENT UNIQUE,
        grade_name VARCHAR(50) NOT NULL
);
        -- // subjects table (id, name, full_mark, fail_mark), 
CREATE TABLE IF NOT EXISTS subjects(
        id INT NOT NULL AUTO_INCREMENT UNIQUE, 
        name VARCHAR(120) NOT NULL, 
        full_mark VARCHAR(120) NOT NULL, 
        fail_mark VARCHAR(120) NOT NULL
);

        -- // exam_result table (id, name, teacher_id, student_id)
CREATE TABLE IF NOT EXISTS exam_result (
        id INT NOT NULL AUTO_INCREMENT,
        name VARCHAR(120) NOT NULL,
        teacher_id INT NOT NULL,
        student_id INT NOT NULL,
        PRIMARY KEY (id),
        FOREIGN KEY (teacher_id) REFERENCES teacher(id),
        FOREIGN KEY (student_id) REFERENCES student(id)
);
