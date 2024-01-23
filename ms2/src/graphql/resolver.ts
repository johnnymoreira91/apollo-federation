const users = [ {
  id: 1, name: 'johnny'
}]

const resolvers = {
  Query: {
    getUsers: () => {
      return users
    }
  }
}

export {
  resolvers as userResolver
}