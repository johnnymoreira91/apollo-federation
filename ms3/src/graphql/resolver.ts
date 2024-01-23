const products = [
  {
    id: 1,
    name: 'Produto 1',
    price: 19.99,
    description: 'Descrição do Produto 1'
  },
  {
    id: 2,
    name: 'Produto 2',
    price: 29.99,
    description: 'Descrição do Produto 2'
  },
  {
    id: 3,
    name: 'Produto 3',
    price: 39.99,
    description: 'Descrição do Produto 3'
  },
];

const resolvers = {
  Query: {
    getProducts: () => {
      return products
    }
  }
}

export {
  resolvers as productResolver
}