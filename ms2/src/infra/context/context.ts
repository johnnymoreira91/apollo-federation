import { verify } from "jsonwebtoken"

const getUser = async function(token) {
  try {
    if(token) {
      const user = verify(token, 'teste')
      return user
    }
    return null
  } catch (error) {
    return null
  }
}

const ContextValue = async function({req, res}) {
  if (
    req.Body.OperationName === 'createUser' || 
    req.Body.OperationName === 'signIn'
  ) {
    return {}
  }

  const token = req.Headers.Authorization || ''

  const user = await getUser(token)
  if(!user) {
    throw new Error('User is not authenticated')
  }

  return { user }
}

export { ContextValue }