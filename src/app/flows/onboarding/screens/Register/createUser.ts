// import { analytics } from "~/src/@services/Firebase"
// import { CurrentUser, SessionState } from "~/src/@store"

// export const createUser = async (
//   { firebaseUser, api }: SessionState,
//   userParams: Partial<CurrentUser>,
// ): Promise<CurrentUser> => {
//   const { phoneNumber } = firebaseUser

//   const user = await api({
//     method: "POST",
//     url: "/users",
//     data: { user: { phoneNumber, ...userParams } },
//   })

//   // Update Firebase
//   await Promise.all([
//     firebaseUser.updateEmail(user.email),
//     firebaseUser.updateProfile({
//       displayName: user.username,
//       photoURL: user.photoUrl,
//     }),
//     analytics.setUserProperties(user),
//   ])

//   return user
// }
