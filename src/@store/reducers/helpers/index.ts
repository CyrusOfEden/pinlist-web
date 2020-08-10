import { createAPIv1Client } from "~/src/@services/APIv1"

export const createAPIClient = ({ session: { firebaseToken } }: any) =>
  createAPIv1Client(firebaseToken)
