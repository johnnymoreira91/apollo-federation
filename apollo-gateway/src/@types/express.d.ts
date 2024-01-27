declare namespace Express {
  export interface Request {
      user: {
        accessToken: string
      }
  }
  export interface Response {
    time: number
}
}