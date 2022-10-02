# To run this project you have to add a .env file to the backend directory and add those variable

you need a create a database first then fillup this information ...

DB_HOST = ,
DB_USER = ,
DB_PASSWORD = ,
DB = ,
DB_PORT = ,

#After adding .env file open your terminal & change directory to backend and type

### yarn

### yarn start

if you are using npm then type

### npm i

### npm start

# Endpoints

get all task =GET, http://localhost:8000/tasks
create task =POST, http://localhost:8000/tasks
Update task =PATCH, http://localhost:8000/tasks/id [id is the task id]
