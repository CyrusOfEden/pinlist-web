import * as admin from "firebase-admin"
import * as functions from "firebase-functions"

const {
  private_key: privateKey,
  client_email: clientEmail,
  project_id: projectId,
} = require("./credential.json")

admin.initializeApp({
  credential: admin.credential.cert({ projectId, clientEmail, privateKey }),
  databaseURL: "https://joyful-shopping.firebaseio.com",
})

export const createAuthToken = functions.https.onCall((_, context) =>
  admin.auth().createCustomToken(context.auth!.uid),
)
