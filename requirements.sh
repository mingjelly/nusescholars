#!/bin/bash

#Starting message
echo "Starting to install packages.."
sleep 1

#install material ui
echo "Installing material ui..."
sleep 3
npm install @mui/material @emotion/react @emotion/styled
npm install @mui/icons-material

#install vercel packages
npm i @vercel/analytics
npm i @vercel/speed-insights

npm audit fix

#install pandas, openpyxl
echo "Installing python dependencies.."
sleep 3
pip install pandas
pip install openpyxl

#start the project
rm -rf node_modules
npm install

echo "Successfully installed all packages!"

