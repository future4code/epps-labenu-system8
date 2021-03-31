import app from './app'
import createClass from './endpoints/class/post/createClass'
import createStudant from './endpoints/studant/post/createStudant'
import createTeacher from './endpoints/teacher/post/createTeacher'
import changeClass from './endpoints/teacher/put/changeClass'

app.post ('/class/create', createClass)
app.post('/studant/create', createStudant)
app.post ('/teacher/create', createTeacher)
app.put('/update/class', changeClass)
