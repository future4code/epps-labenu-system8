import app from './app'
import createClass from './endpoints/post/createClass'
import createStudant from './endpoints/post/createStudant'
import createTeacher from './endpoints/post/createTeacher'

app.post ('/class/create', createClass)
app.post('/studant/create', createStudant)
app.post ('/teacher/create', createTeacher)
