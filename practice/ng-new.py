# Importing OS module
import os

# Asking for new Angular project name
projectName = input("\nEnter new Angular project name! ")

# Creating new project with given name
runNgNew = "ng new --skip-install --skip-tests --defaults " + projectName
os.system(runNgNew)

# Updating/installing NPM node modules
input("\nPress any key to update/install modules! ")
runNpmInstall = "cd .\\" + projectName + " && npm install"
os.system(runNpmInstall)

# Optional Bootstrap install
bootstrapNeeded = input("\nDo you need Bootstrap? [y/N?] ")
if (bootstrapNeeded == "y" or bootstrapNeeded == "Y"):
  installBootstrap = "cd .\\" + projectName + " && ng add @ng-bootstrap/ng-bootstrap"
  os.system(installBootstrap)

# Open project in VSCode
openCode = "code " + projectName
os.system(openCode)

#Goodbye
# os.system("echo Script created by Daniel Harka. (daniel.harka.com)")