CREATE TABLE journal (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50),
    firstQuestion VARCHAR(500),
    secondQuestion VARCHAR(500),
    thirdQuestion VARCHAR(500),
    moodRating INT,
    addComments VARCHAR(500)
)