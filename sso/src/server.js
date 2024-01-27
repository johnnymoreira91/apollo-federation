import express from 'express'
import { defaultRoute } from './route/default'

const app = express()

app.use(express.json())

app.use('/', defaultRoute)

export {
  app
}