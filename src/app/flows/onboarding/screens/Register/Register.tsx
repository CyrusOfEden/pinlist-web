import { Heading, Input } from "@chakra-ui/core"
import * as Motion from "~/src/@design/Motion"
import { useFormStep } from "~/src/@hooks/useFormStep"
import { useSession } from "~/src/@services/ApplicationSession"
import { analytics } from "~/src/@services/firebase"
import { Variants } from "framer-motion"
import _ from "lodash"
import capitalize from "lodash/capitalize"
import React from "react"
import { useForm } from "react-hook-form"

import { CurrentUser } from "../../../../../@services/ApplicationSession"
import { AvatarField } from "./components/AvatarField"
import { EmailField } from "./components/EmailField"
import { GenderField } from "./components/GenderField"
import { UsernameField } from "./components/UsernameField"

export const Register = () => (
  <Motion.Stack
    w={420}
    color="gold.700"
    spacing={8}
    initial="initial"
    animate="enter"
    variants={{
      initial: { opacity: 0, y: 50, transition: { type: "spring" } },
      enter: { opacity: 1, y: 0, transition: { type: "spring" } },
    }}
  >
    <Heading size="xl" fontStyle="italic">
      Register for Joyful
    </Heading>
    <RegistrationForm />
  </Motion.Stack>
)

const RegistrationForm = () => {
  const { firebaseUser, setCurrentUser, api } = useSession()

  const form = useForm<FormValues>({ mode: "onSubmit", defaultValues })
  const step = useFormStep(form)
  const isLastStep = step === 3

  const onSubmit = async (values: FormValues) => {
    if (!isLastStep) {
      return form.setValue("step", step + 1)
    }

    // Create the Rails user
    const { email, gender, username, photoUrl } = values
    const { phoneNumber } = firebaseUser

    const { data } = await api.post("/users", {
      user: { username, email, phoneNumber, gender, photoUrl },
    })

    if (data.errors == null) {
      // Update Firebase
      await Promise.all([
        firebaseUser.updateEmail(email),
        firebaseUser.updateProfile({
          displayName: username,
          photoURL: photoUrl,
        }),
        analytics.setUserProperties({ gender }),
      ])

      // Update the ApplicationSession
      const { user } = data
      setCurrentUser(user)
    } else {
      // Set the errors
      for (const [field, reasons] of Object.entries(data.errors)) {
        const [reason] = reasons as string[]
        form.setError(field as keyof FormValues, {
          message: capitalize(`${field} ${reason}.`),
          type: "manual",
        })
      }
    }
  }

  const motion: Variants = {
    initial: {
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
      initial="initial"
      animate="enter"
    >
      <Input hidden name="step" ref={form.register()} />

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

type FormValues = Omit<CurrentUser, "phoneNumber"> & { step: number }

const defaultValues: FormValues = {
  step: 0,
  email: "",
  gender: "",
  username: "",
  photoUrl: "",
}
