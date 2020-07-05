import * as storeMatchers from "./storeMatchers"

const isStore = () => Object.values(storeMatchers).find((matcher) => matcher())
