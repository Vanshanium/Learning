
CLEAR SCREEN;

DELETE FROM student_table 
WHERE std_id IN (SELECT std_id FROM student_table WHERE class_id=12);

-- SELECT teach_id, class_id FROM subjects_table;
-- SELECT table_name FROM user_tables;