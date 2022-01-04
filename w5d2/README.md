# W5D2 - Database Design

## Today's menu

- What is data modeling and why we should use it
- Small example for data modeling
- Building ERDs
- Data modeling conventions
- Data types
- Revisiting the initial example
- (Group) Revisiting the example with MtM relationships

# Why should we do data modeling?

- To understand how tables are connected
- To understand relationships
- To avoid complications
- Easy retrieval of data
- Avoid inconsistencies
- Normalization?
- Avoiding redundancy
- Readability

## Data Modeling

### The goal of data modeling

    1) Better organize data and avoid data duplication
    2) Avoid data inconsistencies

- In a relational database, information is divided into different entities
- Relationships are established between the entities

### ERD

- Entity Relationship Diagram

  - Entities - Usually nouns representing real things
  - Attributes - Properties characterizing the entity
  - Relationships - Relationships between entities

### Database Table Structure

> Data in a database can be represented with the following:

- Tables (relations) contains columns(fields - attributes) and rows (records)
- Each column of a row has a data type

Ex.:

| id  | firstname | lastname    | email      | password |
| :-- | :-------- | :---------- | :--------- | :------- |
| 1   | SpongeBob | Squarepants | bob@sq.com | secret   |

### Naming Convention

We use naming conventions to increase consistency which provides us with some level of predictability. We can write queries faster if we don't have to look up column names constantly. Follow these rules to start with:

- Use `snake_case` for table and column names.
- In the ERD, table names should be singular
- In the DB, pluralize tables names, column names should be singular.
- Call your primary key `id`, not `heidi`.
- For most foreign keys use `<table>_id`.

```
+----------------+
|    student    |  <-- Singular
+----------------+
| PK | id        |  <-- Primary Key
|    | name      |  <-- Singular
| FK | cohort_id |  <-- <table>_id
+----------------+
```

Here is an example [SQL Style Guide](http://www.sqlstyle.guide/). I'm not recomending the style specifically, it provides an example of how a style guide would be defined.

#### Data Types

When defining columns for the tables you will need to specify the data type. `INTEGER, VARCHAR, TEXT, BOOLEAN, DATE, TIMESTAMP, TIMESTAMPZ` are common examples.

- Primary key column. Use the name `id` and then `SERIAL PRIMARY KEY NOT NULL`.
- Names, emails, usernames and passwords can all be stored as `VARCHAR(255)`.
- Foreign key columns. Add `_id` to the singular name of the column you are referencing. Students to cohorts would be `cohort_id`. The type would be `INTEGER` but you also should create the foreign key with `REFERENCES cohorts(id) ON DELETE CASCADE`.
- Dates would use the `DATE` type. If you needed [date and time](https://www.postgresql.org/docs/current/static/datatype-datetime.html) you would use `TIMESTAMP`.

You will use `INTEGER` to represent most [numbers](https://www.postgresql.org/docs/current/static/datatype-numeric.html). There are other _sizes_ of integers as well.

- **SMALLINT** -32,768 to 32,767 (thirty-two thousand)
- **INTEGER** -2,147,483,648 to 2,147,483,647 (two billion)
- **BIGINT** -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 (nine quintillion)
- **SERIAL** 1 to 2,147,483,647 (auto incrementing)

### Dates, Phone Numbers & Currency

- Become familiar with the [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date formatting standard. The string `'2018-02-12'` uses this format to represent 'February 12th, 2018'. Year, month and then day. Dates should be stored consistently. Apply timezones and formatting when displayed to the user.
- Store phone numbers as `VARCHAR`, there are so many possible formats. The number `214 748 3647` hits our `INTEGER` limit.
- Store currency as an integer representing cents. Use a `BIGINT` if you need values over \$21 million dollars.
- Read up on assumptions made by people with regard to peoples names. [Falsehoods Programmers Believe About Names](https://www.kalzumeus.com/2010/06/17/falsehoods-programmers-believe-about-names/)

There is a [list](https://github.com/kdeldycke/awesome-falsehood) of other resources discussing falsehoods. Gender is no longer considered binary. Addresses, language and units of measurement are all poorly understood by most of us. The good news is that there is a collection of information out there that we previously did not have access to. The Internet.

### Cardinality of Relationships

#### One-To-Many

- Let's add the user table

#### Many-to-Many

- Cannot be implemented as such in the relational model
- Can be changed into two one-to-many relationships

- Vehicule rental
- entities

  - vehicules
  - rentals
  - customers

#### One-to-One

- Person and Passport

## Database Normalization

- Normalization is a systematic approach of decomposing tables to eliminate data redundancy(repetition)

- [Database Normalization](https://www.studytonight.com/dbms/database-normalization.php)
