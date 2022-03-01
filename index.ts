import express from 'express'
import {client} from './config';
import {syncDb} from './model';
import { userRouter } from './api/v1/user'

const app = express()
syncDb()
// const data= client.get(searchtext)
app.use('', userRouter)
app.listen(process.env.port||3000, function () {
    console.log(`app is running on ${process.env.port||3000}`)
})