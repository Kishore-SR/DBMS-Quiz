-- To Create Students table
CREATE TABLE IF NOT EXISTS Students (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    usn TEXT NOT NULL,
    score_module_1 INTEGER DEFAULT 0,
    score_module_2 INTEGER DEFAULT 0,
    score_module_3 INTEGER DEFAULT 0,
    score_module_4 INTEGER DEFAULT 0,
    score_module_5 INTEGER DEFAULT 0
);

-- To Create Questions table
CREATE TABLE IF NOT EXISTS Questions (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    module INTEGER NOT NULL,
    question TEXT NOT NULL,
    option1 TEXT NOT NULL,
    option2 TEXT NOT NULL,
    option3 TEXT NOT NULL,
    option4 TEXT NOT NULL,
    answer INTEGER NOT NULL
);

-- Creating feedback table 
CREATE TABLE IF NOT EXISTS Feedback (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    studentId INTEGER NOT NULL,
    module INTEGER NOT NULL,
    rating INTEGER NOT NULL CHECK (rating >= 1 AND rating <= 5),
    feedback TEXT NOT NULL,
    FOREIGN KEY (studentId) REFERENCES Students(id)
);


-- Insert questions for Module 1
INSERT INTO Questions (module, question, option1, option2, option3, option4, answer)
VALUES 
    (1, 'What are the characteristics of database approach?', 'High redundancy', 'High cost', 'Data independence', 'No security', 2),
    (1, 'What is a schema in database systems?', 'A representation of data relationships', 'A collection of tables', 'A data model', 'A query language', 0),
    (1, 'What is data independence?', 'Ability to change data without changing the applications', 'Ability to store data securely', 'Ability to access data remotely', 'Ability to replicate data', 0),
    (1, 'What is an ER diagram used for?', 'Data storage', 'Data modeling', 'Data processing', 'Data indexing', 1),
    (1, 'What is specialization in ER modeling?', 'Combining entities into a higher-level entity', 'Creating a new entity from existing ones', 'Creating subclasses of an entity', 'Separating entities into distinct types', 2);

-- Insert questions for Module 2
INSERT INTO Questions (module, question, option1, option2, option3, option4, answer)
VALUES 
    (2, 'What are relational model concepts?', 'Data storage', 'Data retrieval', 'Data representation', 'Data integrity', 2),
    (2, 'What are relational algebra operations used for?', 'Manipulating relational data', 'Storing relational data', 'Indexing relational data', 'Encrypting relational data', 0),
    (2, 'What is ER-to-Relational mapping used for?', 'Schema generation', 'Data transformation', 'Data normalization', 'Data migration', 1),
    (2, 'What is a constraint in relational databases?', 'Data redundancy', 'Data integrity rule', 'Data indexing', 'Data security', 1),
    (2, 'What are examples of relational algebra operations?', 'Join', 'Sort', 'Filter', 'Aggregate', 0);

-- Insert questions for Module 3
INSERT INTO Questions (module, question, option1, option2, option3, option4, answer)
VALUES 
    (3, 'What is normalization in database design?', 'Data duplication', 'Data redundancy reduction', 'Data security', 'Data integration', 1),
    (3, 'What are functional dependencies in normalization?', 'Data constraints', 'Data associations', 'Data attributes', 'Data relations', 2),
    (3, 'What is Boyce-Codd Normal Form used for?', 'Data redundancy', 'Data dependency', 'Data integration', 'Data normalization', 3),
    (3, 'What is multivalued dependency in normalization?', 'Data normalization', 'Data redundancy', 'Data integration', 'Data association', 0),
    (3, 'What are join dependencies in normalization?', 'Data integration', 'Data duplication', 'Data dependency', 'Data association', 1);

-- Insert questions for Module 4
INSERT INTO Questions (module, question, option1, option2, option3, option4, answer)
VALUES 
    (4, 'What are advanced SQL queries used for?', 'Data retrieval', 'Data modification', 'Data normalization', 'Data integration', 1),
    (4, 'What are SQL assertions used for?', 'Data validation', 'Data redundancy', 'Data integrity', 'Data indexing', 0),
    (4, 'What are views in SQL?', 'Data aggregation', 'Data representation', 'Data manipulation', 'Data abstraction', 3),
    (4, 'What is transaction processing in SQL?', 'Data concurrency', 'Data consistency', 'Data isolation', 'Data integrity', 2),
    (4, 'What is recoverability in transaction processing?', 'Data redundancy', 'Data security', 'Data isolation', 'Data consistency', 3);

-- Insert questions for Module 5
INSERT INTO Questions (module, question, option1, option2, option3, option4, answer)
VALUES 
    (5, 'What are concurrency control techniques in databases?', 'Data isolation', 'Data consistency', 'Data concurrency', 'Data redundancy', 2),
    (5, 'What is two-phase locking used for?', 'Data security', 'Data consistency', 'Data concurrency', 'Data isolation', 2),
    (5, 'What are multiversion concurrency control techniques?', 'Data concurrency', 'Data consistency', 'Data isolation', 'Data recovery', 1),
    (5, 'What is granularity in concurrency control?', 'Data locking', 'Data consistency', 'Data concurrency', 'Data isolation', 0),
    (5, 'What are NOSQL databases used for?', 'Data normalization', 'Data redundancy', 'Data integration', 'Data scalability', 3);
