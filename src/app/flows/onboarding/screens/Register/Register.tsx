import { Heading, Input } from "@chakra-ui/core"
import * as firebase from "~/src/services/firebase"
import { useFormStep } from "~/src/system/hooks/useFormStep"
import * as Motion from "~/src/system/Motion"
import { Variants } from "framer-motion"
import React from "react"
import { useAuthState } from "react-firebase-hooks/auth"
import { useForm } from "react-hook-form"

import { AvatarField } from "./components/AvatarField"
import { DisplayNameField } from "./components/DisplayNameField"
import { EmailField } from "./components/EmailField"
import { GenderField } from "./components/GenderField"

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
      Register for Pinlist
    </Heading>
    <RegistrationForm />
  </Motion.Stack>
)

const RegistrationForm = () => {
  const [user, loading] = useAuthState(firebase.auth)
  if (loading) return null

  const form = useForm({ mode: "onSubmit", initialValues: { step: 0 } })

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

  const step = useFormStep(form)
  const isLastStep = step === 3

  const onSubmit = async (values) => {
    if (!isLastStep) {
      return form.setValue("step", step + 1)
    }

    const { email, gender, displayName, photoURL } = values
    await Promise.all([
      user.updateEmail(email.trim()),
      user.updateProfile({ displayName, photoURL }),
      firebase.analytics.setUserProperties({ gender }),
    ])
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
        <DisplayNameField
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
