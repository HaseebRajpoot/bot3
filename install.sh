#!/usr/bin/bash

pkg update -y
pkg upgrade -y
pkg install wget -y
pkg install ffmpeg -y
pkg install nodejs -y
pkg install npm -y
pkg install tesseract -y
npm i
npm i got
wget -O ~/../usr/share/tessdata/ind.traineddata "https://github.com/tesseract-ocr/tessdata/blob/master/ind.traineddata?raw=true"
npm install
npm audit fix

echo "[*] SUCCESS BRO JUST TYPE \"npm start\" IF ANY ERROR PLEASE INSTALL MANUALLY"
