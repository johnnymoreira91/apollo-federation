import express from 'express'
import { UserController } from '../controller/userController'

const route = express.Router()

route.post('/signin', (req, res) => {
  return UserController(req, res)
})

export {
  route as defaultRoute
}