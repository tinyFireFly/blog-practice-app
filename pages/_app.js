import '../styles/globals.css'

import { ChakraProvider, theme } from '@chakra-ui/react'
//import Navbar from '../project/layout/components/_Navbar'
import PageSetup from '../project/templates/PageSetup'
function MyApp({ Component, pageProps }) {

  return(
    <ChakraProvider theme={theme}>
      <PageSetup>
        <Component {...pageProps} />
      </PageSetup>
    </ChakraProvider>
    )
}

export default MyApp
