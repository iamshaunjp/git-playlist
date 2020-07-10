# Git & GitHub Tutorial for Beginners | The Net Ninja

Playground for the Net Ninja Git / GitHub tutorials on YouTube

TheNetNinja Youtube channel link : https://www.youtube.com/channel/UCW5YeuERMmlnqo4oq8vwUpg

## 1 - Why Use Git?

-   [Why Use Git](https://www.youtube.com/watch?v=3RjQznt-8kE&list=PL4cUxeGkcC9goXbgTDQ0n_4TBzOO0ocPR&index=1)

## 2 - Installing Git

-   [Installing Git](https://www.youtube.com/watch?v=MFtsLRphqDM&list=PL4cUxeGkcC9goXbgTDQ0n_4TBzOO0ocPR&index=2)

```sh
git --version
```

```sh
git config --global user.name myusername
git config user.name
```

```sh
git config --global user.email myusername@domain.com
git config user.email
```

## 3 - How Git Works

-   [How Git Works](https://youtu.be/iNP_KmOFqXs?list=PL4cUxeGkcC9goXbgTDQ0n_4TBzOO0ocPR)

## 4 - Creating a Repository

-   [Creating a Repository](https://youtu.be/v0Ch3yWQ-Zc?list=PL4cUxeGkcC9goXbgTDQ0n_4TBzOO0ocPR)

```sh
git init
```

## 5 - Staging files

-   [Staging files](https://youtu.be/KngvG8WzYLU?list=PL4cUxeGkcC9goXbgTDQ0n_4TBzOO0ocPR)

```sh
git status
git add .
git rm --cached <file>  [to unstage]
git rm --cached -r .

```

## 6 - Making Commits

-   [Making Commits](https://youtu.be/Fhgga2s_RmM?list=PL4cUxeGkcC9goXbgTDQ0n_4TBzOO0ocPR)

```sh
git commit -m "Initial commit"
git reset HEAD <file> [to unstage]
git log --oneline
```

## 7 - Undoing Things

-   [Undoing Things](https://youtu.be/RIYrfkZjWmA?list=PL4cUxeGkcC9goXbgTDQ0n_4TBzOO0ocPR)

```sh

```

## 8 - Branches

-   [Branches](https://youtu.be/QV0kVNvkMxc?list=PL4cUxeGkcC9goXbgTDQ0n_4TBzOO0ocPR)

```sh
git status
git add .
git commit -m "Commit/add my changes."
git log --oneline
git branch feature-1      [Create]
git branch -a             [List all branches.]
git checkout feature-1    [Switch to branch]
git checkout master
git branch -d feature-1   [error: The branch 'feature-1' not fully merged.]
git branch -D feature-1
git checkout -b feature-a [Create and switch to branch]
git checkout -b feature-b
```

## 9 - Merging Branches (& conflicts)

-   [Merging Branches (& conflicts)](https://youtu.be/XX-Kct0PfFc?list=PL4cUxeGkcC9goXbgTDQ0n_4TBzOO0ocPR)

```sh
git branch -a
git checkout feature-a
git checkout feature-b
git checkout master
git merge feature-a
git merge feature-b
git checkout -b feature-c
git checkout master
git add .
git commit -m "added margin to body"
git checkout feature-c
git add .
git commit -m "adding padding"
git checkout master
git merge feature-c
git add .
git commit
:wq
git log --oneline
```

## 10 - Introduction to GitHub

-   [Introduction to GitHub](https://youtu.be/fQLK8Ib_SKk?list=PL4cUxeGkcC9goXbgTDQ0n_4TBzOO0ocPR)

```sh
## Existing repository
git status
git push https://github.com/khristos/NetNinja-git-one.git master

git add .
git commit -m "added h1"
git push https://github.com/khristos/NetNinja-git-one.git master
 or (alias)
git remote add origin https://github.com/khristos/NetNinja-git-one.git
git push -u origin master

cd ..
git clone  https://github.com/khristos/NetNinja-git-new.git
cd NetNinja-git-new
git add .
git commit -m "Added index.html"
git remote -v
git push -u origin master


…or create a new repository on the command line
echo "# NetNinja-git-one" >> README.md
git init
git add README.md
git commit -m "first commit"
git remote add origin https://github.com/khristos/NetNinja-git-one.git
git push -u origin master

…or push an existing repository from the command line
git remote add origin https://github.com/khristos/NetNinja-git-one.git
git push -u origin master
```

## 11 - Collaborating on GitHub

-   [Collaborating on GitHub](https://youtu.be/MnUd31TvBoU?list=PL4cUxeGkcC9goXbgTDQ0n_4TBzOO0ocPR)

```sh
git checkout master
git pull origin master
git checkout -b index-html
git add .
git commit -m "Added index.html"
git push origin index-html

* "Compare & pull request" button
* "Create pull request" button
* Reviewers -- "No reviews--request one"
* "Merge pull request" button
* "Confirm merge" button

git checkout master
git pull origin master
git checkout -b img-update
git add . [Add images to new assets folder on 'img-update']
git commit -m "Added images."
git push origin img-update

* "Compare & pull request" button
* "Create pull request" button

git add .
git commit -m "Added last image."
git push origin img-update
* "Merge pull request" button
* "Confirm merge" button
```

## 12 - Forking (& Contributing)

-   [Forking (& Contributing)](https://youtu.be/HbSjyU2vf6Y?list=PL4cUxeGkcC9goXbgTDQ0n_4TBzOO0ocPR)

```sh
* "Fork" button

cd ..
git clone https://github.com/khristos/awesome-js-sauce.git
cd awesome-js-sauce
git status
git add .
git commit -m "Improved awesome JS"
git pull origin master

Forked repo
* "New pull request" button
* "Create pull request" button

Original repo
* "Merge pull request" button
* "Confirm merge" button

```
