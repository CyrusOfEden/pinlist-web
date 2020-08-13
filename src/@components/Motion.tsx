import {
  Box as ChakraBox,
  Flex as ChakraFlex,
  Heading as ChakraHeading,
  SimpleGrid as ChakraSimpleGrid,
  Stack as ChakraStack,
  Text as ChakraText,
} from "@chakra-ui/core"
import { motion } from "framer-motion"

export const Box = motion.custom(ChakraBox)
export const Flex = motion.custom(ChakraFlex)
export const SimpleGrid = motion.custom(ChakraSimpleGrid)
export const Stack = motion.custom(ChakraStack)
export const Heading = motion.custom(ChakraHeading)
export const Text = motion.custom(ChakraText)
