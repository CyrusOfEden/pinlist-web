import { RouteComponentProps } from "@reach/router"
import React from "react"

interface HomeProps extends RouteComponentProps {
  user: firebase.User
}

export default function HomeScreen({ user }: HomeProps) {
  return null
}
