third project using MySQl, React, Node.js/express

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