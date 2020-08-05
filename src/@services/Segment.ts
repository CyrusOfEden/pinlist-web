import SegmentPlugin from "@analytics/segment"
import * as Firebase from "~/src/@services/Firebase"
import Analytics from "analytics"

export const Segment = Analytics({
  app: "joyful",
  plugins: [
    SegmentPlugin({
      writeKey: "YreIZ8aHfbUrxsbeHJqz02CJso3vQeJD",
    }),
  ],
})

Firebase.auth.onAuthStateChanged(async (user) => {
  if (user) {
    await Segment.identify(user.providerId, {
      username: user.displayName,
      email: user.email,
      phoneNumber: user.phoneNumber,
    })
  } else {
    await Segment.reset()
  }
})
