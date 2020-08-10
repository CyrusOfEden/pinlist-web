import { Message } from "~/src/@services/actors/Extension"
import { auth } from "~/src/@services/Firebase"
import { browser } from "webextension-polyfill-ts"

browser.runtime.onMessage.addListener(async (message: Message) => {
  switch (message.name) {
    case "authenticate":
      return synchronizeFirebaseUser(message.token)
  }
})

const synchronizeFirebaseUser = async (token: string) => {
  try {
    const { user } = await auth.signInWithCustomToken(token)

    if (user.uid !== auth.currentUser?.uid) {
      await browser.notifications.create({
        type: "basic",
        iconUrl: user.photoURL,
        title: `Hi, ${user.displayName}`,
        message: `You're now signed into Pinlist.`,
      })
    }
  } catch (error) {
    await browser.notifications.create({
      type: "basic",
      title: "Error signing into Pinlist",
      message: error.message,
    })
  }
}
