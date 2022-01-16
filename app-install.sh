# create the log directory for the application
echo "[ESPRESSO APP MESSAGE]: Creating application log directory"
sleep 0.5s;
mkdir -v ./src/logs

# remove unwanted directories from the application
echo "[ESPRESSO APP MESSAGE]: Removing unwanted directories and files from the application..."
sleep 0.5s;
rm -rf -v ./shots ./docs
rm -v ./README.md

# npm packages
echo "[ESPRESSO APP MESSAGE]: Installing NPM packages..."
sleep 0.5s;
npm install

# removed the origin remote of the project's git repo
echo "[ESPRESSO APP MESSAGE]: Removing project's git remote so that you can create your own..."
sleep 1s;
git remote remove origin

# creating file for starting local dev server with nodemon
echo "[ESPRESSO APP MESSAGE]: Creating file for running server locally..."
sleep 0.5s;
echo "# start dev server locally" >> server.sh
echo "nodemon --watch . --watch .env --delay 2000ms server.js" >> server.sh
chmod +x ./server.sh

# Once all the installation is done, we would then proceed to delete this file!
rm -v ./app-install.sh

# Closure
echo "[ESPRESSO APP MESSAGE]: Thank you for installing Espresso: The Express Boiler Plate!"
echo "[ESPRESSO APP MESSAGE]: For manuals and documentation on how to use this application, please visit - https://github.com/sricharankrishnan/espresso-express-boilerplate/blob/master/README.md"
echo "[ESPRESSO APP MESSAGE]: Have a nice day!"
