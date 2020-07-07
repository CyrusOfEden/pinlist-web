import {
  Button,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  Heading,
  Input,
  Radio,
  RadioGroup,
} from "@chakra-ui/core"
import * as Motion from "~/src/system/Motion"
import { Variants } from "framer-motion"
import React, { useMemo, useReducer, useState } from "react"
import { useCallback } from "react"
import { useForm } from "react-hook-form"
import { useWindupString } from "windups"

export default function Register() {
  return (
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
      <Heading size="xl">
        <em>Register for Pinlist</em>
      </Heading>
      <RegistrationForm />
    </Motion.Stack>
  )
}

const Label = ({ title, ...delegated }) => {
  const [label] = useWindupString(title, { pace: () => 1000 / title.length })
  return (
    <Heading mb={2} size="md" {...delegated}>
      {label}
    </Heading>
  )
}

const RegistrationForm = () => {
  const { register, handleSubmit, errors, formState } = useForm({
    mode: "onBlur",
  })

  const getError = (fieldName: string) =>
    formState.touched[fieldName] && errors[fieldName]

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

  const [currentStep, setStep] = useReducer(
    (currentStep: number, nextStep: number) =>
      nextStep > currentStep ? nextStep : currentStep,
    0,
  )

  return (
    <Motion.Stack
      spacing={8}
      as="form"
      onSubmit={handleSubmit(() => null)}
      initial="initial"
      animate="enter"
    >
      <Motion.Box variants={motion}>
        <Label title="What's your email?" />
        <FormControl isInvalid={getError("email")}>
          <Input
            type="email"
            name="email"
            id="email"
            placeholder="Your Email Address"
            borderColor="transparent"
            focusBorderColor="gold.500"
            autoFocus
            ref={register({
              required: "You need an email to register.",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Make sure your email is entered correctly!",
              },
            })}
            onChange={() => getError("email") || setStep(1)}
            onBlur={() => getError("email") || setStep(1)}
          />
          <FormErrorMessage>{getError("email")?.message}</FormErrorMessage>
        </FormControl>
      </Motion.Box>

      {currentStep >= 1 && (
        <Motion.Box variants={motion}>
          <Label title="How do you see yourself?" />
          <FormControl isInvalid={getError("gender")}>
            <RadioGroup isInline spacing={8} onChange={() => setStep(2)}>
              <Radio
                variantColor="gold"
                borderColor="gold.200"
                value="female"
                name="gender"
                ref={register({ required: true })}
              >
                Female
              </Radio>
              <Radio
                variantColor="gold"
                borderColor="gold.200"
                value="nuanced"
                name="gender"
                ref={register({ required: true })}
              >
                Nuanced
              </Radio>
              <Radio
                variantColor="gold"
                borderColor="gold.200"
                value="male"
                name="gender"
                ref={register({ required: true })}
              >
                Male
              </Radio>
            </RadioGroup>
            <FormErrorMessage>
              {getError("gender") &&
                "We use this to personalize your special offers."}
            </FormErrorMessage>
          </FormControl>
        </Motion.Box>
      )}

      {currentStep >= 2 && (
        <Motion.Box variants={motion}>
          <Label title="Pick a snazzy username!" />
          <FormControl isInvalid={getError("username")}>
            <Input
              type="text"
              name="username"
              id="username"
              placeholder="Something Unique"
              borderColor="transparent"
              focusBorderColor="gold.500"
              spellCheck={false}
              autoCapitalize="off"
              autoComplete="off"
              autoFocus
              ref={register({
                required: "You need a username.",
                minLength: {
                  value: 3,
                  message: "Usernames must be at least 3 characters long.",
                },
                maxLength: {
                  value: 24,
                  message: "Usernames cannot be longer than 24 characters.",
                },
                pattern: {
                  value: /[A-Za-z0-9.-_]+/,
                  message:
                    "You can only use letters, numbers, and .-_ in your username.",
                },
              })}
              onChange={() => getError("username") || setStep(3)}
              onBlur={() => getError("username") || setStep(3)}
            />
            <FormErrorMessage>{getError("username")?.message}</FormErrorMessage>
          </FormControl>
        </Motion.Box>
      )}
    </Motion.Stack>
  )
}
