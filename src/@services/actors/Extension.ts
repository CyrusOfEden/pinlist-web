type Authenticate = {
  name: "authenticate"
  token: string
}

export type Message = Authenticate

export const call = (message: Message) =>
  window.postMessage(message, window.origin)
