import { usersMock } from '../mock/userMock'
import jwt from 'jsonwebtoken'

/**
 * @param {import('express').Request} req 
 * @param {import('express').Response} res 
 */
async function UserController(req, res) {
  const { email, password } = req.body

  const user = usersMock.find(us => us.email === email)

  if (!user) {
    return res.status(400).json({
      message: 'Credentials Wrong / Not found!'
    })
  }

  delete user.password

  const accessToken = jwt.sign(user, 'teste', {expiresIn: 3600})

  const payload = {
    accessToken,
    payload: {
      id: user.id,
      email: user.email,
      uuid: user.uuid
    }
  }

  return res.status(200).json(payload)

}

export {
  UserController
}