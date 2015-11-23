#!/bin/bash
cp lib/yuicompressor.jar yuicompressor.jar
echo Attempting to delete old minified version...
rm -rf include-min.js
echo Minifying...
java -jar yuicompressor.jar --type js -o include-min.js include.js
echo Cleaning up...
rm -rf yuicompressor.jar
echo Done!
logout
