import { createAPIv1Client } from "~/src/@services/APIv1"

import { RootState } from "../.."

export const createAPIClient = ({ session: { firebaseToken } }: RootState) =>
  createAPIv1Client(firebaseToken)
