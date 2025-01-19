CREATE TABLE students (
    student_id NUMBER PRIMARY KEY,
    student_name VARCHAR2(50),
    marks NUMBER
);

INSERT INTO students VALUES (1, 'Alice', 95);
INSERT INTO students VALUES (2, 'Bob', 89);
INSERT INTO students VALUES (3, 'Charlie', 97);

COMMIT;



DECLARE

    pika INT;

BEGIN

    pika := 0;

    LOOP
        DBMS_OUTPUT.PUT_LINE(pika);
            pika := pika + 1;
    EXIT WHEN pika > 5;
    END LOOP;

END;
/