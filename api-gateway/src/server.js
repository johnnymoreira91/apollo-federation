import express from 'express'
import proxy from 'express-http-proxy'
import { serversConfig } from './config/serverConfig'

const app = express()

app.use('/auth', proxy(serversConfig.sso))
app.use('/api', proxy(serversConfig.apollo))

app.get('/', (req, res) => {
  return res.json({
    status: true,
    apiGateway: "ON"
  })
})

export {
  app
}