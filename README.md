# 🌴 Vacations App

A full-stack vacation management application where users can browse, like, and sort vacations, while admins can manage vacation entries and download reports.

## 📌 Features

- ✅ User authentication (JWT)
- 🧳 Browse vacations with filtering and sorting
- ❤️ Like vacations and track popularity
- 📈 Admin dashboard with vacation editing
- 📊 Recharts-based graphs + downloadable CSV reports

## 🛠 Tech Stack

**Frontend:** React, TypeScript, Axios, CSS  
**Backend:** Node.js, Express.js, JWT, Joi  
**Database:** MySQL  
**Other Tools:** Docker, JSON, Recharts, XAMPP, Git, UUID


## 📦 Installation
Run docker-compose with docker or
git clone https://github.com/ivnKuz/Vacations_Project
cd Vacations_Project

# Install backend dependencies
cd backend
npm install

# Install frontend dependencies
cd ../frontend
npm install

# Install Database
use SQL file from Database folder in XAMPP, Docker or any other app that can run SQL databases

# Run backend
npm run start:dev

# Run frontend
npm start

website port: http://localhost:3000

DOCKER, important to note:
sometimes might require to download nginx from docker hub manualy even with FROM command

NGINX has a problem with going to routes like /"something" for when going to site for the first time\manually typing in routes, for example:
http://localhost:3000/login might show 404 if you're first time typing it manually, after that if app redirects you it will work fine
http://localhost:3000 this will work every time. Recommended to not use any / when typing it in manually

fixing it with nginx.conf in the future.

to see user functionality you can either create new user by singing up or use existing user:

email: tester5@mail.com

password: 123456

to see admin functionallity use these credentials:

email: admin@mail.com
password: qwerty




## 🖼 Screenshots
Sign in & Sign Up page
<img width="1440" alt="Screenshot 2025-05-12 at 3 37 12" src="https://github.com/user-attachments/assets/bff6ae5a-f312-4bb3-aadf-65a8e5300d44" />
<img width="1440" alt="Screenshot 2025-05-12 at 3 37 23" src="https://github.com/user-attachments/assets/29a70337-1248-4fef-b5fc-f34ca241e594" />
User view
<img width="1440" alt="Screenshot 2025-05-12 at 3 37 52" src="https://github.com/user-attachments/assets/3827489c-4701-4c8b-b497-fba26f2051d8" />
Admin view
<img width="1440" alt="Screenshot 2025-05-12 at 3 38 48" src="https://github.com/user-attachments/assets/56fc8cda-11b5-4795-af49-fe32e5a6ad8b" />
<img width="1440" alt="Screenshot 2025-05-12 at 3 38 55" src="https://github.com/user-attachments/assets/c80c1ec5-5b3e-421a-ad3c-ac55a10c8155" />
<img width="1440" alt="Screenshot 2025-05-12 at 3 52 17" src="https://github.com/user-attachments/assets/4cc2c4d2-0cf1-443e-8e5f-eb3a368bcc48" />


