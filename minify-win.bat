@echo off
title YUI Compressor
copy lib\yuicompressor.jar yuicompressor.jar
cls
echo Attempting to delete old minified version...
del /F /Q include-min.js
echo Minifying...
java -jar yuicompressor.jar --type js -o include-min.js include.js
echo Cleaning up...
del /F /Q yuicompressor.jar
echo Done!
pause