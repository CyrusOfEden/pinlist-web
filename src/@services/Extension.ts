type Authenticate = {
  name: "authenticate"
  token: string
}

export type Message = Authenticate

export const call = (message: Message) => parent.postMessage(message, "*")
