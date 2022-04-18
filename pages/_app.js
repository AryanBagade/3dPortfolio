import { ChakraProvider } from '@chakra-ui/react'
import Fonts from '../components/fonts'
import Layout from '../components/layouts/main'
import { AnimatePresence } from 'framer-motion'
import theme from '../lib/theme'

function Website({ Component, pageProps, router }) {
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <Layout router={router}>
        <AnimatePresence
          exitBeforeEnter
          initial={true}
          onExitComplete={() => {
            if (typeof window !== 'undefined') {
              window.scrollTo({ top: 0 })
            }
          }}
        >
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
      </Layout>
    </ChakraProvider>
  )
}

export default Website
