# Git Workflow

**NEVER code on Master or Main!**

## Create Feature Branches

`git checkout -b feature/my-feature`

- Master / Main branch is your **production** branch, never directly work on it!

## Workflow

### Starting a new branch

1. git checkout master / git checkout main (Start new branches from the main branch)
2. git pull (Make sure you have the most recent version)

### Working on the branch

3. git checkout -b feature/my-feature (Make your feature)
4. git add & git commit (Commit often with meaningful messages !)
5. git push (So it's not only local)

### Merging master / main in the branch

6. git checkout master / git checkout main (To update it)
7. git pull
8. git checkout -b feature/my-feature (Back to your feature)
9. git merge master / git merge main
10. Fix conflicts if any
11. git commit (commit the merge)
12. git push (So it's not only local)

### Merging the branch back in master / main

13. git checkout master / git checkout main (To merge your branch)
14. git merge feature/my-feature
15. Should not be any conflict since you cleaned them in the branch first
16. git commit (commit the merge)
17. git push (So it's not only local)
