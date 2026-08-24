@echo off
title Jamiul Portfolio - Dev Server
cd /d "%~dp0"
echo Starting portfolio dev server (WSL)...
wsl -e bash -c "cd /mnt/c/Users/jamiu/jamiul-portfolio && npm run dev"
pause
