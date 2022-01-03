-- Basic SELECT

-- SELECT * FROM jokes;
-- SELECT jokes.question, jokes.answer FROM jokes;
-- SELECT question, answer FROM jokes;

-- Single WHERE clause

-- SELECT * FROM jokes LIMIT 1;

-- LIKE vs = (sensitivity)

-- SELECT * FROM jokes WHERE answer = 'A walk';
-- SELECT * FROM jokes WHERE answer ILIKE 'a walk'; -- Postgres Only
-- SELECT * FROM jokes WHERE LOWER(answer) LIKE 'a walk'; -- Everybody
-- SELECT * FROM jokes WHERE answer = '%walk%'; -- WRONG
-- SELECT * FROM jokes WHERE answer LIKE '%walk%'; -- GOOD

-- Multiple WHERE clauses

-- SELECT * FROM jokes WHERE question LIKE '%a%' AND question LIKE '%b%';


-- SELECT * 
-- FROM jokes 
-- WHERE question LIKE '%a%' 
-- AND question LIKE '%b%'
-- ;

-- Ordering results

-- SELECT * FROM jokes ORDER BY question LIMIT 1;
-- SELECT * FROM jokes ORDER BY question ASC;
-- SELECT * FROM jokes ORDER BY question DESC;

-- Joining tables

-- SELECT * FROM jokes JOIN authors ON jokes.author_id = authors.id;
-- SELECT *, jokes.id AS joke_id 
-- FROM jokes 
-- LEFT JOIN authors 
-- ON jokes.author_id = authors.id;


-- SELECT jokes.*, authors.name AS joke_id 
-- FROM jokes 
-- LEFT JOIN authors 
-- ON jokes.author_id = authors.id;

-- Aliases

-- SELECT *, jokes.id AS joke_id FROM jokes JOIN authors ON jokes.author_id = authors.id;


-- Aggregate functions (AVG, MIN, MAX, SUM)

-- SELECT author_id, AVG(rating) AS average_rating FROM jokes GROUP BY author_id;
-- SELECT author_id, COUNT(*) AS amount_of_jokes FROM jokes GROUP BY author_id;
-- SELECT author_id, MIN(rating) AS min_rating FROM jokes GROUP BY author_id;
-- SELECT author_id, MAX(rating) AS max_rating FROM jokes GROUP BY author_id;
-- SELECT author_id, SUM(rating) AS sum FROM jokes GROUP BY author_id;

-- Having
-- SELECT author_id, AVG(rating) AS average_rating 
-- FROM jokes  
-- GROUP BY author_id
-- HAVING AVG(rating) > 4
-- ORDER BY average_rating
-- LIMIT 1;



-- SELECT author_id, AVG(rating) AS average_rating, authors.name
-- FROM jokes  
-- JOIN authors
-- ON jokes.author_id = authors.id
-- GROUP BY author_id, authors.name
-- HAVING AVG(rating) > 4;


-- Nested selects


-- SELECT author_id
-- FROM jokes  
-- GROUP BY author_id
-- HAVING AVG(rating) > 4;


-- SELECT *
-- FROM jokes
-- WHERE author_id IN (
--   SELECT author_id
--   FROM jokes  
--   GROUP BY author_id
--   HAVING AVG(rating) > 4
-- );

-- SELECT *
-- FROM jokes
-- WHERE author_id IN (1,3,6);

SELECT *
FROM jokes
WHERE author_id IN (1,3,5,7,9,11);


CREATE VIEW odd_authors AS 

SELECT *
FROM jokes
WHERE author_id IN (1,3,5,7,9,11);