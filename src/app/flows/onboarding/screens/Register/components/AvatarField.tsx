import {
  Avatar,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Stack,
} from "@chakra-ui/core"
import * as Motion from "~/src/@design/Motion"
import { useFormField } from "~/src/@hooks/useFormField"
import * as firebase from "~/src/@services/firebase"
import React, { useRef, useState } from "react"
import FileUploader from "react-firebase-file-uploader"

import { WindupFormLabel } from "./WindupFormLabel"

type PhotoUploadState =
  | { state: "mounted" }
  | { state: "inProgress" }
  | { state: "complete"; photoUrl: string }
  | { state: "error"; error: Error }

const UploadState = (state: PhotoUploadState) => ({
  ...state,
  is: (expectedState: PhotoUploadState["state"]) =>
    state.state === expectedState,
})

export const AvatarField = ({ form, isCurrentStep, ...delegated }) => {
  const [state, setState] = useState<PhotoUploadState>({ state: "mounted" })

  // State Derivations
  const upload = UploadState(state)
  const photoUrl = "photoUrl" in state ? state.photoUrl : ""
  const { isSubmitting } = form.formState

  // Custom Trigger
  const label = useRef(null)
  const openFilepicker = () => label.current.click()

  // Uploader Options
  const storage = firebase.storage.ref("avatars")
  const uploadStarted = () => setState({ state: "inProgress" })
  const uploadError = (error: Error) => setState({ state: "error", error })
  const uploadSuccess = async (filename: string) => {
    const photoUrl = await storage.child(filename).getDownloadURL()
    setState({ state: "complete", photoUrl })
    form.setValue("photoUrl", photoUrl)
  }

  const { error } = useFormField(form, "avatar")

  return (
    <Motion.Box {...delegated}>
      <WindupFormLabel title="Great! Now how about an avatar?" />
      <FormControl isInvalid={error}>
        <Input
          type="hidden"
          value={photoUrl}
          name="photoUrl"
          ref={form.register({ required: true })}
        />
        <Stack isInline align="center" spacing={4}>
          <Avatar color="white" bg="pink.500" src={photoUrl} />
          <FormLabel htmlFor="avatar" p={0} ref={label}>
            <Button
              variantColor="gold"
              variant={upload.is("complete") ? "ghost" : "solid"}
              onClick={openFilepicker}
              isLoading={upload.is("inProgress")}
              isDisabled={upload.is("inProgress")}
            >
              {upload.is("mounted")
                ? "Upload"
                : upload.is("inProgress")
                ? "Uploading..."
                : upload.is("error")
                ? "Uh oh, something went wrong."
                : upload.is("complete")
                ? "Change Avatar"
                : null}
            </Button>
            <FileUploader
              hidden
              id="avatar"
              name="avatar"
              accept="image/*"
              randomizeFilename
              storageRef={storage}
              onUploadStart={uploadStarted}
              onUploadError={uploadError}
              onUploadSuccess={uploadSuccess}
            />
          </FormLabel>
          {isCurrentStep && upload.is("complete") && (
            <Button
              type="submit"
              variantColor="gold"
              rightIcon="arrow-forward"
              isLoading={isSubmitting}
              isDisabled={isSubmitting}
              ml="auto"
            >
              Done
            </Button>
          )}
        </Stack>
        <FormErrorMessage>{error?.message}</FormErrorMessage>
      </FormControl>
    </Motion.Box>
  )
}
