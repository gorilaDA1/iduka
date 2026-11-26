@echo off
rem Simple batch file to launch a local HTTP server for the Iduka app
rem Requires Python 3 to be on the system PATH

python -m http.server 8080
