// ESM syntax is supported.
export {}

import { app } from "./src/server"

app.listen(3001, () => {
  console.log('SSO running on door 3001')
})