# create the log directory for the application
echo "=========================================================================="
echo "Creating a log directory for the application..."
echo "..."
sleep 1s;
mkdir -v ./logs
echo "=========================================================================="

# remove unwanted directories from the application
echo "Removing unwanted directories and files from the application..."
echo "..."
sleep 1s;
rm -rf -v ./shots ./docs
rm -v ./README.md
echo "=========================================================================="

# npm packages
echo "Installing all relevant NPM packages..."
echo "..."
sleep 1s;
npm install
echo "=========================================================================="

# removed the origin remote of the project's git repo
echo "Removing project's git remote so that you can create your own..."
echo "..."
sleep 1s;
git remote remove origin
echo "=========================================================================="

# creating file for starting local dev server with nodemon
echo "Creating file for running server locally..."
sleep 1s;
echo "# start dev server locally" >> server.sh
echo "nodemon --watch . --watch .env --delay 2000ms server.js" >> server.sh
chmod +x ./server.sh
echo "=========================================================================="

# Once all the installation is done, we would then proceed to delete this file!
rm -v ./app-install.sh
echo "=========================================================================="

# Closure
echo "Thank you for installing Espresso: The Express Boiler Plate!"
echo "For manuals and documentation on how to use this application, please visit - https://github.com/sricharankrishnan/espresso-express-boilerplate/blob/master/README.md"
echo "Have a nice day!"
