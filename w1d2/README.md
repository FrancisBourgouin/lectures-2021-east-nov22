# W1D2 - The Dev Workflow

## Today's menu

- Intro
- Curriculum overview
- How to approach lectures
- Incremental development
- Git

## Curriculum Overview

[slides](https://docs.google.com/presentation/d/1m3R_aN4S5YoCBmXRbjaZQGatygWyZXYLcN-fkcP_HWA)

## Remote Lecture

- It's recorded with Zoom
  - Please, turn on your cameras
  - Raise hands for questions
  - Use the shortcuts (ALT-Y to raise your hand, Spacebar to unmute yourself)

> Zoom and Live Share Links

We'll post the Zoom and VS Code LiveShare links each morning in the channel.

> IceBreaker Discussion at 9:30-45 am just to chat a bit

> Lecture is from 10 am-12 am

> 10 min. break at around 11 am

- Lecture notes and video recording

## Approach to lectures

### Participate and be engaged

- It's a good time to ask questions.
- I might ask you questions directly.
- Let the camera on.

### Coding session

### More code demonstration (like pair coding)

### Focused on the approach

- Problem Solving
- Step by step incremental development
- Error driven development

### I'd like to give the context, why?

### Mix a theory and practice, more practice

### Breakouts

- In some lectures, we might do an exercise where you will be splitted in breakout rooms of groups of 2 or 3.

### What Lectures Are Not For

- Coding along session
- Do your regular activities at the same time

- You are welcomed to take notes (in markdown)

* Lecture notes and recording will be sent via Compass

### What are you here to learn

- Coding skills, technologies such as JavaScript NodeJS/Express, Ruby on Rails, but it's more than that

- Do coding skills alone ensure that you are a good developer?

* Motivation (passion)
* Resilience, perseverance
* Problem solving
* Curiosity
* Communication
* Teamwork
* Adaptability (Learning new skills, adapting to changes)
* Positive attitude
* Willingness to grow and learn, having a growth mindset (talent can be developed), learn from others

### General Advices/Tips

- Comparing to ourselves vs others
- Keep going and never give up
- Don't do it later (procastination is bad!)
- Practice
- Provide feedback, talk to staff, mentors

- Help one another

* Critical factor for success: ask questions!

  - Mentors are bored. Do reach out to them!

    - 15 minutes rule
    - Code review
    - More advanced tips
    - Ask them to explain why

* disclaimer: the first few weeks are going to feel very intense!

## Tools

### Code Editor (VS Code, Sublime)

- Shortcuts

**Learn to use shortcuts**

- [VS Code Cheat Sheet](https://code.visualstudio.com/shortcuts/keyboard-shortcuts-macos.pdf)

- Useful Add-Ons:
  - Linter
  - Bracket Matching
  - Coloring for other file extensions

### Google

- Find answers to your question
  - Stack Overflow

### Markdown

-[Markdown CheatSheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)

- Take notes using markdown

### Version Control

- What, Why git?

  - Repositories (one repo per projects)
  - Save milestones
  - Keeps an history of your code (commits)
  - Backup copy on github
  - Work better as teams, branches

- Do use git

- You will _have_ to use git in team projects

#### Git Commands

- git workflow

  - add files to staging area
  - commit changes
  - update github

- git status
- git add .
- git commit -m "message"
- git remote -v (or add origin, rm origin)
- git push
- git pull
- git log

## How to approach problem solving

### Incremental development

- List the steps in order to solve a problem. Not thinking about the syntax.

- Step-by-step process

  Rinse and repeat:

  1. State the hypothesis
  2. Verify the hypothesis
  3. changes

- Writing pseudo-code

  - Write the steps in english to get to the solution

- Decomposition

  - Breaking down a complex problem into smaller more manageable problems
  - Each smaller problem is much simpler to solve

- Error-Driven Developement

  - Getting errors is part of the process -> Debugging
  - Incremental development is triggered by raising errors that will guide us in order to do the next steps

## Creating the app

- Write a node program that takes in an unlimited number of command line arguments, goes through each and prints out the sum of them. If any argument is not a whole number, skip it. Do support negative numbers though. If any argument is not a number, output an error message. We need at least 2 arguments.

- Understanding the problem?

## GitHub

- What is Github? What are the benefits?
- Create a new repo
- Creating branches and merging

### Debug Strategies

1- use console.log to understand what's going on

- use labels, separate multiple values with commas

2- Use the Node Inspector to Debug in Chrome > node --inspect-brk sum.js and go to chrome://inspect

- Play in Node REPL
- Play in another REPL such as Repl/it

3- Text Editor Integration

- You can debug in VS Code...

### Improve the Solution

- Refactor the code

  - Readability
  - Modularity
  - Catch errors
