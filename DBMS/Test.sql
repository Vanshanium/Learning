-- CREATE OR REPLACE PROCEDURE find_topper AS
--     topper_name VARCHAR(50);
--     topper_marks NUMBER;
-- BEGIN
--     SELECT st_name, marks
--     INTO topper_name, topper_marks
--     FROM students
--     WHERE marks = (SELECT MAX(marks) FROM students);
    
--     DBMS_OUTPUT.PUT_LINE('Topper: ' || topper_name || ' with marks: ' || topper_marks);
-- END;
-- /



BEGIN 
    find_topper;

END;
/