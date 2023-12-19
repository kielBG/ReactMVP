CREATE TABLE journal (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    firstquestion VARCHAR(500) NOT NULL,
    secondquestion VARCHAR(500) NOT NULL,
    thirdquestion VARCHAR(500) NOT NULL,
    moodrating INT NOT NULL,
    addcomments VARCHAR(500) NOT NULL
)