import {
  Avatar,
  Button,
  CircularProgress,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Stack,
} from "@chakra-ui/core"
import * as firebase from "~/src/services/firebase"
import { useFormField } from "~/src/system/hooks/useFormField"
import * as Motion from "~/src/system/Motion"
import React, { useRef, useState } from "react"
import FileUploader from "react-firebase-file-uploader"

import { WindupFormLabel } from "./WindupFormLabel"

type PhotoUploadState =
  | { state: "initial" }
  | { state: "uploading" }
  | { state: "completed"; photoURL: string }
  | { state: "error"; error: Error }

export const AvatarField = ({ form, isCurrentStep, ...delegated }) => {
  const { error } = useFormField(form, "avatar")

  const storageRef = firebase.storage.ref("avatars")
  const labelRef = useRef(null)

  const [upload, setUpload] = useState<PhotoUploadState>({ state: "initial" })

  const openFilepicker = () => labelRef.current.click()

  const uploadStarted = () => setUpload({ state: "uploading" })

  const uploadError = (error: Error) => setUpload({ state: "error", error })

  const uploadSuccess = async (filename: string) => {
    const photoURL = await storageRef.child(filename).getDownloadURL()
    setUpload({ state: "completed", photoURL })
    form.setValue("photoURL", photoURL)
  }

  const photoURL = "photoURL" in upload ? upload.photoURL : ""

  return (
    <Motion.Box {...delegated}>
      <WindupFormLabel title="Great! Now how about an avatar?" />
      <FormControl isInvalid={error}>
        <Input
          type="hidden"
          value={photoURL}
          name="photoURL"
          ref={form.register({ required: true })}
        />
        <Stack isInline align="center" spacing={4}>
          <Avatar color="white" bg="pink.500" src={photoURL} />
          <FormLabel htmlFor="avatar" p={0} ref={labelRef}>
            {upload.state === "completed" ? (
              <Button
                variantColor="gold"
                variant="ghost"
                onClick={openFilepicker}
              >
                Change Avatar
              </Button>
            ) : (
              <Button
                variantColor="gold"
                onClick={openFilepicker}
                isLoading={upload.state === "uploading"}
                isDisabled={upload.state === "uploading"}
              >
                {upload.state === "initial"
                  ? "Upload"
                  : upload.state === "uploading"
                  ? "Uploading..."
                  : "Uh oh, something went wrong."}
              </Button>
            )}
            <FileUploader
              hidden
              id="avatar"
              name="avatar"
              accept="image/*"
              randomizeFilename
              storageRef={storageRef}
              onUploadStart={uploadStarted}
              onUploadError={uploadError}
              onUploadSuccess={uploadSuccess}
            />
          </FormLabel>
          {isCurrentStep && upload.state === "completed" && (
            <Button
              type="submit"
              variantColor="gold"
              ml="auto"
              rightIcon="arrow-forward"
              isLoading={form.formState.isSubmitting}
              isDisabled={form.formState.isSubmitting}
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
