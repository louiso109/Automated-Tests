**Louis Odinot**
**31/10/2023**

**VS CODE SHORTCUTS:**

Comment out multiple lines of code:
ctrl + L
ctrl + /

Open duplicate workspace:
">duplicate" (in workspace search box)

**NEW PROJECT SETUP IN GITHUB & VS CODE:**

FILE NAME

node -v
(shows version of node)

git remote -v
(shows remote connected to)

spec.cy.js
".cy" part makes it easier to find tests in larger projects

**PROJECT INITALISATION:**

(git clone [insert url] ) (if cloning)

create local file

npm init -y

npm install -g cypress@9.60

npm install cypress@9.6 (installs node modues)

npm install –save-dev cucumber

npm install –save-dev cypress-cucumber-preprocessor

npx cypress open (installs cypress folder)

**At this point create the repo in github without a readme file and licence file can be added later**

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

**TERMINAL COMMANDS:**

npx cypress open (UI)

npx cypress run (run in the terminal)

cypress info

cypress verify - Verify that Cypress is installed correctly and is executable.

cypress version

cypress cache path - Print the path to the Cypress cache folder.

*DONT USE* cypress cache clear - This is useful when you want Cypress to clear out all installed versions of Cypress that may be cached on your machine. After running this command, you will need to run cypress install before running Cypress again.

*DONT USE* cypress cache prune - Deletes all installed Cypress versions from the cache except for the currently-installed version.

**GIT COMMANDS:**

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

**AWESOME SITES TO TEST ON:**

https://practicetestautomation.com/practice-test-exceptions/
https://github.com/BMayhew/awesome-sites-to-test-on/blob/main/readme.md