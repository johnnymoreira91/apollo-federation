// ESM syntax is supported.
export {}

import { app } from "./src/server"

const port = 3000

app.listen(port, () => {
  console.log('API-GATEWAY Running on door', port)
})