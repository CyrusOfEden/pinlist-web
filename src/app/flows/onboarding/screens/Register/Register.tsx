import { Heading, Input } from "@chakra-ui/core"
import * as Motion from "~/src/@components/Motion"
import { useFormStep } from "~/src/@hooks/useFormStep"
import { useSession } from "~/src/@store"
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

const RegistrationForm = () => {
  const session = useSession()

  type FormValues = Omit<User, "phoneNumber"> & { step: number }
  const form = useForm<FormValues>({
    mode: "onSubmit",
    defaultValues: {
      step: 0,
      email: "",
      gender: "",
      username: "",
      photoUrl: "",
    },
  })
  const step = useFormStep(form)
  const isLastStep = step === 3

  const onSubmit = async (values: FormValues) => {
    if (!isLastStep) {
      return form.setValue("step", step + 1)
    }

    try {
      // const user = await createUser(session, values)
      debugger
      // session.setState({ currentUser: user })
    } catch (errors) {
      debugger
      for (const [field, reason] of errors) {
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
