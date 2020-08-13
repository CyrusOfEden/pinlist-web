import { Message } from "~/src/@services/Extension"
import { auth } from "~/src/@services/Firebase"
import { loadSession } from "~/src/@store/reducers/sessionStore"
import { browser } from "webextension-polyfill-ts"

browser.runtime.onMessage.addListener(async (message: Message) => {
  switch (message.name) {
    case "authenticate":
      return synchronizeFirebaseUser(message.token)
  }
})

const synchronizeFirebaseUser = async (token: string) => {
  try {
    const { user: firebaseUser } = await auth.signInWithCustomToken(token)

    if (firebaseUser.uid !== auth.currentUser?.uid) {
      await browser.notifications.create({
        type: "basic",
        iconUrl: browser.extension.getURL("assets/icons/favicon-128.png"),
        title: `Hi, ${firebaseUser.displayName}`,
        message: `You're now signed into Pinlist.`,
      })
    }

    const session = await loadSession(firebaseUser)
    await browser.storage.sync.set(session)
  } catch (error) {
    await browser.notifications.create({
      type: "basic",
      iconUrl: browser.extension.getURL("assets/icons/favicon-128.png"),
      title: "Error signing into Pinlist",
      message: error.message,
    })
  }
}
