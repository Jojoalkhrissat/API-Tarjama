import express from 'express'
import {client} from './config';
import {syncDb} from './model';
import { user,category,expense } from './api/v1/index'

const app = express()
// syncDb()

app.use('/user', user)
app.use('/category', category)
app.use('/expense', expense)
app.listen(process.env.port||3000, function () {
    console.log(`app is running on ${process.env.port||3000}`)
})