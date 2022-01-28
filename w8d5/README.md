# W8D5 - Intro to Ruby

## To Do

- Ruby Intro
- Variables
- Conditionals
- Loops
- Methods
- Hashes
- Blocks
- Classes

## Intro

### Why Rails

- Learning a new language and framework
- Different approach to develop Web app
- Work with MVC pattern
- Coding with OO language
- A language/framework that makes your life easier

### Ruby on Rails

- Ruby was created by Yukihiro Matsumoto (Matz) in the mid-nineties
- Was designed for developer happiness and productivity
- Really took off with the release of Ruby on Rails (2005)

> Ruby introduced many concepts/features that made web development easier at the time. Other frameworks did implement features heavily inspired by Ruby on Rails

- Developer productivity
- Very Legible Code
- Develop a high-quality Web site rapidly
- Rich set of tooling and libraries out of the box
- Very good database functionality (ActiveRecord)
- Lots of abstraction

### Comparison between Ruby and JS

| JavaScript/NodeJS                     | Ruby/Rails                                                  |
| :------------------------------------ | :---------------------------------------------------------- |
| - Created in 10 days in 1995          | - Ruby was released in 1995 but took off with Rails in 2005 |
| - Created by Brendon Eich (Netscape)  | - Created by Yukihiro Matsumoto (Matz).                     |
|                                       | - Rails was released by David Heinemeier Hansson (Basecamp) |
| - Can run on both front and back ends | - Can only run on the back-end                              |
| - Syntax inspired by C and Java       | - Simplified, unclutered Syntax                             |
| - Primitive data types + object       | - all types are objects                                     |
| - More low level                      | - High-level of abstractions                                |
| - Highly-performant                   | - Performance issue                                         |
| - Very flexible                       | - Very opinionated                                          |
| - Not so easy to use migrations       | - Easy to use migrations                                    |
| - Fairly good for rapid development   | - Excellent for rapid prototyping and development           |
| - Multi-paradigm, event-driven        | - Mostly object-oriented                                    |
| - Largest ecosystem (npm)             | - Fairly big ecosystem (Rubygems)                           |
| - Very active community               | - Established community                                     |
| - Asynchronous                        | - Synchronous                                               |

- Companies using Ruby on Rails

  - AirBnB
  - Shopify
  - Basecamp
  - Soundcloud
  - Github
  - Groupon
  - CouchSurfing
  - Kickstarter
  - Twitch

## Variables

All data types are objects based on classes.

- Booleans
- Symbols
- Integers
- Floats
- Strings
- Arrays
- Hashes

## Conditionnals

## Loops

You can iterate using a lot of different methods in Ruby :

### upto/downto

1.upto(100) do |n|
puts n
end

### times

100.times do |n|
puts n
end

### .each

#### range

(1..100).each do |n|
puts n
end

#### with step

(0..100).step(10) do |n|
puts n
end

#### iterating with arrays

scrabble_words = ["QUARTZY", "OXAZEPAM", "QUIZZIFY", "OXYPHENBUTAZONE", "QUIXOTRY"]

scrabble_words.each_with_index do |word, index|
puts "Word ##{index+1}: #{word} Length: #{word.length}"
end

## Methods

## Hashes

- Hash is the equivalent of objects in JavaScript
- Use symbols as the keys
- Cannot use dot notation like in JavaScript

```rb
  famous_painter = {

    first_name: "Pablo",
    last_name: "Picasso",
    date_of_birth: 1881,
    date_of_death: 1973

  }

  famous_painter.each do |key, value|
    puts "#{key}: #{value}"
  end
```

## Blocks

Ruby blocks are anonymous functions that can be passed to methods, they are the equivalent of JavaScript callbacks

### 2 possible syntax: (1) do end (2) {}

```rb
  (1..100).each do |n|
    puts n
  end
```

or

```rb
  (1..100).each {|n| puts n}
```

Implicit block => yield keyword

# Ex.

```rb
def dozens(v)
 dozensArr = []
 1.upto(v) do |n|
   dozensArr.push yield n
 end
 dozensArr
end

dozens(4) {|n| n * 12}
```

Same with explicit block

```rb
def dozens(v, &block)
  dozensArr = []
  1.upto(v) do |n|
    dozensArr.push block.call n
  end
  dozensArr
end
```

## Classes

- You declare a class in Ruby with the class keyword.

```Ruby
class Car
end
```

### Initialize

- `initialize` is a special method in classes that is called when a class object is created with .new
- `initialize` methods are used to set the initial state of an object.

```Ruby
class Car
 def initialize (color, year, model)
   @color = color
   @year = year
   @model = model
 end
end

my_car = Car.new("red", 2007, "matrix")
```

### Accesor && Readers

- You can set default read and write methods for instance variables with accessor and readers.

```Ruby
class Car
 attr_accessor :color
 attr_reader :year
 attr_writer :model
 def initialize (color, year, model)
   @color = color
   @year = year
   @model = model
 end
end
```

Same as

```Ruby
class Car
 def initialize (color, year, model)
   @color = color
   @year = year
   @model = model
 end
 def color
   @color
 end
 def color=(value)
   @color = value
 end
 def year
   @year
 end
 def model=(value)
   @model = value
 end
end
```
