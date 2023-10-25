NEW PROJECT SETUP IN GITHUB & VS CODE:

FILE NAME

node -v
(shows version of node)

git remote -v
(shows remote connected to)

spec.cy.js
".cy" part makes it easier to find tests in larger projects

PROJECT INITALISATION
(git clone [insert url] ) (if cloning)

create local file

npm init -y

npm install -g cypress@9.60

npm install cypress@9.6 (installs node modues)

npm install –save-dev cucumber

npm install –save-dev cypress-cucumber-preprocessor

npx cypress open (installs cypress folder)

<<< At this point create the repo in github without a readme file and licence file can be added later>>>
git init

git add .

git commit -m “first commit”

git remote add origin [insert git repo url]

git push -u origin master

FILE UPLOAD to Git:
git add .

git commit -m “first commit”

git push -u origin master

(^"origin" - remote name)
(^"master" - branch name)

TERMINAL COMMANDS:
npx cypress open (UI)

npx cypress run (run in the terminal)

GIT COMMANDS:
git rebase origin/master 
    (to update branch to master if I am on feature/development/bugfixes branch)

git pull
    (if branch is one commit ahead)
    (to pull latest code from repo)

git status
 (shows files that are staged for commit)

 git checkout master
    ( switches to the branchname, if I am on a branch called feature then it will switch to master)

git rebase master 
(if working on feature branch and want current files pulled from the master branch)

git rebase origin master

AWESOME SITES TO TEST ON:
https://practicetestautomation.com/practice-test-exceptions/
https://github.com/BMayhew/awesome-sites-to-test-on/blob/main/readme.md