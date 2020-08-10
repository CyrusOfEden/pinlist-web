import { Heading, Input } from "@chakra-ui/core"
import * as Motion from "~/src/@components/Motion"
import { useFormStep } from "~/src/@hooks/useFormStep"
import { createAPIv1Client } from "~/src/@services/APIv1"
import { useAppDispatch, useSession } from "~/src/@store"
import { setSessionState } from "~/src/@store/reducers/sessionStore"
import { User } from "~/src/@types/pinlist-api"
import { Variants } from "framer-motion"
import capitalize from "lodash/capitalize"
import React from "react"
import { useForm } from "react-hook-form"

import { AvatarField } from "./components/AvatarField"
import { EmailField } from "./components/EmailField"
import { GenderField } from "./components/GenderField"
import { UsernameField } from "./components/UsernameField"

export const Register = () => (
  <Motion.Stack
    w={420}
    color="gold.700"
    spacing={8}
    initial="mount"
    animate="enter"
    variants={{
      mount: { opacity: 0, y: 50, transition: { type: "spring" } },
      enter: { opacity: 1, y: 0, transition: { type: "spring" } },
    }}
  >
    <Heading size="xl" fontStyle="italic">
      Register for Joyful
    </Heading>
    <RegistrationForm />
  </Motion.Stack>
)

type FormValues = User & { step: number }

const RegistrationForm = () => {
  const {
    firebaseToken,
    firebaseUser: { phoneNumber },
  } = useSession()
  const dispatch = useAppDispatch()

  const form = useForm<FormValues>({
    mode: "onSubmit",
    defaultValues: {
      step: 0,
      email: "",
      gender: "",
      username: "",
      photoUrl: "",
      phoneNumber,
    },
  })

  const step = useFormStep(form)

  const onSubmit = async (values: FormValues) => {
    if (step < 3) {
      return form.setValue("step", step + 1)
    }

    try {
      const api = createAPIv1Client(firebaseToken)
      const currentUser = await api<User>({
        method: "POST",
        url: "/users",
        data: { user: values },
      })
      dispatch(setSessionState({ currentUser }))
    } catch (errors) {
      for (const [field, reason] of Object.entries(errors)) {
        form.setError(field as keyof FormValues, {
          message: capitalize(`${field} ${reason}.`),
          type: "manual",
        })
      }
    }
  }

  const motion: Variants = {
    mount: {
      opacity: 0,
      y: 20,
    },
    enter: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.25,
        type: "spring",
      },
    },
  }

  return (
    <Motion.Stack
      spacing={8}
      as="form"
      onSubmit={form.handleSubmit(onSubmit)}
      initial="mount"
      animate="enter"
    >
      <Input hidden name="step" ref={form.register()} />
      <Input hidden name="phoneNumber" ref={form.register()} />

      {step >= 0 && (
        <EmailField form={form} isCurrentStep={step === 0} variants={motion} />
      )}

      {step >= 1 && (
        <GenderField form={form} isCurrentStep={step === 1} variants={motion} />
      )}

      {step >= 2 && (
        <UsernameField
          form={form}
          isCurrentStep={step === 2}
          variants={motion}
        />
      )}

      {step >= 3 && (
        <AvatarField form={form} isCurrentStep={step === 3} variants={motion} />
      )}
    </Motion.Stack>
  )
}
