import app from './app'
import createClass from './endpoints/class/post/createClass'
import createStudant from './endpoints/studant/post/createStudant'
import createTeacher from './endpoints/teacher/post/createTeacher'
import changeClass from './endpoints/class/put/changeClass'
import getStudantsByClass from './endpoints/studant/get/getStudantsByClass'
import getStudentAge from './endpoints/both/getAge'
import getTeacherByClass from './endpoints/teacher/get/getTeacherByClass'
import getStudentsByHobbies from './endpoints/studant/get/getStudentsByHobbies'
import removeStudentFromClass from './endpoints/studant/delete/removeStudentsFromClass'
import removeStudent from './endpoints/studant/delete/removeStudent'

app.get('/students/hobbies', getStudentsByHobbies)
app.get('/search/age', getStudentAge)
app.get('/students/:id', getStudantsByClass)
app.get('/teachers/:id', getTeacherByClass)
app.post ('/class/create', createClass)
app.post('/student/create', createStudant)
app.post ('/teacher/create', createTeacher)
app.put('/update/class', changeClass)
app.put('/student/remove-class/:id', removeStudentFromClass)
app.delete('/student/remove/:id', removeStudent)
