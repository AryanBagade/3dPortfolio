import NextLink from 'next/link'
import {
  Box,
  Heading,
  Text,
  Container,
  Divider,
  Button,
  useColorModeValue,
  VStack
} from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'

// Dynamically import FuzzyText to avoid SSR issues
const FuzzyText = dynamic(() => import('../components/FuzzyText'), {
  ssr: false,
  loading: () => (
    <Box textAlign="center">
      <Heading as="h1" mb={4}>404</Heading>
      <Text>Page Not Found</Text>
    </Box>
  )
})

const NotFound = () => {
  const textColor = useColorModeValue('#202023', '#f0e7db')
  const [mounted, setMounted] = useState(false)
  
  // Ensure component is mounted before showing FuzzyText to prevent hydration issues
  useEffect(() => {
    setMounted(true)
  }, [])
  
  return (
    <Container maxW="container.md" textAlign="center">
      {/* Add spacing to clear the voxel dog */}
      <Box pt={[8, 12, 16]} />
      
      <VStack spacing={6} py={8} position="relative" zIndex={10}>
        {/* 404 heading with fuzzy effect - Balanced responsive sizing */}
        <Box position="relative" zIndex={10}>
          {mounted ? (
            <FuzzyText 
              baseIntensity={0.3} 
              hoverIntensity={0.6} 
              enableHover={true}
              fontSize="clamp(3.5rem, 15vw, 6rem)"
              color={textColor}
              fontFamily="'M PLUS Rounded 1c', sans-serif"
              fontWeight={700}
            >
              404
            </FuzzyText>
          ) : (
            <Heading 
              as="h1" 
              fontSize="clamp(3.5rem, 15vw, 6rem)"
              fontFamily="'M PLUS Rounded 1c', sans-serif"
              fontWeight={700}
              color={textColor}
            >
              404
            </Heading>
          )}
        </Box>

        {/* Page Not Found text with subtle fuzzy effect - Balanced mobile and desktop */}
        <Box maxW="400px" mx="auto" position="relative" zIndex={10}>
          {mounted ? (
            <FuzzyText 
              baseIntensity={0.08} 
              hoverIntensity={0.3} 
              enableHover={true}
              fontSize="clamp(1.25rem, 5vw, 1.75rem)"
              color={textColor}
              fontFamily="'M PLUS Rounded 1c', sans-serif"
              fontWeight={400}
            >
              Page Not Found
            </FuzzyText>
          ) : (
            <Text 
              fontSize="clamp(1.25rem, 5vw, 1.75rem)"
              fontFamily="'M PLUS Rounded 1c', sans-serif"
              fontWeight={400}
              color={textColor}
            >
              Page Not Found
            </Text>
          )}
        </Box>

        <Divider my={4} />
        
        <Box position="relative" zIndex={10}>
          <NextLink href="/">
            <Button colorScheme="teal">Return to home</Button>
          </NextLink>
        </Box>
      </VStack>
    </Container>
  )
}

export default NotFound
