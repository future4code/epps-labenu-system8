import app from './app'
import createClass from './endpoints/class/post/createClass'
import createStudant from './endpoints/studant/post/createStudant'
import createTeacher from './endpoints/teacher/post/createTeacher'
import changeClass from './endpoints/class/put/changeClass'
import getStudantsByClass from './endpoints/studant/get/getStudantsByClass'
import getStudentAge from './endpoints/studant/get/getStudentAge'

app.get('/age/student/:id', getStudentAge)
app.get('/students/:id', getStudantsByClass)
app.post ('/class/create', createClass)
app.post('/student/create', createStudant)
app.post ('/teacher/create', createTeacher)
app.put('/update/class', changeClass)
