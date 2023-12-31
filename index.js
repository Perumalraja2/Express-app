console.log("welcome o express")
const express = require ('express')
const app = express()
const indexRouter = require('./routes/index')
const usersRouter = require('./routes/users')
const dashboardRouter = require ('./routes/dashboard')
const PORT = process.env.PORT || 8000

app.use(express.json())
app.use('/',indexRouter)
app.use('/users',usersRouter)
app.use('/dashboard',dashboardRouter)


app.listen(PORT,()=>console.log("App is running in port 8000"))