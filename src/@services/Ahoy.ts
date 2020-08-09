import Ahoy from "ahoy.js"

Ahoy.configure({
  urlPrefix: process.env.RAILS_HOST,
})

export { Ahoy }
