#!/bin/bash

echo "===== UPDATE CODE ====="
git pull origin main

echo "===== INSTALL BACKEND DEPENDENCIES ====="
cd backend
npm install

echo "===== BUILD FRONTEND ====="
cd ../frontend
npm install
npm run build

echo "===== RESTART BACKEND ====="
pm2 restart backend

echo "===== DEPLOY DONE ====="
